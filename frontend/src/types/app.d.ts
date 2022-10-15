interface CartItem {
	productId: number;
	name: string;
	price: number;
	quantity: number;
	discount: number;
	subtotal: number;
	product: Producto;
}

interface Cart {
	items: CartItem[];
	cliente: Cliente;
	subTotal: number;
	totalDescuento: number;
	montoTotal: number;
	codigoTipoDocumentoIdentidad: number;
	montoGiftCard: number;
	montoTotalSujetoIva: number;
	descuentoAdicional: number;
	codigoMetodoPago: number;
	numeroTarjeta: string;
}
interface Producto {
	id: number;

	detalle: string;

	codigoProducto: string;

	codigoProductoSiat: string;

	cantidad: number = 0;
	precio: number = 0;

	codigoUnidadMedida: string;
}

interface Factura {
	id?: number;
	numero: number;
	clientName: string;
	nit: string;
	items: Item[];
	xml: string;
	pdf?: string;
	subtotal: number;
	descuento: number;
	total: number;
	cuf: string;
	cufd: string;
	json: FacturaXMLJSON;
	createdAt?: string;
	updatedAt?: string;
	deletedAt?: null;
	estado: string;
	tipoEmision: string;
	fechaFactura: string;
}

interface FacturaPreparada {
	tipoDocumento: string;
	json: FacturaXMLJSON;
	zip: string;
	sha256: string;
	xml: string;
}

interface FacturaXMLJSON {
	cabecera: FacturaXMLJSONCabecera;
	detalle: FacturaXMLJSONDetalle[];
}

interface FacturaXMLJSONCabecera {
	nitEmisor: string;
	razonSocialEmisor: string;
	municipio: string;
	telefono: string;
	numeroFactura: string;
	cuf: string;
	cufd: string;
	codigoSucursal: string;
	direccion: string;
	codigoPuntoVenta: string;
	fechaEmision: string;
	nombreRazonSocial: string;
	codigoTipoDocumentoIdentidad: string;
	numeroDocumento: string;
	complemento: string;
	codigoCliente: string;
	codigoMetodoPago: string;
	numeroTarjeta: string;
	montoTotal: string;
	montoTotalSujetoIva: string;
	codigoMoneda: string;
	tipoCambio: string;
	montoTotalMoneda: string;
	montoGiftCard: string;
	descuentoAdicional: string;
	codigoExcepcion: string;
	cafc: string;
	leyenda: string;
	usuario: string;
	codigoDocumentoSector: string;
}

interface FacturaXMLJSONDetalle {
	actividadEconomica: string;
	codigoProductoSin: string;
	codigoProducto: string;
	descripcion: string;
	cantidad: string;
	unidadMedida: string;
	precioUnitario: string;
	montoDescuento: string;
	subTotal: string;
	numeroSerie: string;
	numeroImei: string;
}

interface Cotizacion {
	id: number;
	numero: number;
	clientName: string;
	nit: string;
	items: Item[];
	subtotal: number;
	descuento: number;
	total: number;
	createdAt: string;
	updatedAt: string;
	deletedAt: null;
	__entity: string;
}
interface Usuario {
	id:        number;
	email:     string;
	provider:  string;
	socialId:  null;
	firstName: string;
	lastName:  string;
	createdAt: string;
	updatedAt: string;
	deletedAt: null;
	photo:     null;
	role:      Role;
	status:    Role;
}

interface Role {
	id:       number;
	name:     string;
}


interface Item {
	medida: string;
	precio: number;
	detalle: string;
	cantidad: number;
	subtotal: number;
	descuento: number;
	codigoProducto: string;
}
// Generated by https://quicktype.io

interface Cliente {
	id: number;
	email: string;
	name: string;
	phone: string;
	nit: string;
	createdAt: string;
	updatedAt: string;
	deletedAt: null;
	__entity: string;
}

// Generated by https://quicktype.io

interface PrepararFactura {
	solicitud: Solicitud;
	cabecera: Cabecera;
	detalle: Detalle[];
}

interface Cabecera {
	nitEmisor: number;
	razonSocialEmisor: string;
	municipio: string;
	telefono: string;
	numeroFactura: number;
	cuf?: string;
	cufd: string;
	codigoSucursal: number;
	direccion: string;
	codigoPuntoVenta: number;
	fechaEmision: string;
	nombreRazonSocial: string;
	codigoTipoDocumentoIdentidad: number;
	numeroDocumento: string;
	complemento: string;
	codigoCliente: string;
	codigoMetodoPago: number;
	numeroTarjeta: string;
	montoTotal: number;
	montoTotalSujetoIva: number;
	montoGiftCard: number;
	descuentoAdicional: number;
	codigoExcepcion: number;
	cafc?: string;
	codigoMoneda: number;
	tipoCambio: number;
	montoTotalMoneda: number;
	leyenda: string;
	usuario: string;
	codigoDocumentoSector: number;
}

interface Detalle {
	actividadEconomica: string;
	codigoProductoSin: number;
	codigoProducto: string;
	descripcion: string;
	cantidad: number;
	unidadMedida: number;
	precioUnitario: number;
	montoDescuento: number;
	subTotal: number;
	numeroSerie?: string;
	numeroImei?: string;
}

interface Solicitud {
	codigoModalidad: number;
	codigoEmision: number;
	tipoFacturaDocumento: number;
	codigoControlCUFD: string;
}
