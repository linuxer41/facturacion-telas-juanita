import { format } from 'date-fns';
import { get } from 'svelte/store';

import { Workbook } from 'exceljs';
import { snackBar } from '$lib/core/store';
import { formatDateTime } from './formatters';

function roundToTwo(num: number): number {
	return +(Math.round(num + 'e+2') + 'e-2');
}

async function prepareAndDownload(
	data: any[],
	columns: any[],
	filename: string,
	title: string
): Promise<void> {
	const rows_per_page = 50;
	const workbook = new Workbook();
	workbook.creator = 'VENDEMAS';
	workbook.created = new Date();
	workbook.modified = new Date();
	workbook.lastPrinted = new Date();
	const worksheet = workbook.addWorksheet(filename, {
		properties: {
			tabColor: { argb: 'FFC0000' },
			showGridLines: false
		},
		pageSetup: {
			orientation: 'portrait',
			paperSize: 9,
			fitToPage: true,
			fitToHeight:
				data.length % rows_per_page
					? Math.floor(data.length / rows_per_page)
					: data.length / rows_per_page,
			fitToWidth: 1,
			margins: {
				left: 0.7,
				right: 0.7,
				top: 0.75,
				bottom: 0.75,
				header: 0.3,
				footer: 0.3
			},
			showGridLines: false
		}
	});
	// create table
	// worksheet.columns = columns;
	// style columns
	columns.map((col, index) => {
		const column = worksheet.getColumn(index + 1);
		column.width = col.width;
		column.style = {
			alignment: {
				vertical: 'middle'
				// horizontal: 'left'
			},
			numFmt: col.numFmt
		};
	});

	worksheet.addRow([]);
	const titleCell = worksheet.getCell('A1');
	worksheet.mergeCells(1, 0, 1, columns.length);
	titleCell.value = title;
	titleCell.font = {
		bold: true,
		size: 18,
		color: { argb: '000000' }
	};
	titleCell.alignment = {
		vertical: 'middle',
		horizontal: 'center'
	};

	// insert company row
	worksheet.addRow([]);
	worksheet.mergeCells(2, 0, 2, columns.length);
	const companyCell = worksheet.getCell('A2');
	companyCell.value = 'Telas juanita';
	companyCell.font = {
		size: 10,
		color: { argb: '000000' }
	};
	companyCell.alignment = {
		vertical: 'middle',
		horizontal: 'center'
	};

	// // insert date row
	worksheet.addRow([]);
	const dateCell = worksheet.getCell('A3');
	worksheet.mergeCells(3, 0, 3, columns.length);
	dateCell.value = `Fecha: ${formatDateTime(new Date())}`;
	dateCell.font = {
		size: 10,
		color: { argb: '000000' }
	};
	dateCell.alignment = {
		vertical: 'middle',
		horizontal: 'left'
	};

	// insert user row
	worksheet.addRow([]);
	worksheet.mergeCells(4, 0, 4, columns.length);
	const userCell = worksheet.getCell('A4');
	userCell.value = `Usuario: Admin`;
	userCell.font = {
		size: 10,
		color: { argb: '000000' }
	};
	userCell.alignment = {
		vertical: 'middle',
		horizontal: 'left'
	};
	const image_array_buffer = await getImageArrayBuffer('/images/logo.png');
	if (image_array_buffer) {
		const image = workbook.addImage({
			buffer: image_array_buffer,
			extension: 'jpeg'
		});
		worksheet.addImage(image, 'A1:A1');
	}
	worksheet.addTable({
		name: filename,
		ref: `A5`,
		totalsRow: true,
		style: {
			theme: 'TableStyleLight8',
			// showLastColumn: true,
			showRowStripes: true,
			showColumnStripes: true
			// showFirstColumn: true
		},
		columns: columns.map((column) => {
			return {
				name: column.header,
				filterButton: true,
				totalsRowLabel: column.totalsRowLabel,
				totalsRowFunction: column.totalsRowFunction
			};
		}),
		rows: data.map((row) => {
			return columns.map((column) => {
				return row[column.key];
			});
		})
	});
	const table = worksheet.getTable(filename);

	const buffer = await workbook.xlsx.writeBuffer();
	// save buffer to file system whit a element
	const blob = new Blob([buffer], {
		type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
	});
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = `${filename}_${format(new Date(), 'yy_MM_dd')}.xlsx`;
	a.click();
	URL.revokeObjectURL(url);
}

