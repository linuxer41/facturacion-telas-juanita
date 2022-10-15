/** @type {import('@sveltejs/kit').Handle} */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		ssr: false // disable ssr render
	});

	return response;
}
