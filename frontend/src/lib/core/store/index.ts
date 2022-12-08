import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import { codigoSistemaConstant, nitConstant } from '../constants';

interface SyncData {
	progress: number;
	total_items: number;
	current_item: number;
	message: string;
	step: number;
	total_steps: number;
	error: string;
}

interface SyncWritable<T> extends Writable<T> {
	/**
	 * show pso.
	 * @param value to set
	 */
	show(this: void, value: T): void;

	/**
	 * Set value, inform subscribers, and sync whith localstorage.
	 * @param value to set
	 */
	sync(this: void, value: T): void;

	/**
	 * load from localstorage.
	 */
	load(this: void): void;

	/**
	 * flush values from localstorage.
	 */
	flush(this: void): void;

	/**
	 * load and validate auth token, method word only form tokens.
	 */
	validate(this: void): void;

	/**
	 * value for localstorage
	 */
	storageKey: string;
	/**
	 * STORE DEFAULT VALUE TO FLUSH
	 */
	defaultValue;
}

function syncWritable<T>(init: any, _storageKey: string = undefined): SyncWritable<T> {
	const { subscribe, set, update } = writable(init);

	return {
		storageKey: _storageKey,
		defaultValue: init,
		set,
		subscribe,
		update,
		validate: () =>
			update((va) => {
				if (window) {
					const _data = localStorage.getItem(_storageKey);
					const parsed = JSON.parse(_data) as any;
					// console.debug('validate', _storageKey, parsed);
					const expires = Number(parsed?.exp || 0);
					const now = Math.round(new Date().getTime() / 1000);
					if (expires > now) {
						// console.debug('sesion valid', _storageKey, parsed);
						return (va = parsed);
					} else {
						// console.debug('sesion expired', _storageKey, parsed);
					}
				}
				return (va = init);
			}),
		show: (value: T, duration = 5000) => {
			// check typeof value
			if (typeof value === 'string') {
				return update((va) => {
					setTimeout(() => update((val) => (val = init)), duration);
					return (va = value);
				});
			} else if (typeof value === 'object') {
				return update((va) => {
					setTimeout(() => update((val) => (val = init)), duration);
					return (va = value);
				});
			}
		},

		sync: (value: T) =>
			update((va) => {
				if (window) {
					localStorage.setItem(_storageKey, JSON.stringify(value));
				}
				return (va = value);
			}),
		load: () =>
			update((va) => {
				let parsed = init;
				if (window) {
					const _data = localStorage.getItem(_storageKey);
					const _parsed = JSON.parse(_data);
					if (_parsed !== null && _parsed !== undefined) {
						// ensure no load null values
						parsed = _parsed;
						// console.debug('loading', _storageKey, parsed);
					}
				}
				return (va = parsed);
			}),
		flush: () =>
			update((va) => {
				if (window) {
					localStorage.removeItem(_storageKey);
					console.debug('flushing', _storageKey);
				}
				return (va = init);
			})
	};
}

const theme = syncWritable<string>(undefined, 'green');
const snackBar = syncWritable<string>('', 'snack-bar');
const storeCart = syncWritable<Cart>(null, 'cart');
const storeCarts = syncWritable<Cart[]>(null, 'carts');

// codigoPuntoVenta,
// codigoSucursal,
// codigoAmbiente,
// codigoSistema,
// cuis,
// nit
// cosidgoActividadEconomica
// codigoTipoEmision,
const codigoPuntoVenta = syncWritable<number>(0, 'codigoPuntoVenta');
const codigoSucursal = syncWritable<number>(0, 'codigoSucursal');
const codigoAmbiente = syncWritable<number>(2, 'codigoAmbiente');
const codigoSistema = syncWritable<string>(codigoSistemaConstant, 'codigoSistema');
const cuis = syncWritable<SiatCuis>(null, 'cuis');
const nit = syncWritable<number>(nitConstant, 'nit');
const razonSocialEmisor = syncWritable<string>('FRANCO GUARACHI TAMARA', 'razonSocialEmisor');
const municipio = syncWritable<string>('Tarija', 'municipioEmisor');
const telefono = syncWritable<string>('66 75219', 'telefonoEmisor');
const codigoModalidad = syncWritable<number>(2, 'codigoModalidad');
const cufd = syncWritable<SiatCufd>(null, 'cufd');
const codigoActividadEconomica = syncWritable<number>(475100, 'codigoActividadEconomica');
const codigoTipoEmision = syncWritable<number>(1, 'codigoTipoEmision');
const tipoFacturaDocumento = syncWritable<number>(1, 'tipoFacturaDocumento');
const codigoDocumentoSector = syncWritable<number>(1, 'codigoDocumentoSector');
const cafc = syncWritable<string>('10111A962B87D', 'cafc');
const facturacionManual = syncWritable<boolean>(false, 'facturacionManual');
const cartsHistory = syncWritable<Cart[]>([], 'cartsHistory');
const cuisHistory = syncWritable<SiatCuis[]>([], 'cuisHistory');
const cufdHistory = syncWritable<SiatCufd[]>([], 'cufdHistory');
const eventoSignificativo = syncWritable<SiatEventoSignificativo>(null, 'eventoSignificativo');
const facturacionFueraDeLinea = syncWritable<SiatFueraDeLinea>(null, 'facturacionFueraDeLinea');
const facturacionFueraDeLineaHistory = syncWritable<SiatFueraDeLinea[]>(
	[],
	'facturacionFueraDeLineaHistory'
);
const authToken = syncWritable<string>(null, 'authToken');
const siatApiKey = syncWritable<string>(
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJGcmFuY28wMTIiLCJjb2RpZ29TaXN0ZW1hIjoiNzIxQTVBRTE1REMzMzVCRjY3NjM4QjYiLCJuaXQiOiJINHNJQUFBQUFBQUFBRE14TkRHek5ETXdNRFFDQUFvRE1xWUtBQUFBIiwiaWQiOjQ5MDUxNCwiZXhwIjoxNjkwNTg4ODAwLCJpYXQiOjE2NTkwNzI1NTQsIm5pdERlbGVnYWRvIjo0MTQ2OTYwMDEyLCJzdWJzaXN0ZW1hIjoiU0ZFIn0.1joGHujUq470w59si0gRqaw4fkfd13QkBOOOETtw1dKDYA7ZH7JreZMHyYBiAWB2chVntnwx-x4ezNFBT1NQdw',
	'siatApiKey'
);
const user = syncWritable<Usuario>(null, 'user');
const storeParametricas = syncWritable<any>(null, 'parametricas');

export {
	snackBar,
	theme,
	storeCarts,
	codigoPuntoVenta,
	codigoSucursal,
	codigoAmbiente,
	codigoSistema,
	cuis,
	nit,
	codigoModalidad,
	cufd,
	codigoActividadEconomica,
	codigoTipoEmision,
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
	facturacionFueraDeLinea,
	authToken,
	user,
	storeCart,
	siatApiKey,
	storeParametricas,
	facturacionFueraDeLineaHistory
};
