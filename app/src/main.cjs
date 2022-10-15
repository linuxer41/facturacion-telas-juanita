const path = require('path');
// @ts-ignore
var cp = require('child_process')
const log = require('electron-log');
// @ts-ignore
const { app, ipcMain, BrowserWindow, shell, Notification, dialog } = require('electron');

const port = process.env.PORT || 5173;
const isdev = !app.isPackaged || process.env.NODE_ENV == 'development';
//const isdev = true
/**
 * @type {BrowserWindow} name A name to use.
 */
let mainWindow;
/**
 * @type {BrowserWindow} name A name to use.
 */

let printerWindow;

if (!isdev) {
	cp.fork(path.resolve('.', 'server/main.js'))
		.on('message', (msg) => {
			console.log('server ready');
			log.info('server ready');
		}).on('error', (err) => {
			console.log(err);
			log.error(err);
		}).on('exit', (code, signal) => {
			console.log(`child process exited with code ${code} and signal ${signal}`);
		})
}

const serve = require('electron-serve');

const loadURL = serve({ directory: '.' });
// @ts-ignore
function loadVite(port) {
	// @ts-ignore
	mainWindow.loadURL(`http://127.0.0.1:${port}`).catch((err) => {
		setTimeout(() => {
			loadVite(port);
		}, 200);
	});
}



//const APP_URI = 'http://localhost:3000'

function createmainWindow() {
	mainWindow = new BrowserWindow({
		width: 1000,
		height: 800,
		minWidth: 800,
		minHeight: 600,
		webPreferences: {
			contextIsolation: true,
			devTools: isdev,
			preload: path.join(__dirname, 'preload.cjs')
		},
		// silent print
		// titleBarStyle: 'hidden',
		// titleBarOverlay: {
		// 	color: '#fff',
		// 	symbolColor: '#74b1be',
		// 	height: 20
		// }
	});

	mainWindow.once('close', () => {
		
		// @ts-ignore
		mainWindow = null;
	});
	mainWindow.once('ready-to-show', () => {
		mainWindow.focus();
		mainWindow.show();
	});
	//test
	//mainWindow.removeMenu();

	if (!isdev) mainWindow.removeMenu();
	else mainWindow.webContents.openDevTools();
	// test
	// mainWindow.webContents.openDevTools();

	//mws.manage(mainWindow);

	if (isdev) loadVite(port);
	else loadURL(mainWindow);

	mainWindow.webContents.setWindowOpenHandler(({ url }) => {
		if (url.startsWith('https://')) {
			shell.openExternal(url);
			return { action: 'deny' };
		} else {
			return {
				action: 'allow',
				overrideBrowserWindowOptions: {
					// fullscreenable: false,
					backgroundColor: 'black',
					modal: true,
					alwaysOnTop: true,
					webPreferences: {
						nodeIntegration: false,
						enableRemoteModule: false,
						contextIsolation: false,
						preload: path.join(__dirname, 'preload.cjs'),
					},
					parent: mainWindow,
					
				}
			};
		}
	});

	// @ts-ignore
	mainWindow.webContents.on('did-create-window', (newWindow, details) => {
		newWindow.removeMenu();
		newWindow.webContents.on('did-finish-load', () => {
			//newWindow.webContents.openDevTools();
			// newWindow.webContents.send('print', details);
			console.log('newWindow', details);
			// newWindow.webContents.print();
		});
	});
	// @ts-ignore
	mainWindow.webContents.session.on('will-download', (event, item, webContents) => {
		/**
		 * @type {Electron.FileFilter[]} filters
		 */
		let filters = [];
		switch (item.getMimeType()) {
			case 'text/csv':
				filters = [{ name: 'Microsoft Excel Comma Separated Values File', extensions: ['csv'] }];
				break;
			case 'text/json':
				filters = [{ name: 'JSON File', extensions: ['json'] }];
				break;
			case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
				filters = [{ name: 'Microsoft Excel 2007 Workbook', extensions: ['xlsx'] }];

				break;
			case 'application/vnd.openxmlformats-officedocument.spreadsheetml.template':
				filters = [{ name: 'Microsoft Excel 2007 Workbook Template', extensions: ['xltx'] }];
				break;
			case 'application/vnd.ms-excel':
				filters = [{ name: 'Microsoft Excel 97-2003 Workbook', extensions: ['xls'] }];
				break;
			case 'application/vnd.ms-excel.addin.macroEnabled.12':
				filters = [{ name: 'Microsoft Excel 97-2003 Add-In', extensions: ['xlam'] }];
				break;
			case 'application/vnd.ms-excel.sheet.binary.macroEnabled.12':
				filters = [{ name: 'Microsoft Excel 97-2003 Binary Workbook', extensions: ['xlsb'] }];
				break;
			case 'application/octet-stream':
				filters = [{ name: 'Zip archive', extensions: ['zip'] }];
				break;
			// pdf
			case 'application/pdf':
				filters = [{ name: 'PDF File', extensions: ['pdf'] }];
				break;
			case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
				filters = [{ name: 'Microsoft PowerPoint 2007 Presentation', extensions: ['pptx'] }];
				break;
			case 'application/vnd.openxmlformats-officedocument.presentationml.template':
				filters = [
					{ name: 'Microsoft PowerPoint 2007 Presentation Template', extensions: ['potx'] }
				];

				break;
			default:
				break;
		}

		item.setSaveDialogOptions({
			title: 'Guardar archivo',
			filters: [...filters, { name: 'All Files', extensions: ['*'] }]
		});
		// @ts-ignore
		item.on('done', (event, state) => {
			if (state === 'completed') {
				console.log('Download successfully');
			} else {
				console.log('Download failed');
			}
		});
		// @ts-ignore
		item.on('updated', (event, state) => {
			if (state === 'interrupted') {
				console.log('Download interrupted');
			}
		});
	});
	// print event
	// mainWindow.webContents.on("", (event, details) => {
	// 	console.log('print', details);
	// }
}

