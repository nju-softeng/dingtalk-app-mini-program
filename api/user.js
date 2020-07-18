import { get, post } from '../utils/request'

// 获取用户信息
export function getUserInfo() {
  return get("/user/info");
}

// 获取审核人, 用于申请绩效时审核
export function listAuditors() {
  return get('/user/getAuditors')
}

// 获取用户本周周报
export function getReport() {
  return get('/report')
}

// 更新用户权限
export function updateUserRole(data) {
  return post('/updaterole', data)
}

// 查询系统中所有用户
export function queryUser(data, page) {
  return post('/user/query/' + page, data)
}

// 查询用户详细
export function getUserDetail() {
  return get('/user/detail')
}

// 查询用户详细
export function updateUserInfo(data) {
  return post('/user/update', data)
}