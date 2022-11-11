import { startOfDay, subDays } from 'date-fns';
import { get } from 'svelte/store';
import { SETTINGS } from '../config';
import { tiposEmision } from '../constants';
import { listaLeyendasFactura } from '../globals';
import {
	clienteService,
	facturacionCodigosService,
	facturacionCompraVentaService,
	facturacionOperacionesService,
	facturacionPrepararFacturaService,
	facturaService
} from '../services';
import {
	cafc,
	codigoActividadEconomica,
	codigoAmbiente,
	codigoDocumentoSector,
	codigoModalidad,
	codigoPuntoVenta,
	codigoSistema,
	codigoSucursal,
	codigoTipoEmision,
	cufd,
	cuis,
	facturacionManual,
	cartsHistory,
	municipio,
	nit,
	razonSocialEmisor,
	telefono,
	tipoFacturaDocumento,
	cuisHistory,
	cufdHistory,
	eventoSignificativo,
	user
} from '../store';
import { randomChoseFromList, roundToTwo, siatISOdateTime } from '../utils';
const historyLimit = 100;

export function cartsHistoryUpdate(cart: Cart) {
	let cartHistory = get(cartsHistory);
	if (cartHistory.length > historyLimit) {
		cartHistory.pop();
	}
	cartHistory = [cart, ...cartHistory];
	cartsHistory.sync(cartHistory);
}

export function cuisHistoryUpdate(cuis: SiatCuis) {
	let _cuisHistory = get(cuisHistory);
	if (_cuisHistory.length > historyLimit) {
		_cuisHistory.pop();
	}
	_cuisHistory = [cuis, ..._cuisHistory];
	cuisHistory.sync(_cuisHistory);
}

export function cufdHistoryUpdate(cufd: SiatCufd) {
	let _cufdHistory = get(cufdHistory);
	console.log('cufdHistoryUpdate', _cufdHistory.length);
	if (_cufdHistory.length > historyLimit) {
		_cufdHistory.pop();
	}

	_cufdHistory = [cufd, ..._cufdHistory];
	cufdHistory.sync(_cufdHistory);
}

export async function loadCufd({ forceRenew = false }: { forceRenew?: boolean } = {}) {
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
		if (!get(cufd) || new Date(get(cufd)?.fechaVigencia || '') < new Date() || forceRenew) {
			const response = await facturacionCodigosService.cufd(requestData);
			if (response.ok) {
				const data = await response.json();
				cufd.sync(data);
				cufdHistoryUpdate(data);
				// if(data.transaccion) {
				// 	cufdHistoryUpdate(data);
				// }
			}
		}
	} catch (error) {
		console.error(error);
	}
}

export async function loadCuis({ forceRenew = false }: { forceRenew?: boolean } = {}) {
	try {
		const requestData = {
			codigoPuntoVenta: get(codigoPuntoVenta),
			codigoSucursal: get(codigoSucursal),
			codigoAmbiente: get(codigoAmbiente),
			codigoSistema: get(codigoSistema),
			nit: get(nit),
			codigoModalidad: get(codigoModalidad)
		};
		if (!get(cuis) || new Date(get(cuis)?.fechaVigencia || '') < new Date() || forceRenew) {
			const response = await facturacionCodigosService.cuis(requestData);
			if (response.ok) {
				const data = await response.json();
				cuis.sync(data);
				cuisHistoryUpdate(data);
				// if(data.transaccion) {
				// 	cuisHistoryUpdate(data);
				// }
			}
		}
	} catch (error) {
		console.error(error);
	}
}

export function emptyCart(): Cart {
	return {
		items: [],
		cliente: {} as Cliente,
		subTotal: 0,
		totalDescuento: 0,
		montoTotal: 0,
		codigoTipoDocumentoIdentidad: 1,
		montoGiftCard: 0,
		montoTotalSujetoIva: 0,
		descuentoAdicional: 0,
		codigoMetodoPago: 1,
		numeroTarjeta: ''
	};
}

