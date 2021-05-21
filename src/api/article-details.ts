import request from '../utils/request'

export function fetchList(query) {
  return request({
    url: '/article_detail/list',
    method: 'get',
    params: query
  });
}

export function fetchDetail(id) {
  return request({
    url: '/article/detail',
    method: 'get',
    params: id,
  })
}
