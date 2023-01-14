export async function load({ params, url }) {
	const lobbyCode = params.lobbyCode;
	const username = url.searchParams.get('username');

	return {
		props: {
			lobbyCode,
			username
		}
	};
}
