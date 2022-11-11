import { get } from 'svelte/store';
import { facturacionSincronizacionService } from '../services';
import {
	codigoActividadEconomica,
	codigoAmbiente,
	codigoModalidad,
	codigoPuntoVenta,
	codigoSistema,
	codigoSucursal,
	codigoTipoEmision,
	cufd,
	cuis,
	nit,
	tipoFacturaDocumento,
	codigoDocumentoSector,
	razonSocialEmisor,
	municipio,
	telefono,
	cafc,
	facturacionManual,
	cartsHistory,
	cuisHistory,
	cufdHistory,
	eventoSignificativo,
	storeParametricas,
	facturacionFueraDeLinea
} from '../store';

// POST
// /api/facturacion-sincronizacion/sincronizar-actividades

// POST
// /api/facturacion-sincronizacion/sincronizar-fecha-hora

// POST
// /api/facturacion-sincronizacion/sincronizar-lista-leyendas-factura

// POST
// /api/facturacion-sincronizacion/sincronizar-parametrica-tipo-habitacion

// POST
// /api/facturacion-sincronizacion/sincronizar-lista-actividades-documento-sector

// POST
// /api/facturacion-sincronizacion/sincronizar-parametrica-tipo-documento-identidad

// POST
// /api/facturacion-sincronizacion/sincronizar-parametrica-unidad-medida

// POST
// /api/facturacion-sincronizacion/sincronizar-parametrica-tipo-documento-sector

// POST
// /api/facturacion-sincronizacion/sincronizar-parametrica-tipos-factura

// POST
// /api/facturacion-sincronizacion/verificar-comunicacion

// POST
// /api/facturacion-sincronizacion/sincronizar-lista-mensajes-servicios

// POST
// /api/facturacion-sincronizacion/sincronizar-parametrica-tipo-metodo-pago

// POST
// /api/facturacion-sincronizacion/sincronizar-parametrica-eventos-significativos

// POST
// /api/facturacion-sincronizacion/sincronizar-parametrica-tipo-punto-venta

// POST
// /api/facturacion-sincronizacion/sincronizar-lista-productos-servicios

// POST
// /api/facturacion-sincronizacion/sincronizar-parametrica-tipo-emision

// POST
// /api/facturacion-sincronizacion/sincronizar-parametrica-pais-origen

// POST
// /api/facturacion-sincronizacion/sincronizar-parametrica-tipo-moneda
let parametricaMotivoDeAnulacion: { [key: string]: string }[] = [];
let actividades: { [key: string]: string }[] = [];
let fechaHora: { [key: string]: string }[] = [];
let listaLeyendasFactura: { [key: string]: string }[] = [];
let parametricaTipoHabitacion: { [key: string]: string }[] = [];
let listaActividadesDocumentoSector: { [key: string]: string }[] = [];
let parametricaTipoDocumentoIdentidad: { [key: string]: string }[] = [];
let parametricaUnidadMedida: { [key: string]: string }[] = [];
let parametricaTipoDocumentoSector: { [key: string]: string }[] = [];
let parametricaTiposFactura: { [key: string]: string }[] = [];
let verificarComunicacion: { [key: string]: string }[] = [];
let listaMensajesServicios: { [key: string]: string }[] = [];
let parametricaTipoMetodoPago: { [key: string]: string }[] = [];
let parametricaEventosSignificativos: { [key: string]: string }[] = [];
let parametricaTipoPuntoVenta: { [key: string]: string }[] = [];
let listaProductosServicios: { [key: string]: string }[] = [];
let parametricaTipoEmision: { [key: string]: string }[] = [];
let parametricaPaisOrigen: { [key: string]: string }[] = [];
let parametricaTipoMoneda: { [key: string]: string }[] = [];

// const requestData = {
// 	codigoPuntoVenta,
// 	codigoSucursal,
// 	codigoAmbiente,
// 	codigoSistema,
// 	cuis,
// 	nit
// };

