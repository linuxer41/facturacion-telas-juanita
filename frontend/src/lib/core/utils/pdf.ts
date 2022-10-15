export async function onInvoiceReady(e: CustomEvent) {
	if (window.electron) {
		if (window.electron) {
			try {
				const arrayBuffer: ArrayBuffer = await window.electron.invoke('generatePdf', {
					html: e.detail,
					name: 'factura.pdf',
					paper: {
						width: 80,
						height: 0
					},
					silent: false
				});
				const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
				const url = URL.createObjectURL(blob);
				window.open(url, '_blank');
			} catch (error) {
				console.log(error);
			}
		}
	}
}
