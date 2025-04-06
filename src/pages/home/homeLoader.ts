import type { PackageDetails } from '../../api/types/packageDetails';
import { getFeaturePackages } from '../../api/queries/getFeaturePackages';

export interface HomeLoaderResult {
	featuredPackages: PackageDetails[];
}

export default async function homeLoader(): Promise<HomeLoaderResult> {
	const featuredPackages = await getFeaturePackages();

	return {
		featuredPackages,
	};
}
