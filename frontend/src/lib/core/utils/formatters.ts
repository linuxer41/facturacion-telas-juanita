const targetLang = 'es-BO';
export function toQueryString(serverParamsObject: Record<string, unknown>): string {
	const query = [];
	Object.entries(serverParamsObject).map(([k, v]) => {
		if (v || v === (0 || false)) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			query.push(`${encodeURIComponent(k as any)}=${encodeURIComponent(v as any)}`);
		}
	});
	return query.join('&');
}

export const currencyFormater = new Intl.NumberFormat(targetLang, {
	style: 'currency',
	currency: 'BOB',
	currencyDisplay: 'symbol',
	minimumFractionDigits: 2
});
export const dateFormater = new Intl.DateTimeFormat(targetLang, {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric'
});
export const timeFormater = new Intl.DateTimeFormat(targetLang, {
	hour: 'numeric',
	minute: 'numeric'
});
export const dateTimeFormater = new Intl.DateTimeFormat(targetLang, {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	hour12: false
});

export function formatCurrency(value: number, includeSymbol = true): string {
	const fomated = currencyFormater.format(value);
	const normalized = includeSymbol ? fomated : fomated.replace('Bs', '');
	// swap , and . for . and ,
	return normalized.replace(/,/g, 'X').replace(/\./g, ',').replace(/X/g, '.');
}

export function formatDateTime(value: Date | number): string {
	return dateTimeFormater.format(value).replace(/,/, '');
}

export function roundToTwo(num: number): number {
	// no-restricted-properties
	return +(Math.round(num + 'e+2') + 'e-2');
}

export function siatISOdateTime(value: Date): string {
	// current timezone iso string
	value = new Date(value.getTime() - value.getTimezoneOffset() * 60000);
	return value.toISOString().replace('Z', '');
}

export function randomChoseFromList(list: any[]): any {
	return list[Math.floor(Math.random() * list.length)];
}

export async function bloToUrl(blob: Blob) {
	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = reject;
		reader.readAsDataURL(blob);
	});
}
export async function b64toBlob(base64: string) {
	const res = await fetch(base64);
	const blob = await res.blob();
	return blob;
}
export function debounce(func, wait, immediate = false) {
	let timeout;
	return function executedFunction() {
		const context = this;
		const args = arguments;

		const later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};

		const callNow = immediate && !timeout;

		clearTimeout(timeout);

		timeout = setTimeout(later, wait);

		if (callNow) func.apply(context, args);
	};
}
