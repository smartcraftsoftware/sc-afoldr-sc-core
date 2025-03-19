import queryString from 'query-string'
import {
  DEFAULT_PAGE_NUMBER_QUERY_KEY,
  DEFAULT_PAGE_SIZE_QUERY_KEY,
  DEFAULT_SEARCH_QUERY_KEY,
} from '../constants/query'

export type UseQueryParamsType = number | string | null | (string | null)[] | undefined

export const useQueryParams = (
  searchKey = DEFAULT_SEARCH_QUERY_KEY,
  pageSizeKey = DEFAULT_PAGE_SIZE_QUERY_KEY,
  pageNumberKey = DEFAULT_PAGE_NUMBER_QUERY_KEY,
) => {
  const queryStringObject = queryString.parse(window.location.search)
  const searchPageNumber = queryStringObject[pageNumberKey] ?? 0
  const searchPageSize = queryStringObject[pageSizeKey] ?? 10
  const search = queryStringObject[searchKey] ?? ''

  return {
    [pageSizeKey]: searchPageSize,
    [pageNumberKey]: searchPageNumber,
    [searchKey]: search,
  } satisfies Record<string, UseQueryParamsType>
}
