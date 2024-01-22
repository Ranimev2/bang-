import { serverLists } from '$lib/server/scraper';
import type { Load } from '@sveltejs/kit';

export const load: Load = async () => {
	const servers = serverLists();

	const connection: { link: string; text: string; platform: string }[] = [
		{ link: 'https://www.webtonative.com/checkout/nGDzhqqbZ1EgpgvDisrG', text: 'ranimev3', platform: 'Aplikasi' },
		{
			link: 'https://myranime.my.id/',
			text: 'riza',
			platform: 'Profil'
		}
	];
	return {
		servers,
		connection
	};
};
