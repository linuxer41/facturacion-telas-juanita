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

export async function downloadTransactions(
	transactions: Transaction[],
	filename: string,
	title = 'Reporte de ventas'
): Promise<void> {
	const data = [];

	for (const transaction of transactions) {
		data.push({
			created_at: formatDateTime(transaction.created_at),
			customer: transaction.contact?.name || 'Sin nombre',
			total_net: roundToTwo(transaction.total_net || 0),
			total_costo: roundToTwo(transaction.total_cost || 0),
			total_gross: roundToTwo(transaction.total_gross || 0),
			total_discount: roundToTwo(transaction.total_discount || 0),
			products: transaction.items.map((item) => item.product?.name || '').join(', '),
			payment_type:
				APP_PARAMS.transaction_payment_types.find(
					(type) => type.key === transaction.payment_type_code
				)?.label || '',
			payment_method:
				APP_PARAMS.transaction_payment_methods.find(
					(method) => method.key === transaction.payment_method_code
				)?.label || '',
			user: transaction?.user?.first_name || ''
		});
	}

	const columns = [
		{
			key: 'created_at',
			header: 'Fecha',
			width: 20,
			totalsRowFunction: 'none',
			totalsRowLabel: 'Totales',
			numberFormat: 'dd/mm/yyyy',
			numFmt: '#,##0.00'
		},
		{
			key: 'customer',
			header: 'Contacto',
			width: 30,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'total_cost',
			header: 'Total Costo',
			width: 15,
			totalsRowFunction: 'sum',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'total_gross',
			header: 'Total bruto',
			width: 15,
			totalsRowFunction: 'sum',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'total_discount',
			header: 'Descuento',
			width: 15,
			totalsRowFunction: 'sum',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'total_net',
			header: 'Total neto',
			width: 15,
			totalsRowFunction: 'sum',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'products',
			header: 'Productos',
			width: 30,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'payment_type',
			header: 'Tipo',
			width: 10,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'payment_method',
			header: 'Método de pago',
			width: 15,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'user',
			header: 'Usuario',
			width: 15,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		}
	];
	await prepareAndDownload(data, columns, filename, title);
}

