import request from '~/composables/request'

// http://139.9.94.55:11112/material/show/category/1?pageNum=1&pageSize=20

export function test() {
  return request.get('http://139.9.94.55:11112/material/show/category/1?pageNum=1&pageSize=20')
}
