import { get, post } from '../utils/request';

// 查询系统中所有用户
export function queryUser(data, page) {
  return post('/system/user/' + page, data)
}

// 拉取用户
export function fetchAllUser() {
  return get("/system/fetchuser")
}

// 查询所有绩效标准
export function listSubsidy() {
  return get('/system/subsidy')
}

// 更新绩效标准
export function updateSubsidy(data) {
  return post('/system/subsidy')
}

// 查询所有的论文AC标准
export function listPaperLevel() {
  return get('/system/paperlevel')
}

// 更新论文绩效标准
export function updatePaperLevel(data) {
  return post('/system/paperlevel', data)
}

// 更新论文绩效标准
export function updateUserInfo(data) {
  return post('/system/userinfo', data)
}

// 禁用用户
export function disableUser(uid) {
  return get('/system/disable/user/' + uid)
}

// 启用用户
export function enableUser(uid) {
  return get('/system/enable/user/' + uid)
}

// 查询禁用的用户
export function queryDisableUser() {
  return get('/system/query/disableuser')
}