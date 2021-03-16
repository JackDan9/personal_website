import request from '@/utils/request';

export function fetchList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query,
  })
}

export function fetchDetail(id) {
  return request({
    url: '/article/detail',
    method: 'get',
    params: { id },
  })
}

export function fetchRecentlyUpdated(query) {
  return request({
    url: '/article/recently_updated',
    method: 'get',
    params: query,
  })
}