import { searchPackages } from '../../api/queries/searchPackages';

export async function searchLoader({ request }: { request: Request }) {
	const { searchParams } = new URL(request.url);
	const term = searchParams.get('term');

	if (!term) {
		throw new Error('Search terms must be provided');
	}

	const results = await searchPackages(term);

	// Add obj for future additional requests
	return {
		searchResults: results,
	};
}
