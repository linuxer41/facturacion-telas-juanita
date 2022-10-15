import { SETTINGS } from '../config';
import { toQueryString } from '../utils';

export class BaseSiatService {
	base_url = `${SETTINGS.apiUrl}`;
	location = '';

	async fetch(last_patch = '', method = 'GET', data?: any): Promise<Response> {
		return await fetch(`${this.base_url}${this.location ? '/' + this.location : ''}${last_patch}`, {
			headers: {
				'Content-Type': 'application/json',
				siat_api_key: SETTINGS.siatApiKey
			},
			method: method,
			body: data ? JSON.stringify(data) : null
		});
	}
}
