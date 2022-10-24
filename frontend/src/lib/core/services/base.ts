import { get } from 'svelte/store';
import { SETTINGS } from '../config';
import { authToken, siatApiKey } from '../store';
import { toQueryString } from '../utils';

export class BaseService {
	base_url = `${SETTINGS.apiUrl}`;
	location = '';

	async fetch(last_patch = '', method = 'GET', data?: any): Promise<Response> {
		return await fetch(`${this.base_url}${this.location ? '/' + this.location : ''}${last_patch}`, {
			headers: {
				'Content-Type': 'application/json',
				siat_api_key: get(siatApiKey),
				'Authorization': `Bearer `+get(authToken)
			},
			method: method,
			body: data ? JSON.stringify(data) : null
		});
	}

	async query(opts: any = {}): Promise<Response> {
		return await this.fetch(`?${toQueryString(opts)}`, 'GET');
	}
	async get(id: number): Promise<Response> {
		return await this.fetch(`/${id}`, 'GET');
	}
	async create(data: any): Promise<Response> {
		return await this.fetch(``, 'POST', data);
	}
	async update(id: number, data: any): Promise<Response> {
		return await this.fetch(`/${id}`, 'PUT', data);
	}

	async delete(id: number): Promise<Response> {
		return await this.fetch(`/${id}`, 'DELETE');
	}

	async patch(id: number, data: any): Promise<Response> {
		return await this.fetch(`/${id}`, 'PATCH', data);
	}
}
