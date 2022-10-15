<script lang="ts">
	import { codigoAmbiente } from '$lib/core/store';

	import { bloToUrl, formatCurrency, formatDateTime } from '$lib/core/utils';
	import QRCodeStyling from 'qr-code-styling';
	import { createEventDispatcher, onMount } from 'svelte';
	import writtenNumber from 'written-number';
	export let data: Cart;
	export let presentation: string;
	export let width: string = '100%';
	let el: HTMLElement;
	let qrEl: HTMLDivElement;
	const dispatch = createEventDispatcher();

	function getLiteralNumber(total: number) {
		var [integer, decimal] = String(total).split('.');
		var integerWords = writtenNumber(Number(integer || 0), { lang: 'es' });
		var decimalWords = writtenNumber(Number(decimal || 0), { lang: 'es' });
		return `SON:  <span>${integerWords} ${Number(decimal || 0)
			.toString()
			.padStart(2, '0')}/100 BOLIVIANOS </span>`.toUpperCase();
	}

	const getSiatUrl = () => {
		if ($codigoAmbiente === 1) {
			return `https://siat.impuestos.gob.bo/consulta`;
		}
		return `https://pilotosiat.impuestos.gob.bo/consulta`;
	};

	// async function newQrCode() {
	// 	const qrCode = new QRCodeStyling({
	// 		width: 150,
	// 		height: 150,
	// 		type: 'svg',
	// 		data: `${data.montoTotal}`,
	// 		margin: 0,
	// 		qrOptions: { typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'Q' },
	// 		imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
	// 		dotsOptions: { type: 'extra-rounded', color: '#000000' },
	// 		backgroundOptions: { color: 'transparent' },
	// 		image: '/qr-logo.png',
	// 		cornersSquareOptions: { type: 'extra-rounded', color: '#000000' },
	// 		cornersDotOptions: { type: 'dot', color: '#000000' }
	// 	});
	// 	const image = (await qrCode.getRawData('png')) as Blob;
	// 	const base64: string = (await bloToUrl(image)) as string;
	// 	const img = document.createElement('img');
	// 	img.src = base64;
	// 	qrEl.appendChild(img);
	// 	dispatch('ready', el.innerHTML);
	// }
	// $: if (qrEl) {
	// 	try {
	// 		newQrCode();
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }
	onMount(() => {
		// setPageSize()
		dispatch('ready', el.innerHTML);
	});
</script>

