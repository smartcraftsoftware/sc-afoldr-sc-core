import { UseQueryParamsType } from 'common/hooks/useQueryParams'

export type SearchParams = Partial<{
  pageNumber: UseQueryParamsType
  pageSize: UseQueryParamsType
  searchValue?: UseQueryParamsType
}>

export function searchParamQueryKey<T extends SearchParams>(key: string, options?: T) {
  return [key, ...(options ? [options] : [])]
}
