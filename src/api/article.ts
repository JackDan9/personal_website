import request from '../utils/request';

export function fetchArticle(id) {
  return request({
    url: '/personal_website/article/create',
    method: 'get',
    params: {id},
  })
}

export function createArticle(data) {
  return request({
    url: '/personal_website/article/create',
    method: 'post',
    data: data,
  })
}