function createPrinterWindow() {
	printerWindow = new BrowserWindow({
		width: 1000,
		height: 800,
		minWidth: 800,
		minHeight: 600,
		show: false,
		parent: mainWindow,
		webPreferences: {
			contextIsolation: true,
			devTools: true,
			preload: path.join(__dirname, 'preload.cjs')
		}
	});

	printerWindow.once('close', () => {
		// @ts-ignore
		printerWindow = null;
	});
}

/**
 * 
 * @param {string} html 
 * @param {*} width 
 * @returns 
 */
function prepareRawHtml(html, width = 210) {
	// import fornt from fonts.cjs
	const { IBMPlexSansBase64 } = require('./fonts.cjs');
	return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		<meta name="author" content="">
	
		</head>
		<body>
		<style>
			@font-face {
				font-family: 'IBM Plex Sans';
				src: url('data:font/truetype;charset=utf-8;base64,${IBMPlexSansBase64}') format('truetype');
			}
			html{
				font-family: 'IBM Plex Sans', sans-serif;
			}
			.document{
				width: ${width}mm;
				padding: 5mm;
				margin: 0;
			}
		</style>
			${html}
		</body>
	</html>`;
}

/**
 *
 * @param {BrowserWindow} window
 * @param {*} paper
 */
async function normaliceSize(window, paper) {
	const offsetHeight = await window.webContents.executeJavaScript(`document.body.offsetHeight`);
	const heightMM = await window.webContents.executeJavaScript(`
	let div = document.createElement('div');
	div.style.display = 'block';
	div.style.height = '100mm';
	document.body.appendChild(div);
	let convert = Number(${offsetHeight}) / (div.offsetHeight / 100);
	div.parentNode.removeChild(div);
	Math.floor(convert);
	`);
	const size = {
		width: (paper?.width || 210) * 1000,
		height: (paper?.height || heightMM) * 1000 // substract 10mm for margins
	};
	return size;
}
async function generatePdf(data) {
	if (!printerWindow) {
		createPrinterWindow();
	}
	const rawHtml = prepareRawHtml(data.html, data.paper);
	printerWindow.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(rawHtml)}`);
	// wait for load
	await new Promise((resolve) => {
		printerWindow.webContents.on('did-finish-load', resolve);
	});
	const size = await normaliceSize(printerWindow, data.paper);
	const _pdf = await printerWindow.webContents.printToPDF({
		marginsType: 0,
		pageSize: size,
		printBackground: true,
		printSelectionOnly: false,
		landscape: data.orientation === 'landscape'
	});
	printerWindow.close();
	printerWindow = null;
	return _pdf;
}