interface RequestData {
	codigoPuntoVenta: number;
	codigoSucursal: number;
	codigoAmbiente: number;
	codigoSistema: string;
	cuis: string;
	nit: number;
}

function loadStore() {
	codigoPuntoVenta.load();
	codigoSucursal.load();
	codigoAmbiente.load();
	codigoSistema.load();
	codigoModalidad.load();
	cuis.load();
	nit.load();
	cufd.load();
	codigoActividadEconomica.load();
	codigoTipoEmision.load();
	codigoDocumentoSector.load();
	tipoFacturaDocumento.load();
	razonSocialEmisor.load();
	municipio.load();
	telefono.load();
	cafc.load();
	facturacionManual.load();
	cartsHistory.load();
	cuisHistory.load();
	cufdHistory.load();
	eventoSignificativo.load();
	facturacionFueraDeLinea.load();
}

async function loadAllLists() {
	try {
		const requestData = {
			codigoPuntoVenta: get(codigoPuntoVenta),
			codigoSucursal: get(codigoSucursal),
			codigoAmbiente: get(codigoAmbiente),
			codigoSistema: get(codigoSistema),
			cuis: get(cuis)?.codigo,
			nit: get(nit),
			codigoModalidad: get(codigoModalidad)
		};
		const responses = await Promise.all([
			facturacionSincronizacionService.sincronizarParametricaMotivoAnulacion(requestData),
			facturacionSincronizacionService.sincronizarActividades(requestData),
			facturacionSincronizacionService.sincronizarFechaHora(requestData),
			facturacionSincronizacionService.sincronizarListaLeyendasFactura(requestData),
			facturacionSincronizacionService.sincronizarParametricaTipoHabitacion(requestData),
			facturacionSincronizacionService.sincronizarListaActividadesDocumentoSector(requestData),
			facturacionSincronizacionService.sincronizarParametricaTipoDocumentoIdentidad(requestData),
			facturacionSincronizacionService.sincronizarParametricaUnidadMedida(requestData),
			facturacionSincronizacionService.sincronizarParametricaTipoDocumentoSector(requestData),
			facturacionSincronizacionService.sincronizarParametricaTiposFactura(requestData),
			facturacionSincronizacionService.verificarComunicacion(requestData),
			facturacionSincronizacionService.sincronizarListaMensajesServicios(requestData),
			facturacionSincronizacionService.sincronizarParametricaTipoMetodoPago(requestData),
			facturacionSincronizacionService.sincronizarParametricaEventosSignificativos(requestData),
			facturacionSincronizacionService.sincronizarParametricaTipoPuntoVenta(requestData),
			facturacionSincronizacionService.sincronizarListaProductosServicios(requestData),
			facturacionSincronizacionService.sincronizarParametricaTipoEmision(requestData),
			facturacionSincronizacionService.sincronizarParametricaPaisOrigen(requestData),
			facturacionSincronizacionService.sincronizarParametricaTipoMoneda(requestData)
		]);
		let index = 0;
		for (const response of responses) {
			if (response.ok) {
				const data = await response.json();
				console.log(data);
				if (data.transaccion === true) {
					switch (index) {
						case 0:
							parametricaMotivoDeAnulacion = data.listaCodigos;
							break;
						case 1:
							actividades = data.listaActividades;
							break;
						case 2:
							fechaHora = data.fechaHora;
							break;
						case 3:
							listaLeyendasFactura = data.listaLeyendas;
							break;
						case 4:
							parametricaTipoHabitacion = data.listaCodigos;
							break;
						case 5:
							listaActividadesDocumentoSector = data.listaActividadesDocumentoSector;
							break;
						case 6:
							parametricaTipoDocumentoIdentidad = data.listaCodigos;
							break;
						case 7:
							parametricaUnidadMedida = data.listaCodigos;
							break;
						case 8:
							parametricaTipoDocumentoSector = data.listaCodigos;
							break;
						case 9:
							parametricaTiposFactura = data.listaCodigos;
							break;
						case 10:
							verificarComunicacion = data.mensajesList;
							break;
						case 11:
							listaMensajesServicios = data.listaCodigos;
							break;
						case 12:
							parametricaTipoMetodoPago = data.listaCodigos;
							break;
						case 13:
							parametricaEventosSignificativos = data.listaCodigos;
							break;
						case 14:
							parametricaTipoPuntoVenta = data.listaCodigos;
							break;
						case 15:
							listaProductosServicios = data.listaCodigos;
							break;
						case 16:
							parametricaTipoEmision = data.listaCodigos;
							break;
						case 17:
							parametricaPaisOrigen = data.listaCodigos;
							break;
						case 18:
							parametricaTipoMoneda = data.listaCodigos;
							break;
					}
				}
				index++;
			}
		}
		const allParams = {
			parametricaMotivoDeAnulacion,
			actividades,
			fechaHora,
			listaLeyendasFactura,
			parametricaTipoHabitacion,
			listaActividadesDocumentoSector,
			parametricaTipoDocumentoIdentidad,
			parametricaUnidadMedida,
			parametricaTipoDocumentoSector,
			parametricaTiposFactura,
			verificarComunicacion,
			listaMensajesServicios,
			parametricaTipoMetodoPago,
			parametricaEventosSignificativos,
			parametricaTipoPuntoVenta,
			listaProductosServicios,
			parametricaTipoEmision,
			parametricaPaisOrigen,
			parametricaTipoMoneda
		}
		storeParametricas.sync(allParams);
	} catch (error) {
		// load from store storeParametricas
		const allParams = get(storeParametricas);
		if (allParams !== null) {
			
			parametricaMotivoDeAnulacion = allParams.parametricaMotivoDeAnulacion;
			actividades = allParams.actividades;
			fechaHora = allParams.fechaHora;
			listaLeyendasFactura = allParams.listaLeyendasFactura;
			parametricaTipoHabitacion = allParams.parametricaTipoHabitacion;
			listaActividadesDocumentoSector = allParams.listaActividadesDocumentoSector;
			parametricaTipoDocumentoIdentidad = allParams.parametricaTipoDocumentoIdentidad;
			parametricaUnidadMedida = allParams.parametricaUnidadMedida;
			parametricaTipoDocumentoSector = allParams.parametricaTipoDocumentoSector;
			parametricaTiposFactura = allParams.parametricaTiposFactura;
			verificarComunicacion = allParams.verificarComunicacion;
			listaMensajesServicios = allParams.listaMensajesServicios;
			parametricaTipoMetodoPago = allParams.parametricaTipoMetodoPago;
			parametricaEventosSignificativos = allParams.parametricaEventosSignificativos;
			parametricaTipoPuntoVenta = allParams.parametricaTipoPuntoVenta;
			listaProductosServicios = allParams.listaProductosServicios;
			parametricaTipoEmision = allParams.parametricaTipoEmision;
			parametricaPaisOrigen = allParams.parametricaPaisOrigen;
			parametricaTipoMoneda = allParams.parametricaTipoMoneda;


		}
		console.log(error);
	}
}
export {
	parametricaMotivoDeAnulacion,
	actividades,
	fechaHora,
	listaLeyendasFactura,
	parametricaTipoHabitacion,
	listaActividadesDocumentoSector,
	parametricaTipoDocumentoIdentidad,
	parametricaUnidadMedida,
	parametricaTipoDocumentoSector,
	parametricaTiposFactura,
	verificarComunicacion,
	listaMensajesServicios,
	parametricaTipoMetodoPago,
	parametricaEventosSignificativos,
	parametricaTipoPuntoVenta,
	listaProductosServicios,
	parametricaTipoEmision,
	parametricaPaisOrigen,
	parametricaTipoMoneda,
	loadAllLists,
	loadStore
};