async function prepareAndDownloadSiat(
	data: any[],
	columns: any[],
	filename: string
): Promise<void> {
	const rows_per_page = 50;
	const workbook = new Workbook();
	workbook.creator = 'VENDEMAS';
	workbook.created = new Date();
	workbook.modified = new Date();
	workbook.lastPrinted = new Date();
	const worksheet = workbook.addWorksheet(filename, {
		properties: {
			tabColor: { argb: 'FFC0000' },
			showGridLines: false
		},
		pageSetup: {
			orientation: 'portrait',
			paperSize: 9,
			fitToPage: true,
			fitToHeight:
				data.length % rows_per_page
					? Math.floor(data.length / rows_per_page)
					: data.length / rows_per_page,
			fitToWidth: 1,
			margins: {
				left: 0.7,
				right: 0.7,
				top: 0.75,
				bottom: 0.75,
				header: 0.3,
				footer: 0.3
			},
			showGridLines: false
		}
	});
	// create table
	worksheet.columns = columns.map((column) => {
		return {
			header: column.header,
			key: column.key,
			width: column.width,
			numFmt: column.numFmt,
			style: {
				alignment: {
					vertical: 'middle'
				},
				numFmt: column.numFmt
			}
		};
	});
	worksheet.addRows(
		// data.map((row) => {
		// 	return columns.map((column) => {
		// 		return row[column.key];
		// 	})

		// })
		data
	);

	const buffer = await workbook.xlsx.writeBuffer();
	// save buffer to file system whit a element
	const blob = new Blob([buffer], {
		type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
	});
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = `${filename}_${format(new Date(), 'yy_MM_dd')}.xlsx`;
	a.click();
	URL.revokeObjectURL(url);
}

