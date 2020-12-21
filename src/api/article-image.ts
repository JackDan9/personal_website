import request from '../utils/request';

export function fetchImage(id) {
  return request({
    url: '/personal_website/image/detail',
    method: 'get',
    params: {id},
  })
}

export function createImage(data) {
  return request({
    url: '/personal_website/image/create',
    method: 'post',
    data: data
  })
} 