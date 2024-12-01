import { IFilters } from '../types/interfaces';

export const buildQueryString = (
  filters: IFilters,
  searchQuery?: string,
  lastVisible?: string | null
): string => {
  const queryParams = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.append(key, value.toString());
    }
  });
  if (searchQuery && searchQuery !== '')
    queryParams.append('searchQuery', searchQuery);
  if (lastVisible) queryParams.append('lastVisible', lastVisible);

  return queryParams.toString();
};
