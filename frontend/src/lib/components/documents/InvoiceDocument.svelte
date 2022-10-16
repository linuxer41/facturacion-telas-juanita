<script lang="ts">
	import { codigoAmbiente } from '$lib/core/store';

	import { bloToUrl, formatCurrency, formatDateTime, roundToTwo } from '$lib/core/utils';
	import QRCodeStyling from 'qr-code-styling';
	import { createEventDispatcher, onMount } from 'svelte';
	import writtenNumber from 'written-number';
	export let data: FacturaXMLJSON;
	export let isOnline: boolean = true;
	export let presentation: string;
	export let width: string = '100%';
	let el: HTMLElement;
	let qrEl: HTMLDivElement;
	const dispatch = createEventDispatcher();

	const measure_units = [
		{
			siat_bo_code: 1,
			label: 'bobinas',
			key: 'COIL'
		},
		{
			siat_bo_code: 2,
			label: 'balde',
			key: 'BUCKET'
		},
		{
			siat_bo_code: 3,
			label: 'barril',
			key: 'BARREL'
		},
		{
			siat_bo_code: 4,
			label: 'bolsa',
			key: 'BAG'
		},
		{
			siat_bo_code: 5,
			label: 'botellas',
			key: 'BOTTLE'
		},
		{
			siat_bo_code: 6,
			label: 'caja',
			key: 'BOX'
		},
		{
			siat_bo_code: 7,
			label: 'cartones',
			key: 'CARTON'
		},
		{
			siat_bo_code: 8,
			label: 'centimetro cuadrado',
			key: 'CM2'
		},
		{
			siat_bo_code: 9,
			label: 'centimetro cubico',
			key: 'CM3'
		},
		{
			siat_bo_code: 10,
			label: 'centimetro lineal',
			key: 'CM'
		},
		{
			siat_bo_code: 11,
			label: 'ciento de unidades',
			key: '100'
		},
		{
			siat_bo_code: 12,
			label: 'cilindro',
			key: 'CYLINDER'
		},
		{
			siat_bo_code: 13,
			label: 'conos',
			key: 'CONE'
		},
		{
			siat_bo_code: 14,
			label: 'docena',
			key: 'DOZEN'
		},
		{
			siat_bo_code: 15,
			label: 'fardo',
			key: 'FARD'
		},
		{
			siat_bo_code: 16,
			label: 'galon ingles',
			key: 'GAL'
		},
		{
			siat_bo_code: 17,
			label: 'gramo',
			key: 'GRAM'
		},
		{
			siat_bo_code: 18,
			label: 'gruesa',
			key: 'GROSS'
		},
		{
			siat_bo_code: 19,
			label: 'hectolitro',
			key: 'HLT'
		},
		{
			siat_bo_code: 20,
			label: 'hoja',
			key: 'PAGE'
		},
		{
			siat_bo_code: 21,
			label: 'juego',
			key: 'GAME'
		},
		{
			siat_bo_code: 22,
			label: 'kilogramo',
			key: 'KG'
		},
		{
			siat_bo_code: 23,
			label: 'kilometro',
			key: 'KM'
		},
		{
			siat_bo_code: 24,
			label: 'kilovatio hora',
			key: 'KVH'
		},
		{
			siat_bo_code: 25,
			label: 'kit',
			key: 'KIT'
		},
		{
			siat_bo_code: 26,
			label: 'latas',
			key: 'CAN'
		},
		{
			siat_bo_code: 27,
			label: 'libras',
			key: 'LB'
		},
		{
			siat_bo_code: 28,
			label: 'litro',
			key: 'LITER'
		},
		{
			siat_bo_code: 29,
			label: 'megawatt hora',
			key: 'MWH'
		},
		{
			siat_bo_code: 30,
			label: 'metro',
			key: 'M'
		},
		{
			siat_bo_code: 31,
			label: 'metro cuadrado',
			key: 'M2'
		},
		{
			siat_bo_code: 32,
			label: 'metro cubico',
			key: 'M3'
		},
		{
			siat_bo_code: 33,
			label: 'miligramos',
			key: 'MG'
		},
		{
			siat_bo_code: 34,
			label: 'mililitro',
			key: 'ML'
		},
		{
			siat_bo_code: 35,
			label: 'milimetro',
			key: 'MM'
		},
		{
			siat_bo_code: 36,
			label: 'milimetro cuadrado',
			key: 'MM2'
		},
		{
			siat_bo_code: 37,
			label: 'milimetro cubico',
			key: 'MM3'
		},
		{
			siat_bo_code: 38,
			label: 'millares',
			key: 'MILLARES'
		},
		{
			siat_bo_code: 39,
			label: 'millon de unidades',
			key: 'MILLION'
		},
		{
			siat_bo_code: 40,
			label: 'onzas',
			key: 'OUNCE'
		},
		{
			siat_bo_code: 41,
			label: 'paletas',
			key: 'PALET'
		},
		{
			siat_bo_code: 42,
			label: 'paquete',
			key: 'PACK'
		},
		{
			siat_bo_code: 43,
			label: 'par',
			key: 'PAR'
		},
		{
			siat_bo_code: 44,
			label: 'pies',
			key: 'FEET'
		},
		{
			siat_bo_code: 45,
			label: 'pies cuadrados',
			key: 'SQFT'
		},
		{
			siat_bo_code: 46,
			label: 'pies cubicos',
			key: 'CUBICFT'
		},
		{
			siat_bo_code: 47,
			label: 'piezas',
			key: 'PIECE'
		},
		{
			siat_bo_code: 48,
			label: 'placas',
			key: 'PLATES'
		},
		{
			siat_bo_code: 49,
			label: 'pliego',
			key: 'PLIEGO'
		},
		{
			siat_bo_code: 50,
			label: 'pulgadas',
			key: 'INCH'
		},
		{
			siat_bo_code: 51,
			label: 'resma',
			key: 'BUNDLE'
		},
		{
			siat_bo_code: 52,
			label: 'tambor',
			key: 'TAMBOR'
		},
		{
			siat_bo_code: 53,
			label: 'tonelada corta',
			key: 'TC'
		},
		{
			siat_bo_code: 54,
			label: 'tonelada larga',
			key: 'TL'
		},
		{
			siat_bo_code: 55,
			label: 'toneladas',
			key: 'TON'
		},
		{
			siat_bo_code: 56,
			label: 'tubos',
			key: 'TUBE'
		},
		{
			siat_bo_code: 57,
			label: 'unidad (bienes)',
			key: 'UNIT_ASSET'
		},
		{
			siat_bo_code: 58,
			label: 'unidad (servicios)',
			key: 'UNIT_SERVICE'
		},
		{
			siat_bo_code: 59,
			label: 'us galon (3,7843 l)',
			key: 'USGAL'
		},
		{
			siat_bo_code: 60,
			label: 'yarda',
			key: 'YARD'
		},
		{
			siat_bo_code: 61,
			label: 'yarda cuadrada',
			key: 'SQYD'
		},
		{
			siat_bo_code: 62,
			label: 'otro',
			key: 'OTHER'
		},
		{
			siat_bo_code: 63,
			label: 'onza troy',
			key: 'OUNCE_TROY'
		},
		{
			siat_bo_code: 64,
			label: 'libra fina',
			key: 'LBS_FIN'
		},
		{
			siat_bo_code: 65,
			label: 'display',
			key: 'DISPLAY'
		},
		{
			siat_bo_code: 66,
			label: 'bulto',
			key: 'BULK'
		},
		{
			siat_bo_code: 67,
			label: 'dias',
			key: 'DAYS'
		},
		{
			siat_bo_code: 68,
			label: 'meses',
			key: 'MONTHS'
		},
		{
			siat_bo_code: 69,
			label: 'quintal',
			key: 'QUINTAL'
		},
		{
			siat_bo_code: 70,
			label: 'rollo',
			key: 'ROLL'
		},
		{
			siat_bo_code: 71,
			label: 'horas',
			key: 'HOURS'
		},
		{
			siat_bo_code: 72,
			label: 'aguja',
			key: 'SCALP'
		},
		{
			siat_bo_code: 73,
			label: 'ampolla',
			key: 'AMP'
		},
		{
			siat_bo_code: 74,
			label: 'bidón',
			key: 'DRUM'
		},
		{
			siat_bo_code: 75,
			label: 'bolsa',
			key: 'BAG_2'
		},
		{
			siat_bo_code: 76,
			label: 'capsula',
			key: 'CAPSULE'
		},
		{
			siat_bo_code: 77,
			label: 'cartucho',
			key: 'CARTUCHO'
		},
		{
			siat_bo_code: 78,
			label: 'comprimido',
			key: 'COMPRESSED'
		},
		{
			siat_bo_code: 79,
			label: 'estuche',
			key: 'STICK'
		},
		{
			siat_bo_code: 80,
			label: 'frasco',
			key: 'JAR'
		},
		{
			siat_bo_code: 81,
			label: 'jeringa',
			key: 'JERINGA'
		},
		{
			siat_bo_code: 82,
			label: 'mini botella',
			key: 'MINI_BOTTLE'
		},
		{
			siat_bo_code: 83,
			label: 'sachet',
			key: 'SACHET'
		},
		{
			siat_bo_code: 84,
			label: 'tableta',
			key: 'TABLET'
		},
		{
			siat_bo_code: 85,
			label: 'termo',
			key: 'THERM'
		},
		{
			siat_bo_code: 86,
			label: 'tubo',
			key: 'TUBE_2'
		},
		{
			siat_bo_code: 87,
			label: 'barril (eeuu) 60 f',
			key: 'BARREL_60F'
		},
		{
			siat_bo_code: 88,
			label: 'barril [42 galones(eeuu)]',
			key: 'BARREL_42GAL'
		},
		{
			siat_bo_code: 89,
			label: 'metro cubico 68f vol',
			key: 'CUBIC_METER_68F'
		},
		{
			siat_bo_code: 90,
			label: 'mil pies cubicos 14696 psi',
			key: 'CUBIC_FOOT_14696PSI'
		},
		{
			siat_bo_code: 91,
			label: 'mil pies cubicos 14696 psi 68fah',
			key: 'CUBIC_FOOT_14696PSI_68F'
		},
		{
			siat_bo_code: 92,
			label: 'millar de pies cubicos (1000 pc)',
			key: 'CUBIC_FOOT_1000PC'
		},
		{
			siat_bo_code: 93,
			label: 'millones de pies cubicos (1000000 pc)',
			key: 'CUBIC_FOOT_1000000PC'
		},
		{
			siat_bo_code: 94,
			label: 'millones de btu (1000000 btu)',
			key: 'BTU_1000000BTU'
		},
		{
			siat_bo_code: 95,
			label: 'unidad termica britanica (ti)',
			key: 'THERM_BRIT'
		},
		{
			siat_bo_code: 96,
			label: 'pomo',
			key: 'POMO'
		},
		{
			siat_bo_code: 97,
			label: 'vaso',
			key: 'VASO'
		},
		{
			siat_bo_code: 98,
			label: 'tetrapack',
			key: 'TETRAPACK'
		},
		{
			siat_bo_code: 99,
			label: 'cartola',
			key: 'CARTOLA'
		},
		{
			siat_bo_code: 100,
			label: 'jaba',
			key: 'JABA'
		},
		{
			siat_bo_code: 101,
			label: 'yarda',
			key: 'YARD_2'
		},
		{
			siat_bo_code: 102,
			label: 'bandeja',
			key: 'BANDEJA'
		},
		{
			siat_bo_code: 103,
			label: 'turril',
			key: 'TURRIL'
		},
		{
			siat_bo_code: 104,
			label: 'blister',
			key: 'BLISTER'
		},
		{
			siat_bo_code: 105,
			label: 'tira',
			key: 'TIRA'
		},
		{ key: 'COMBO', label: 'combo', description: '', siat_bo_code: 62 },
		{ key: 'UNIT', label: 'unidad', description: '', siat_bo_code: 62 },
		{ key: 'BAR', label: 'barra', description: '', siat_bo_code: 62 }
	];

	function getLiteralNumber(total: number) {
		const val = formatCurrency(total, false);
		const [integer1, decimal1] = String(total).split('.');
		var [integer, decimal] = val.split('.');
		var integerWords = writtenNumber(Number(integer1.replace(',', '.') || 0), { lang: 'es' });
		var decimalWords = writtenNumber(Number(decimal || 0), { lang: 'es' });
		// const roundDecimal = roundToTwo(Number(decimal || 0));
		return `SON:  <span>${integerWords} ${Number(decimal || 0)
			.toString()
			.padEnd(2, '0')}/100 BOLIVIANOS </span>`.toUpperCase();
	}

	const getSiatUrl = () => {
		if ($codigoAmbiente === 1) {
			return `https://siat.impuestos.gob.bo/consulta`;
		}
		return `https://pilotosiat.impuestos.gob.bo/consulta`;
	};

	async function newQrCode() {
		const qrCode = new QRCodeStyling({
			width: 150,
			height: 150,
			type: 'svg',
			data: `${getSiatUrl()}/QR?nit=${data?.cabecera.nitEmisor}&cuf=${data?.cabecera.cuf}&numero=${
				data?.cabecera.numeroFactura
			}&t=1`,
			margin: 0,
			qrOptions: { typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'Q' },
			imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
			dotsOptions: { type: 'extra-rounded', color: '#000000' },
			backgroundOptions: { color: 'transparent' },
			image: '/qr-logo.png',
			cornersSquareOptions: { type: 'extra-rounded', color: '#000000' },
			cornersDotOptions: { type: 'dot', color: '#000000' }
		});
		const image = (await qrCode.getRawData('png')) as Blob;
		const base64: string = (await bloToUrl(image)) as string;
		const img = document.createElement('img');
		img.src = base64;
		qrEl.appendChild(img);
		dispatch('ready', el.innerHTML);
	}
	$: if (qrEl) {
		try {
			newQrCode();
		} catch (error) {
			console.log(error);
		}
	}
	onMount(() => {
		// setPageSize()
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
				white-space: nowrap;
			}
			.roll .total-name {
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
				white-space: nowrap;
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
					<h3>FACTURA</h3>
					<h4>CON DERECHO A CRÉDITO FISCAL</h4>
					<div>
						<p>{data?.cabecera.razonSocialEmisor}</p>
						<p>
							{#if Number(data?.cabecera.codigoSucursal) == 0}
								Casa Matriz
							{:else}
								Sucursal {data?.cabecera.codigoSucursal}
							{/if}
						</p>
						<p>N. punto de venta {data?.cabecera.codigoPuntoVenta}</p>
						<p style="text-transform: uppercase;">{data?.cabecera.direccion}</p>
						<p>Tel. {data?.cabecera.telefono}</p>
						<p>{data?.cabecera.municipio}</p>
						<hr />
						<h4>NIT</h4>
						<p>
							{data?.cabecera.nitEmisor}
						</p>
						<h4>FACTURA N°</h4>
						<p>
							{data?.cabecera.numeroFactura}
						</p>
						<h4>CÓD. AUTORIZACIÓN</h4>
						<p style="overflow-wrap: break-word;">
							{data?.cabecera.cuf}
						</p>
					</div>
					<hr />
					<div class="details">
						<p>
							<b>NOMBRE/RAZÓN SOCIAL: &nbsp;</b> <span>{data?.cabecera.nombreRazonSocial} </span>
						</p>
						<p>
							<b>NIT/CI/CEX: &nbsp;</b> <span>{data?.cabecera.numeroDocumento} </span>

							{#if typeof data?.cabecera.complemento === 'string'}
								{#if data?.cabecera.complemento}
									- <span>
										{data?.cabecera.complemento}
									</span>
								{/if}
							{/if}
						</p>
						<p>
							<b>COD. CLIENTE: &nbsp;</b> <span>{data?.cabecera.codigoCliente} </span>
						</p>
						<p>
							<b>FECHA DE EMISION : &nbsp;</b>
							<span>
								{formatDateTime(new Date(data?.cabecera.fechaEmision))}
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
							<th>MD.</th>
							<th>COD.</th>
							<th>P/U</th>
							<th> DESC. </th>
							<th>SUBTOTAL</th>
						</tr>
					</thead>
					<tbody>
						{#each data?.detalle as detalle}
							<tr>
								<td colspan="100" class="name">
									{detalle.descripcion}
								</td>
							</tr>
							<tr>
								<td>{detalle.cantidad}</td>
								<td
									>{measure_units
										.find(({ siat_bo_code }) => siat_bo_code == Number(detalle.unidadMedida))
										?.label?.substring(0, 3)
										?.toUpperCase() || 'und'}
								</td>
								<td>{detalle.codigoProducto}</td>

								<td>{formatCurrency(Number(detalle.precioUnitario), false)}</td>
								<td>{formatCurrency(Number(detalle.montoDescuento), false)}</td>
								<td>{formatCurrency(Number(detalle.subTotal), false)}</td>
							</tr>
						{/each}
					</tbody>
					<tfoot>
						<tr>
							<td colspan="4">
								<p>SUBTOTAL (Bs):</p>
							</td>
							<td colspan="2">
								<p>
									{formatCurrency(
										[...data?.detalle]
											.map((item) => Number(item.subTotal))
											.reduce((a, b) => a + b, 0),
										false
									)}
								</p>
							</td>
						</tr>
						<tr>
							<td colspan="4">
								<p>DESCUENTO (Bs):</p>
							</td>
							<td colspan="2">
								<p>{formatCurrency(Number(data?.cabecera.descuentoAdicional), false)}</p>
							</td>
						</tr>
						<tr>
							<td colspan="4">
								<p>TOTAL (Bs):</p>
							</td>
							<td colspan="2">
								<p>{formatCurrency(Number(data?.cabecera.montoTotal), false)}</p>
							</td>
						</tr>
						<tr>
							<td colspan="4">
								<p>MONTO GIFT CARD (Bs):</p>
							</td>
							<td colspan="2">
								<p>{formatCurrency(Number(data?.cabecera.montoGiftCard), false)}</p>
							</td>
						</tr>
						<tr>
							<td colspan="4">
								<b>MONTO A PAGAR (Bs):</b>
							</td>
							<td colspan="2">
								<p>
									{formatCurrency(
										Number(data?.cabecera.montoTotal) - Number(data?.cabecera.montoGiftCard),
										false
									)}
								</p>
							</td>
						</tr>
						<tr>
							<td colspan="4">
								<b
									>IMPORTE BASE
									<br /> CRÉDITO FISCAL (Bs):</b
								>
							</td>
							<td colspan="2">
								<p>{formatCurrency(Number(data?.cabecera.montoTotalSujetoIva), false)}</p>
							</td>
						</tr>
					</tfoot>
				</table>
				<hr />
				<p id="number-words">
					{@html getLiteralNumber(Number(data?.cabecera.montoTotalSujetoIva))}
				</p>
				<hr />
				<h5>
					ESTA FACTURA CONTRIBUYE AL DESARROLLO DEL PAÍS, EL USO ILÍCITO SERÁ SANCIONADO PENALMENTE
					DE ACUERDO A LEY
				</h5>
				<p style="text-transform: none;">
					{data?.cabecera.leyenda}
				</p>
				<div class="footer">
					<div class="qr-code" id="qr-code" bind:this={qrEl} />
				</div>
				<h5 style="text-transform: none;">
					{#if isOnline}
						"Este documento es la Representación Gráfica de un Documento Fiscal Digital emitido en
						una modalidad de facturación en línea"
					{:else}
						“Este documento es la Representación Gráfica de un Documento Fiscal Digital emitido
						fuera de línea, verifique su envío con su proveedor o en la página web
						www.impuestos.gob.bo”
					{/if}
				</h5>
				<p class="thanks">Gracias por su preferencia.</p>
			</div>
		{:else}
			<div class="document" style="max-width: {width};">
				<div class="top">
					<div class="info">
						<h5>{data?.cabecera.razonSocialEmisor}</h5>
						<h6>
							{#if Number(data?.cabecera.codigoSucursal) == 0}
								Casa Matriz
							{:else}
								Sucursal {data?.cabecera.codigoSucursal}
							{/if}
						</h6>
						<p>N. punto de venta {data?.cabecera.codigoPuntoVenta}</p>
						<p style="text-transform: uppercase;">{data?.cabecera.direccion}</p>
						<p>Tel. {data?.cabecera.telefono}</p>
						<p>{data?.cabecera.municipio}</p>
					</div>
					<div class="logo">
						<img src={'/logo.png'} alt="" />
					</div>

					<div>
						<p>
							<b>NIT: </b>{data?.cabecera.nitEmisor}
						</p>
						<p>
							<b>FACTURA N°: </b>
							{data?.cabecera.numeroFactura}
						</p>
						<p style="width: 250px; overflow-wrap: break-word;">
							<b>CÓD. AUTORIZACIÓN: </b>{data?.cabecera.cuf}
						</p>
					</div>
				</div>
				<div style="text-align: center;">
					<h3>FACTURA</h3>
					<p>(Con derecho a crédito fiscal)</p>
				</div>
				<div class="client-details">
					<p>
						<span>NOMBRE/RAZÓN SOCIAL: </span>
						<strong>{data?.cabecera.nombreRazonSocial} </strong>
					</p>
					<p>
						<span>NIT/CI/CEX: &nbsp;</span> <strong>{data?.cabecera.numeroDocumento} </strong>

						{#if typeof data?.cabecera.complemento === 'string'}
							- <span>
								{data?.cabecera.complemento}
							</span>
						{/if}
					</p>
					<p>
						<span>COD. CLIENTE: </span>
						<strong>{data?.cabecera.codigoCliente} </strong>
					</p>
					<p>
						<span>FECHA DE EMISION: </span>
						<strong>
							{formatDateTime(new Date(data?.cabecera.fechaEmision))}
						</strong>
					</p>
				</div>
				<table>
					<thead>
						<tr>
							<th>Cantidad</th>
							<th>U. Medida</th>
							<th>Cod.</th>
							<th>Detalle</th>
							<th>P/U</th>
							<th> Desc. </th>
							<th>Subtoal</th>
						</tr>
					</thead>
					<tbody>
						{#each data?.detalle as detalle}
							<tr>
								<td>{detalle.cantidad}</td>
								<td
									>{measure_units
										.find(({ siat_bo_code }) => siat_bo_code == Number(detalle.unidadMedida))
										?.label?.substring(0, 60) || 'und'}
								</td>
								<td>{detalle.codigoProducto}</td>
								<td>{detalle.descripcion}</td>
								<td>{detalle.precioUnitario}</td>
								<td>{detalle.montoDescuento}</td>
								<td>{detalle.subTotal}</td>
							</tr>
						{/each}

						<tr>
							<td
								colspan="4"
								style="text-align: start; height: fit-content; text-align: center; vertical-align: middle;"
							>
								<p id="number-words">
									{@html getLiteralNumber(Number(data?.cabecera.montoTotalSujetoIva))}
								</p>
							</td>
							<td style="padding:0; border: none" colspan="3">
								<table style="border-collapse: collapse; border: none">
									<tr>
										<td colspan="2">
											<p>SUBTOTAL:</p>
										</td>
										<td colspan="1">
											<p>
												{formatCurrency(
													[...data?.detalle]
														.map((item) => Number(item.subTotal))
														.reduce((a, b) => a + b, 0)
												)}
											</p>
										</td>
									</tr>
									<tr>
										<td colspan="2">
											<p>DESCUENTO:</p>
										</td>
										<td colspan="1">
											<p>
												{formatCurrency(Number(data?.cabecera.descuentoAdicional))}
											</p>
										</td>
									</tr>
									<tr>
										<td colspan="2">
											<p>TOTAL:</p>
										</td>
										<td colspan="1">
											<p>{formatCurrency(Number(data?.cabecera.montoTotal))}</p>
										</td>
									</tr>
									<tr>
										<td colspan="2">
											<p>MONTO GIFT CARD:</p>
										</td>
										<td colspan="1">
											<p>{formatCurrency(Number(data?.cabecera.montoGiftCard))}</p>
										</td>
									</tr>
									<tr>
										<td colspan="2">
											<b>MONTO A PAGAR:</b>
										</td>
										<td colspan="2">
											<p>
												{formatCurrency(
													Number(data?.cabecera.montoTotal) - Number(data?.cabecera.montoGiftCard)
												)}
											</p>
										</td>
									</tr>
									<tr>
										<td colspan="2">
											<b
												>IMPORTE BASE
												<br /> CRÉDITO FISCAL:</b
											>
										</td>
										<td colspan="2">
											<p>
												{formatCurrency(Number(data?.cabecera.montoTotalSujetoIva))}
											</p>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
				<footer>
					<div class="bottom">
						<div class="messages">
							<h5>
								ESTA FACTURA CONTRIBUYE AL DESARROLLO DEL PAÍS, EL USO ILÍCITO SERÁ SANCIONADO
								PENALMENTE DE ACUERDO A LEY
							</h5>
							<p style="text-transform: none;">
								{data?.cabecera.leyenda}
							</p>

							<h5 style="text-transform: none;">
								{#if isOnline}
									"Este documento es la Representación Gráfica de un Documento Fiscal Digital
									emitido en una modalidad de facturación en línea"
								{:else}
									“Este documento es la Representación Gráfica de un Documento Fiscal Digital
									emitido fuera de línea, verifique su envío con su proveedor o en la página web
									www.impuestos.gob.bo”
								{/if}
							</h5>
						</div>
						<div id="qr-code" class="qr-code" bind:this={qrEl} />
					</div>
				</footer>
			</div>
		{/if}
	{:else}
		<li>no transacction</li>
	{/if}
</div>