export function updateAllCart(cart: Cart) {
	cart.subTotal = roundToTwo(cart.items.reduce((acc, item) => acc + item.subtotal, 0));
	cart.totalDescuento = roundToTwo(cart.items.reduce((acc, item) => acc + item.discount, 0));
	cart.montoTotal = roundToTwo(cart.subTotal - (cart.descuentoAdicional || 0));
	cart.montoTotalSujetoIva = roundToTwo(cart.montoTotal - (cart.montoGiftCard || 0));
	return { ...cart };
}

export function hideCardNumber(number: string) {
	// 7455********4565
	return number.replace(/(\d{4})(\d+)(\d{4})/, '$100000000$3');
}

export async function prepararFactura(
	cart: Cart,
	isoDate: string,
	numero = 0
): Promise<FacturaPreparada> {
	const _nit = cart.cliente?.nit || '99001';
	const clientRes = await clienteService.getByNit(_nit);
	let client = clientRes.ok ? (await clientRes.json()) : undefined;
	if(!client) {
		const clientRes = await clienteService.create({
			nit: _nit,
			name: cart.cliente?.name || 'S/N',
			email: cart.cliente?.email || null,
		});
		client = clientRes.ok ? (await clientRes.json()) : undefined;
	}
	cart.cliente = client;
	const _cufd = get(eventoSignificativo)
		? get(eventoSignificativo).cufdEvento
		: get(cufd) || ({} as SiatCufd);
	let codigoExepcion = [2, 3].includes(get(codigoTipoEmision)) && String(cart.codigoTipoDocumentoIdentidad) === "5" ? 1 : 0;
	if (
		get(codigoTipoEmision) === 1 &&
		cart.codigoTipoDocumentoIdentidad === 5 &&
		!['990001', '990002', '990003'].includes(cart.cliente?.nit)
	) {
		const nitOk = await verificarNit(_nit);
		if (!nitOk) {
			codigoExepcion = 1;
		}
	}
	const requestData: PrepararFactura = {
		solicitud: {
			codigoModalidad: get(codigoModalidad),
			codigoEmision: get(codigoTipoEmision),
			tipoFacturaDocumento: get(tipoFacturaDocumento),
			codigoControlCUFD: _cufd?.codigoControl
		},
		cabecera: {
			nitEmisor: get(nit),
			razonSocialEmisor: get(razonSocialEmisor),
			municipio: get(municipio),
			telefono: get(telefono),
			numeroFactura: numero, // provided by server if 0
			cuf: '', // provided by server
			cufd: _cufd?.codigo,
			codigoSucursal: get(codigoSucursal),
			direccion: get(cufd)?.direccion,
			codigoPuntoVenta: get(codigoPuntoVenta),
			fechaEmision: isoDate,
			nombreRazonSocial: cart.cliente?.name || 'S/N',
			codigoTipoDocumentoIdentidad: cart.codigoTipoDocumentoIdentidad,
			numeroDocumento: Number(cart.codigoTipoDocumentoIdentidad) === 1? _nit.split('-')[0]: _nit,
			complemento: Number(cart.codigoTipoDocumentoIdentidad) === 1? (_nit.split('-')[1] || ''): '',
			codigoCliente: String(cart.cliente?.id || 0),
			codigoMetodoPago: cart.codigoMetodoPago || 1,
			numeroTarjeta: cart.numeroTarjeta ? hideCardNumber(cart.numeroTarjeta) : '',
			montoTotal: cart.montoTotal,
			montoTotalSujetoIva: cart.montoTotalSujetoIva,
			codigoMoneda: 1,
			tipoCambio: 1,
			montoTotalMoneda: cart.montoTotal,
			montoGiftCard: cart.montoGiftCard || 0,
			descuentoAdicional: cart.descuentoAdicional || 0,
			codigoExcepcion: codigoExepcion,
			cafc: get(facturacionManual) && get(codigoTipoEmision) === 2 ? get(cafc) : '',
			leyenda:
				randomChoseFromList(
					listaLeyendasFactura?.filter(
						(item) => Number(item.codigoActividad) == Number(get(codigoActividadEconomica))
					)
				)?.descripcionLeyenda ||
				'Factura generada por el sistema de facturación de Control Tributario',
			usuario: 'Tamara',
			codigoDocumentoSector: get(codigoDocumentoSector)
		},
		detalle: cart.items.map((item) => ({
			actividadEconomica: String(get(codigoActividadEconomica)),
			codigoProductoSin: Number(item.product.codigoProductoSiat),
			codigoProducto: item.product.codigoProducto,
			descripcion: item.product.detalle,
			cantidad: item.quantity,
			unidadMedida: Number(item.product.codigoUnidadMedida),
			precioUnitario: roundToTwo(item.price),
			montoDescuento: roundToTwo(item.discount),
			subTotal: roundToTwo(item.subtotal),
			numeroSerie: '',
			numeroImei: ''
		}))
	};
	const response = await facturacionPrepararFacturaService.facturaCompraVenta(requestData);
	if (!response.ok) {
		throw new Error('Error al preparar factura: ' + (await response.text()));
	}
	return await response.json();
}

