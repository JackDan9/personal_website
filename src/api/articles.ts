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

// export function createArticle(data) {
//   return request({
//     url: '/personal_website/article/create',
//     method: 'post',
//     data: data,
//   })
// }