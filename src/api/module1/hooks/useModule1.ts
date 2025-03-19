import { searchParamQueryKey, SearchParams } from 'api/queryKeys'

export const getEntitiesQueryKey = (
  options?: SearchParams & {
    entityId: string | undefined
  },
) => searchParamQueryKey('module1', options)
