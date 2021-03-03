import request from '@/utils/request':

export function fetchList(query) {
  return request({
    url: '/article_detail/list',
    method: 'get',
    params: query
  });
}