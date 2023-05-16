import request from '~/composables/request'

export function login(username, password) {
  return request.post('/login', {
    username,
    password,
  })
}

// // /logout
// export function logout(userId: string) {
//   return request.get(`/logout?userId=${userId}`)
// }

// export function checkLogin(userId: string) {
//   return request.get(`/checkLogin?userId=${userId}`)
// }

// export function register(username, password, phone, email) {
//   return request.post('/register', {
//     username,
//     password,
//     email,
//     phone,
//   })
// }

// /**
//  * 头像上传
//  */
// export function uploadAvatar(data) {
//   return request.post('/uploadAvatar', {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//     data,
//   })
// }

// /**
//  *
//  * @param {修改用户} user
//  * @returns
//  */
// export function updateUserInfo(user) {
//   return request.put('/user', {
//     userId: user.userId,
//     avatar: user.avatar,
//     email: user.email,
//     nickname: user.nickname,
//     address: user.address,
//     phone: user.phone,

//   })
// }