ipcMain.handle('getPrinters', async (event) => {
	return await mainWindow.webContents.getPrintersAsync();
});

ipcMain.handle('generatePdf', async (event, data) => {
	return await generatePdf(data);
});

ipcMain.handle('printChildWindow', async (event, data) => {
	// console.log('[printChildWindow]', data);
	// const currentWindow = BrowserWindow.getFocusedWindow();
	// console.log('[printChildWindow] currentWindow', currentWindow);
	// get first frame
	
	// console.log('[printChildWindow] childWindow', childWindow);
	const frames = mainWindow.webContents.mainFrame.frames;
	console.log('[printChildWindow] frames', frames);
	const frame = frames[0];
	console.log('[printChildWindow] frame', frame);
	// console.log('[printChildWindow] frame', frame);
	// frame.
	// print frame content
	const childWindow = BrowserWindow.fromWebContents(event.sender);
	console.log('[printChildWindow] childWindow', childWindow);
	if (childWindow) {
		const config = {
			printBackground: true,
			landscape: data.orientation === 'landscape',
			// silent: [null, undefined, true].includes(data.silent) ? data.silent : true,
			// silent: true,
			deviceName: (
				data.printer ||
				((await childWindow.webContents.getPrintersAsync()).filter((p) => p.isDefault)[0] || {})?.name
			|| 'EPSON TM-T20 ReceiptE4').trim()
			
		}
		console.log(config);
		return await childWindow.webContents.print();
	}
});

async function printCrossPlatform(data, filename) {
	switch (process.platform) {
		case 'darwin':
		case 'linux':
			const { spawn } = require('child_process');
			spawn('lp', ['-d', 'EPSON TM-T20IIIL Receipt', filename], { detached: true });
			break;
		case 'win32':
			const pdfPrint = require('pdf-to-printer');
			const printers = (await pdfPrint.getPrinters()) || [];
			const printer =
				printers.find((printer) => printer.name === data.printer) ||
				(await pdfPrint.getDefaultPrinter()) ||
				printers[0];
			const options = {
				printer: printer.name || (await pdfPrint.getDefaultPrinter())?.name,
				printDialog: false,
				silent: true,
				copies: 1,
			}
			
			// if (!data.silent) {
			// 	delete options.printer
			// }
			console.log('printCrossPlatform', options);
			await pdfPrint.print(filename, options);
			break;
		default:
			throw new Error('Platform not supported.');
	}
	const fs = require('fs');
	fs.unlinkSync(filename);
}
ipcMain.handle('print', async (event, data) => {
	// invoke printpdf
	const pdf = await generatePdf(data);
	// save pdf
	const pdfPath = path.join(app.getPath('temp'), 'print.pdf');
	const fs = require('fs');
	fs.writeFileSync(pdfPath, pdf);
	// print pdf
	printCrossPlatform(data, pdfPath);
	return pdf
});
app.once('ready', () => {
	createmainWindow();
	createPrinterWindow();
});
app.on('activate', () => {
	if (!mainWindow) createmainWindow();
	if (!printerWindow) createPrinterWindow();
});
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

// auto-updater