async function getImageArrayBuffer(url: string): Promise<ArrayBuffer> {
	try {
		const response = await fetch(url);
		if (response.ok) {
			return await response.arrayBuffer();
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
	}
}

export async function downloadInvoices(
	invoices: Factura[],
	filename: string,
	title = 'Reporte de facturas'
): Promise<void> {
	const data = [];
	// {
	// 	"Nº": 1,
	// 	"ESPECIFICACION": 2,
	// 	"FECHA DE LA FACTURA": "15-07-2022",
	// 	"N° DE LA FACTURA": "49",
	// 	"CODIGO DE AUTORIZACION": "463401200105854",
	// 	"NIT \/ CI CLIENTE": "388432022",
	// 	"COMPLEMENTO": "ch",
	// 	"NOMBRE O RAZON SOCIAL": "CONSTRUCCIONES Y SERVICIOS LLANOSGARCIA S.R.L.",
	// 	"IMPORTE TOTAL DE LA VENTA": 6144.4,
	// 	"IMPORTE ICE": 0,
	// 	"IMPORTE IEHD": 0,
	// 	"IMPORTE IPJ": 0,
	// 	"TASAS": 0,
	// 	"OTROS NO SUJETOS AL IVA": 0,
	// 	"EXPORTACIONES Y OPERACIONES EXENTAS": 0,
	// 	"VENTAS GRAVADAS A TASA CERO": 0,
	// 	"SUBTOTAL": 6144.4,
	// 	"DESCUENTOS, BONIFICACIONES Y REBAJAS SUJETAS AL IVA": 0,
	// 	"IMPORTE GIFT CARD": 0,
	// 	"IMPORTE BASE PARA DEBITO FISCAL": 6144.4,
	// 	"DEBITO FISCAL": 798.772,
	// 	"ESTADO": "V",
	// 	"CODIGO DE CONTROL": "74-C1-F9-64-75",
	// 	"TIPO DE VENTA": 1
	//    },
	let index = 1;
	for (const invoice of invoices) {
		data.push({
			_id: index,
			especificacion: 2,
			fecha: format(new Date(invoice.fechaFactura), 'dd-MM-yyyy'),
			numero: invoice.numero,
			codigo_de_autorizacion: invoice.cuf,
			nit: invoice.nit,
			complemento: 'ch',
			nombre: invoice.clientName || 'S/N',
			total: invoice.total,
			ice: 0,
			iehd: 0,
			ipj: 0,
			tasas: 0,
			otros: 0,
			exportaciones: 0,
			gravadas: 0,
			subtotal: invoice.total,
			descuentos: 0,
			gift_card: 0,
			base_debito_fiscal: invoice.total,
			debito_fiscal: invoice.total * 0.13,
			estado: invoice.estado === 'VALIDADA' ? 'V' : 'A',
			codigo_de_control: 0,
			tipo_de_venta: 1
		});
		index++;
	}

	const columns = [
		{
			key: '_id',
			header: 'Nº',
			width: 20,
			defaultValue: ''
		},
		{
			key: 'especificacion',
			header: 'ESPECIFICACION',
			width: 30,
			defaultValue: 2
		},
		{
			key: 'fecha',
			header: 'FECHA DE LA FACTURA',
			width: 30,
			defaultValue: ''
		},
		{
			key: 'numero',
			header: 'N° DE LA FACTURA',
			width: 30,
			defaultValue: ''
		},
		{
			key: 'codigo_de_autorizacion',
			header: 'CODIGO DE AUTORIZACION',
			width: 30,
			defaultValue: ''
		},
		{
			key: 'nit',
			header: 'NIT / CI CLIENTE',
			width: 30,
			defaultValue: ''
		},
		{
			key: 'complemento',
			header: 'COMPLEMENTO',
			width: 30,
			defaultValue: 'ch'
		},
		{
			key: 'nombre',
			header: 'NOMBRE O RAZON SOCIAL',
			width: 30,
			defaultValue: ''
		},
		{
			key: 'total',
			header: 'IMPORTE TOTAL DE LA VENTA',
			width: 30,
			defaultValue: 0,
			numFmt: '#,##0.00'
		},
		{
			key: 'ice',
			header: 'IMPORTE ICE',
			width: 30,
			defaultValue: 0
		},
		{
			key: 'iehd',
			header: 'IMPORTE IEHD',
			width: 30,
			defaultValue: 0
		},
		{
			key: 'ipj',
			header: 'IMPORTE IPJ',
			width: 30,
			defaultValue: 0
		},
		{
			key: 'tasas',
			header: 'TASAS',
			width: 30,
			defaultValue: 0
		},
		{
			key: 'otros',
			header: 'OTROS NO SUJETOS AL IVA',
			width: 30,
			defaultValue: 0
		},
		{
			key: 'exportaciones',
			header: 'EXPORTACIONES Y OPERACIONES EXENTAS',
			width: 30,
			defaultValue: 0
		},
		{
			key: 'gravadas',
			header: 'VENTAS GRAVADAS A TASA CERO',
			width: 30,
			defaultValue: 0
		},
		{
			key: 'subtotal',
			header: 'SUBTOTAL',
			width: 30,
			defaultValue: 0,
			numFmt: '#,##0.00'
		},
		{
			key: 'descuentos',
			header: 'DESCUENTOS, BONIFICACIONES Y REBAJAS SUJETAS AL IVA',
			width: 30,
			defaultValue: 0,
			numFmt: '#,##0.00'
		},
		{
			key: 'gift_card',
			header: 'IMPORTE GIFT CARD',
			width: 30,
			defaultValue: 0,
			numFmt: '#,##0.00'
		},
		{
			key: 'base_debito_fiscal',
			header: 'IMPORTE BASE PARA DEBITO FISCAL',
			width: 30,
			defaultValue: 0,
			numFmt: '#,##0.00'
		},
		{
			key: 'debito_fiscal',
			header: 'DEBITO FISCAL',
			width: 30,
			defaultValue: 0,
			numFmt: '#,##0.00'
		},
		{
			key: 'estado',
			header: 'ESTADO',
			width: 30,
			defaultValue: 'V'
		},
		{
			key: 'codigo_de_control',
			header: 'CODIGO DE CONTROL',
			width: 30,
			defaultValue: ''
		},
		{
			key: 'tipo_de_venta',
			header: 'TIPO DE VENTA',
			width: 30,
			defaultValue: 1
		}
	];
	await prepareAndDownloadSiat(data, columns, filename);
}