export async function downloadDebts(
	debts: Debt[],
	filename: string,
	title = 'Reporte de deudas'
): Promise<void> {
	const data = [];
	for (const debt of debts) {
		data.push({
			created_at: formatDateTime(debt.created_at),
			customer: debt.contact?.name || 'Sin nombre',
			total_amount: roundToTwo(debt.total_amount || 0),
			total_accumulated: roundToTwo(debt.total_accumulated || 0),
			total_remaining: roundToTwo(debt.total_remaining || 0),
			next_payment_date: dateFormater.format(debt.next_payment_date),
			comment: debt.comment,
			user: debt?.user?.first_name || ''
		});
	}
	const columns = [
		{
			key: 'created_at',
			header: 'Fecha',
			width: 20,
			totalsRowFunction: 'none',
			totalsRowLabel: 'Totales',
			numFmt: '#,##0.00'
		},
		{
			key: 'customer',
			header: 'Contacto',
			width: 30,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'total_amount',
			header: 'Monto total',
			width: 15,
			totalsRowFunction: 'sum',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'total_accumulated',
			header: 'Amortizado',
			width: 15,
			totalsRowFunction: 'sum',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'total_remaining',
			header: 'Saldo',
			width: 15,
			totalsRowFunction: 'sum',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'next_payment_date',
			header: 'Siguiente pago',
			width: 20,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'comment',
			header: 'Observacion',
			width: 30,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'user',
			header: 'Usuario',
			width: 10,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		}
	];
	await prepareAndDownload(data, columns, filename, title);
}
export async function downloadProducts(
	products: Product[],
	filename: string,
	title = 'Reporte de inventario'
): Promise<void> {
	const data = [];
	for (const product of products) {
		const stock = getAvailableQuantity(product, get(storeBranch));
		const price = getMainPrice(product, get(storeBranch));
		data.push({
			custom_code: product.custom_code,
			name: product.name,
			description: product.description || '',
			stock: stock,
			price: price,
			total_cost: stock * (product.purchase_price || 0),
			total_price: stock * price,
			purchase_price: product.purchase_price || 0,
			measure_code: product.properties.find((p) => p.type_code === 'MEASURE')?.name || '',
			category: product.properties.find((p) => p.type_code === 'CATEGORY')?.name || '',
			brand: product.properties.find((p) => p.type_code === 'BRAND')?.name || '',
			provider: product.contact?.name || ''
		});
	}

	const columns = [
		{
			key: 'custom_code',
			header: 'Codigo de producto',
			width: 20,
			totalsRowFunction: 'none',
			totalsRowLabel: 'Totales',
			numFmt: '#,##0.00'
		},
		{
			key: 'name',
			header: 'Nombre',
			width: 30,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'description',
			header: 'Descripción',
			width: 30,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'stock',
			header: 'Stock',
			width: 10,
			totalsRowFunction: 'sum',
			totalsRowLabel: '',
			numFmt: ''
		},
		{
			key: 'purchase_price',
			header: 'Costo',
			width: 10,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'price',
			header: 'Precio',
			width: 10,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'total_cost',
			header: 'Costo Total',
			width: 15,
			totalsRowFunction: 'sum',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'total_price',
			header: 'Precio total',
			width: 15,
			totalsRowFunction: 'sum',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'measure_code',
			header: 'U. Medida',
			width: 10,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'category',
			header: 'Categoría',
			width: 10,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'brand',
			header: 'Marca',
			width: 10,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		},
		{
			key: 'provider',
			header: 'Proveedor',
			width: 15,
			totalsRowFunction: 'none',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		}
	];
	await prepareAndDownload(data, columns, filename, title);
}
export async function downloadProductMovent(
	products: any[],
	filename: string,
	title = 'Reporte de movimientos de productos'
): Promise<void> {
	const data = [];
	for (const product of products) {
		// <td>{item.product_name || '--'}</td>
		// <td>{item.initial_quantity || 0}</td>
		// <td>{item.sale_quantity}</td>
		// <td>{item.purchase_quantity}</td>
		// <td>{item.available}</td>
		// <td>{formatCurrency(item.sale_total_price)}</td>
		data.push({
			product_name: product.product_name,
			// initial_quantity: product.initial_quantity,
			sale_quantity: product.sale_quantity,
			purchase_quantity: product.purchase_quantity,
			available: product.available,
			sale_total_price: roundToTwo(product.sale_total_price)
		});
	}

	const columns = [
		{
			key: 'product_name',
			header: 'Nombre',
			width: 100,
			totalsRowFunction: 'none',
			totalsRowLabel: ''
		},
		// {
		// 	key: 'initial_quantity',
		// 	header: 'Stock inicial',
		// 	width: 15,
		// 	totalsRowFunction: 'sum',
		// 	totalsRowLabel: '',
		// 	numFmt: ''
		// },
		{
			key: 'sale_quantity',
			header: 'Ventas',
			width: 15,
			totalsRowFunction: 'sum',
			totalsRowLabel: '',
			numFmt: ''
		},
		{
			key: 'purchase_quantity',
			header: 'Compras',
			width: 15,
			totalsRowFunction: 'sum',
			totalsRowLabel: '',
			numFmt: ''
		},
		{
			key: 'quantity',
			header: 'Disponible',
			width: 15,
			totalsRowFunction: 'sum',
			totalsRowLabel: '',
			numFmt: ''
		},
		{
			key: 'sale_total_price',
			header: 'Total Ventas',
			width: 20,
			totalsRowFunction: 'sum',
			totalsRowLabel: '',
			numFmt: '#,##0.00'
		}
	];
	await prepareAndDownload(data, columns, filename, title);
}
