import request from '@/utils/request'

/**
 *
 * @param {Sting,Number} data 账号密码
 * @returns
 */
export const loginAPI = (data) => {
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data
  })
}

export const getValidationAPI = (num) => {
  return request({
    url: `/user-service/user/imageCode/${num}`
  })
}
