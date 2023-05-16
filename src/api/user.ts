import type { LoginUser } from './model/user'
import request from '~/composables/request'

export function login(user: LoginUser) {
  return request.post('/login', {
    ...user,
  })
}
