import { get, post } from '../utils/request';

// 获取单个周报
export function fetchReport(uid, date) {
  return post('/audit/report/' + uid, { date: date })
}

// 提交/更新 审核结果
export function submitAudit(data) {
  return post('/audit', data)
}

// 审核人获取已经审核的申请记录
export function getChecked(page) {
  return get('/audit/checked/page/' + page,)
}

// 更具时间筛选数据
export function getCheckedByDate(date) {
  return post('/audit/checked/date', { date: date })
}

// 审核人获取待审核的申请记录
export function getToChecked() {
  return get('/audit/pending')
}

// 审核人待审核申请数
export function getUnCheckCnt() {
  return get('/audit/uncheckcnt')
}