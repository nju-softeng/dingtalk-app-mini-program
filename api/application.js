import { get, post } from '../utils/request';

// 用户提交/更新绩效申请
export function submitApplication(data) {
  return post('/application', data)
}

// 用户获得已经申请的绩效
export function getUserApplication(page, size) {
  return get('/application/page/' + page + '/' + size)
}

// 获取本周是本月第几周
export function getWeek(data) {
  return post('/getdate', data)
}

//  审核人获取待审核绩效
export function getAudit() {
  return get('/pending_audit')
}