export async function enviarFactura(cart: Cart, fecha: Date = null, numero = 0) {
	if (Number(get(codigoTipoEmision)) === 1) {
		try {
			const response = await facturacionCompraVentaService.verificarComunicacion({
				codigoAmbiente: get(codigoAmbiente),
			})
			if (!response.ok) {
				throw new Error('Error al verificar comunicación: ' + (await response.text()));
			}
		} catch (error) {
			throw new Error('Error al verificar comunicacion: ' + error['message']);
		}
	}
	{
		// update client
		try {
			if (cart.cliente?.id) {
			
				const response = await clienteService.patch(cart.cliente.id,{
					email: cart.cliente?.email,
					name: cart.cliente?.name,
					nit: cart.cliente?.nit,
				});
				if(response.ok){
					const json = await response.json();
					console.log(json);
					cart.cliente = json;
					console.log(cart.cliente);
				}
			}
		} catch (error) {
			// pass
		}
	}

	const isoDate = siatISOdateTime(fecha || new Date());
	const preparada = await prepararFactura(cart, isoDate, numero);
	const requestData = {
		codigoAmbiente: get(codigoAmbiente),
		codigoDocumentoSector: get(codigoDocumentoSector),
		codigoEmision: get(codigoTipoEmision),
		codigoModalidad: get(codigoModalidad),
		codigoPuntoVenta: get(codigoPuntoVenta),
		codigoSistema: get(codigoSistema),
		codigoSucursal: get(codigoSucursal),
		cufd: get(cufd)?.codigo,
		cuis: get(cuis)?.codigo,
		nit: get(nit),
		tipoFacturaDocumento: get(tipoFacturaDocumento),
		archivo: preparada.zip,
		hashArchivo: preparada.sha256,
		fechaEnvio: isoDate
	};
	const blob = new Blob([preparada.xml], { type: 'text/xml' });
	const form = new FormData()
	form.append('file', blob, `factura_${preparada?.json?.cabecera?.numeroFactura || 1}_${preparada.json.cabecera.cuf}.xml`)
	const _response = await fetch(`${SETTINGS.apiUrl}/v1/files/invoice/upload`, {
		method: 'POST',
		body: form
	})
	if (!_response.ok) {
		throw new Error("Error al subir el archivo");
		
	}
	const _json = await _response.json()
	const xmlUrl = _json[0].path


	let nuevaFactura: Factura = {
		numero: Number(preparada?.json?.cabecera?.numeroFactura || 0),
		clientName: preparada?.json?.cabecera?.nombreRazonSocial || 'Sin nombre',
		nit: preparada?.json?.cabecera?.numeroDocumento || '99001',
		items: [],
		xml: xmlUrl,
		subtotal: Number(preparada?.json?.cabecera?.montoTotal || 0),
		descuento: Number(preparada?.json?.cabecera?.descuentoAdicional || 0),
		total: Number(preparada?.json?.cabecera?.montoTotalSujetoIva || 0),
		cuf: preparada?.json?.cabecera?.cuf || '',
		json: preparada?.json || ({} as FacturaXMLJSON),
		estado: 'PENDIENTE',
		cufd: get(cufd)?.codigo,
		tipoEmision: tiposEmision.find((item) => item.value == get(codigoTipoEmision))?.key || '',
		fechaFactura: isoDate,
		user: get(user),
	};
	const nuevaFacturaResponse = await facturaService.create(nuevaFactura);
	if (!nuevaFacturaResponse.ok) {
		throw new Error('Error al crear factura: ' + (await nuevaFacturaResponse.text()));
	}
	nuevaFactura = await nuevaFacturaResponse.json();

	if (Number(get(codigoTipoEmision) || 1) === 1) {
		// verificar nit
		const response = await facturacionCompraVentaService.recepcionFactura(requestData);
		if (!response.ok) {
			throw new Error('Error al enviar factura al SIN: ' + (await response.text()));
		}
		const respuesta = await response.json();
		if (respuesta.transaccion !== true) {
			throw new Error(
				'Error de recepcion SIN: ' +
					(respuesta?.mensajesList[0]?.descripcion || 'error desconocido')
			);
		}
		const _response = await facturaService.patch(nuevaFactura.id, {
			estado: 'VALIDADA'
		});
		if (!_response.ok) {
			throw new Error('Error al actualizar factura: ' + (await _response.text()));
		}
	}
	return nuevaFactura;
}
export async function registrarEvento(
	codigoMotivoEvento,
	inicio: Date,
	fin: Date,
	descripcion = 'Contingencia'
): Promise<SiatEventoSignificativo> {
	const fechaHoraFinEvento = fin;
	const fechaHoraInicioEvento = inicio;
	const _cudfHistory = get(cufdHistory) || [];
	// find the cufd between the dates
	const cufdEvento = _cudfHistory.find((c) => {
		const cufdEbdDate = new Date(c.fechaVigencia);
		const cufdStartDate = subDays(cufdEbdDate, 1);
		// return fechaHoraInicioEvento >= cufdStartDate && fechaHoraFinEvento <= cufdEbdDate;
		return fechaHoraInicioEvento >= cufdStartDate;
	});
	console.log({ cufdEvento });
	// if no cufd found
	if (!cufdEvento) {
		throw new Error('No se encontró un CUFD válido para el rango de fechas seleccionado');
	}
	await loadCufd({ forceRenew: true });
	const response = await facturacionOperacionesService.registroEventoSignificativo({
		codigoMotivoEvento: codigoMotivoEvento || 1,
		codigoAmbiente: get(codigoAmbiente),
		codigoSistema: get(codigoSistema),
		codigoSucursal: get(codigoSucursal),
		cuis: get(cuis)?.codigo,
		nit: get(nit),
		codigoPuntoVenta: get(codigoPuntoVenta),
		cufd: get(cufd)?.codigo,
		cufdEvento: cufdEvento.codigo,
		descripcion: descripcion,
		fechaHoraFinEvento: siatISOdateTime(fechaHoraFinEvento),
		fechaHoraInicioEvento: siatISOdateTime(fechaHoraInicioEvento)
	});

	if (!response.ok) {
		throw new Error('Error al registrar evento: ' + (await response.text()));
	}
	const result = await response.json();
	if (result.transaccion !== true) {
		throw new Error(
			'Error de recepcion SIN: ' + (result?.mensajesList[0]?.descripcion || 'error desconocido')
		);
	}
	const eventosSignificativos = await loadEventosSignificativos();
	const codigoRecepcionEventoSignificativo = result.codigoRecepcionEventoSignificativo;
	const evento: SiatEventoSignificativo = eventosSignificativos.find(
		(e) => e.codigoRecepcionEventoSignificativo === codigoRecepcionEventoSignificativo
	);

	if (!evento) {
		throw new Error('No se encontró el evento registrado');
	}
	evento.cufdEvento = cufdEvento;
	return evento;
}