<div id="invoice" class="document" bind:this={el}>
	<style>
		* {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
			outline: none;
			color: inherit;
			text-transform: inherit;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			-webkit-tap-highlight-color: transparent;
		}
		body {
			margin: 0;
			padding: 0;
			width: 100%;
			font-family: 'IBM Plex Sans', sans-serif;
			color: black;
		}
		thead {
			display: table-row-group;
		}
		tfoot {
			display: table-row-group;
		}
	</style>
	{#if presentation === 'roll'}
		<style>
			@page {
				margin-left: 5mm;
				margin-right: 5mm;
				margin-top: 0mm;
				margin-bottom: 0mm;
				padding: 0px;
			}
			.roll {
				/* padding: 0em 0.2em; */
				font-size: 16px;
			}

			.roll .top {
				text-align: center;
			}
			.roll .top .details {
				text-align: start;
			}
			.roll .client-details {
				text-align: start;
			}
			.roll hr {
				border: none;
				color: black;
				background-color: black;
				height: 1px;
				margin: 0.5em 0em;
			}
			.roll .qr-code {
				width: 100%;
				display: grid;
				place-content: center;
			}

			.roll table {
				width: 100%;
				border-collapse: separate;
				border-spacing: 0.5em;
			}
			.roll table tr {
				padding: 0.5em;
				page-break-inside: avoid;
			}
			.roll table thead th {
				padding: 0.2em;
				text-align: start;
				border-bottom: 1px solid black;
				white-space: nowrap;
				color: inherit;
			}
			.roll table tbody td {
				padding: 0.2em;
				text-align: start;
				vertical-align: top;
				border-bottom: 1px solid #ccc;
				font-size: 0.9em;
			}
			.roll table .currency {
				text-align: right;
			}
			.roll table .name {
				text-align: start;
				font-size: 0.9em;
			}

			.roll .total-details {
				text-align: end;
			}

			.roll .literal {
				font-size: 0.8em;
			}
			.roll .thanks {
				text-align: center;
			}
			.roll .user {
				text-align: center;
				font-size: 0.8em;
			}
			.roll tfoot td {
				text-align: right;
			}
		</style>
	{:else}
		<style>
			@page {
				margin-left: 10mm;
				margin-right: 10mm;
				margin-top: 10mm;
				margin-bottom: 10mm;
				padding: 0px;
			}
			body {
				margin: 0;
				padding: 0;
				width: 100%;
			}
			.document {
				width: 100%;
				border-collapse: collapse;
				border-spacing: 0;
				font-size: 16px;
			}
			.document .top {
				display: flex;
				place-content: space-between;
				font-size: 0.9em;
			}
			.document .top .info {
				max-width: 200px;
				text-align: center;
			}
			.document .top .logo {
				height: 60px;
				margin: 0em 1em;
			}
			.document .top .logo img {
				height: 100%;
				width: auto;
				object-fit: contain;
			}
			.document .client-details {
				display: grid;
				gap: 0.2em;
				font-size: 0.8em;
				grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
				margin: 0.3em 0em;
				padding: 0.2em;
				border: 0.5px solid #49cc68;
			}
			.document .client-details p {
				display: grid;
				grid-template-columns: auto 1fr;
			}
			.document .client-details .empty {
				border-bottom: 1px dashed black;
			}
			.document table {
				width: 100%;
				font-size: 0.9em;
				border-collapse: separate;
				border-spacing: 0.2em;
			}
			.document table tr {
				padding: 1em;
				page-break-inside: avoid;
			}
			.document table thead th {
				padding: 0.2em;
				text-align: start;
				border: 1px solid black;
				white-space: nowrap;
			}

			.document table tbody td {
				padding: 0.2em;
				text-align: start;
				vertical-align: top;
				vertical-align: middle;
				border: 1px solid #ccc;
			}
			.document table tbody .currency {
				text-align: right;
			}
			.document table .description {
				padding: 0.2em;
				text-align: start;
				white-space: pre-wrap;
			}

			.document .total-details {
				display: flex;
				place-content: space-between;
				place-items: end;
				padding-top: 1em;
				page-break-inside: avoid;
			}
			.document .signs {
				text-align: center;
				display: flex;
				place-content: space-evenly;
				padding-top: 1em;
			}
			.document .bottom {
				display: grid;
				grid-template-columns: 1fr auto;
				gap: 0.5em;
			}
			.document .bottom .messages {
				padding-top: 1em;
				display: grid;
				gap: 0.5em;
				text-align: center;
			}
			.document .bottom .qr-code {
				margin: 0;
			}
			footer {
				page-break-inside: avoid;
			}
		</style>
	{/if}
	{#if data}
		{#if presentation === 'roll'}
			<div class="roll" style="width: {width};">
				<div class="top">
					<h3>COTIZACION</h3>
					<!-- <div>
						<p>
							TAMARA FRANCO
						</p>
					</div> -->
					<hr />
					<div class="details">
						<p>
							<b>Cliente: &nbsp;</b> <span>{data?.cliente?.name || 'S/N'} </span>
						</p>
						<p>
							<b>NIT/CI: &nbsp;</b> <span>{data?.cliente?.nit || 0} </span>
						</p>
						<p>
							<b>FECHA: &nbsp;</b>
							<span>
								{formatDateTime(new Date())}
							</span>
						</p>
					</div>
					<hr />
				</div>
				<table>
					<thead>
						<tr>
							<th colspan="100">DETALLE</th>
						</tr>
						<tr>
							<th>CT.</th>
							<th>P/U</th>
							<th> DESC. </th>
							<th>SUBTOTAL</th>
						</tr>
					</thead>
					<tbody>
						{#each data?.items as item}
							<tr>
								<td colspan="100" class="name">
									{item.product?.detalle}
								</td>
							</tr>
							<tr>
								<td>{item.quantity}</td>
								<td>{formatCurrency(Number(item.price), false)}</td>
								<td>{formatCurrency(Number(item.discount), false)}</td>
								<td>{formatCurrency(Number(item.subtotal), false)}</td>
							</tr>
						{/each}
					</tbody>
					<tfoot>
						<tr>
							<td colspan="2">
								<p>TOTAL (Bs):</p>
							</td>
							<td colspan="2">
								<p>
									{formatCurrency(data.montoTotalSujetoIva)}
								</p>
							</td>
						</tr>
					</tfoot>
				</table>
				<hr />
				<!-- <p id="number-words">
					{@html getLiteralNumber(Number(data?.cabecera.montoTotalSujetoIva))}
				</p> -->
				<p class="thanks">Gracias por su preferencia.</p>
			</div>
		{:else}
			<div />
		{/if}
	{:else}
		<li>no transacction</li>
	{/if}
</div>
