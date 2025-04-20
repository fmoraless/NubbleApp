import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {postService} from '../postService';

export function usePostGetById(id: number, enabled: boolean) {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => postService.getById(id),
    staleTime: 1000 * 30, // 30 seconds
    enabled,
    //cacheTime: 5000,
  });

  return {
    post: data,
    isError,
    isLoading,
    isFetching,
    refetch,
  };
}