export async function validarFacturas(eventoSignificativo: SiatEventoSignificativo) {
	if (!eventoSignificativo) {
		throw new Error('No se encontró un evento significativo');
	}
	const requestData = {
		codigoAmbiente: get(codigoAmbiente),
		codigoDocumentoSector: get(codigoDocumentoSector),
		codigoEmision: get(codigoTipoEmision),
		codigoModalidad: get(codigoModalidad),
		codigoPuntoVenta: get(codigoPuntoVenta),
		codigoSistema: get(codigoSistema),
		codigoSucursal: get(codigoSucursal),
		cufd: get(cufd)?.codigo,
		cuis: get(cuis)?.codigo,
		nit: get(nit),
		tipoFacturaDocumento: get(tipoFacturaDocumento),
		cafc: get(facturacionManual) && get(codigoTipoEmision) === 2 ? get(cafc) : '',
		eventoSignificativo: eventoSignificativo
	};
	const response = await facturacionPrepararFacturaService.validarPaquete(requestData);
	if (!response.ok) throw new Error('Error al validar facturas: ' + (await response.text()));
	const result = await response.json();
	if (result.transaccion !== true) {
		throw new Error(
			'Error de recepcion SIN: ' + (result?.mensajesList[0]?.descripcion || 'error desconocido')
		);
	}
	return result;
}
export async function verificarNit(_nit: string) {
	const requestData = {
		codigoAmbiente: get(codigoAmbiente),
		codigoSistema: get(codigoSistema),
		nit: get(nit),
		codigoModalidad: get(codigoModalidad),
		codigoSucursal: get(codigoSucursal),
		cuis: get(cuis)?.codigo,
		nitParaVerificacion: _nit
	};
	const response = await facturacionCodigosService.verificarNit(requestData);
	if (!response.ok) throw new Error('Error al verificar nit: ' + (await response.text()));
	const result = await response.json();
	if (result.transaccion !== true) {
		return false;
	}
	return true;
}
export async function loadEventosSignificativos() {
	const response = await facturacionOperacionesService.consultaEventoSignificativo({
		codigoAmbiente: get(codigoAmbiente),
		codigoSistema: get(codigoSistema),
		codigoSucursal: get(codigoSucursal),
		cuis: get(cuis)?.codigo,
		nit: get(nit),
		codigoPuntoVenta: get(codigoPuntoVenta),
		cufd: get(cufd)?.codigo,
		fechaEvento: siatISOdateTime(startOfDay(new Date()))
	});
	if (!response.ok) {
		throw new Error('Error al cargar eventos significativos: ' + (await response.text()));
	}
	const _resData = await response.json();
	if (_resData.transaccion === true) {
		return _resData.listaCodigos;
	}
}

export function addToCart(product: Producto, cart) {
	const item = cart.items.find((item) => item.productId === product.id);
	if (!item) {
		const _new = {
			productId: product.id,
			name: product.detalle,
			price: Number(product.precio || 0),
			quantity: 1,
			discount: 0,
			subtotal: Number(product.precio || 0),
			product: product
		};
		cart.items.push(_new);
	} else {
		item.quantity++;
		item.subtotal = item.quantity * item.price - item.discount;
	}
	setTimeout(() => {
		const addesRow = document.querySelector(`#cart-item-${product.id}`);
		// focus on fisrt input at row
		if (addesRow) {
			const input = addesRow.querySelector('input');
			if (input) {
				input?.focus();
				// select all text
				input?.select();
			}
		}
	}, 100);
	return updateAllCart(cart);
}
