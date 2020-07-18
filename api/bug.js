import { get, post } from '../utils/request';

// 创建项目
export function addBug(data) {
  return post('/bug', data)
}

// 查询指定项目的bug
export function listProjectBug(pid) {
  return get('/bug/project/' + pid)
}

// 查询审核人创建项目的bug
export function listAuditorBug(aid) {
  return get('/bug/auditor/' + aid)
}

// 确认bug 状态
export function checkBug(data) {
  return post('/bug/check', data)
}

// 删除bug报告
export function rmBug(id) {
  return get('/bug/' + id + '/rm')
}

// 查询用户的bug
export function listUserBug() {
  return get('/bug/user')
}

// 查询审核人待审核bug数
export function getAuditorBugCnt() {
  return get('/bug/aduitor/cnt')
}