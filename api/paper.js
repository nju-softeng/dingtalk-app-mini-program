import { get, post } from '../utils/request';

// 添加论文
export function addPaper(data) {
  return post('/paper', data)
}

// 分页查询论文
export function listPaper(page, size) {
  return get('/paper/page/' + page + '/' + size);
}

// 获取某个论文的详细信息
export function getPaper(id) {
  return get('/paper/' + id)
}

// 创建投票
export function createVote(data) {
  return post('/vote', data)
}

// 查询论文对应的投票
export function getPaperVote(pid) {
  return get('/paper/' + pid + '/vote')
}

// 查询投票详情
export function getVoteDetail(pid) {
  return get('/vote/' + pid + '/detail')
}

// 用户投票
export function addpoll(vid, data) {
  return post('/vote/' + vid, data)
}

// 提交论文结果
export function submitResult(id, result) {
  return post('/paper_result/' + id, { data: result })
}

// 删除论文记录
export function rmPaper(id) {
  return get('/paper/delete/' + id)
}

// 提交论文评审建议
export function submitReview(data) {
  return post('/paper/review', data)
}

// 查询论文评审建议
export function listReview(id) {
  return get('/paper/' + id + '/review')
}

// 更新论文评审建议
export function updateReview(data, id) {
  return post('/paper/' + id + '/review/update', data)
}

// 删除论文评审
export function deleteReview(id) {
  return get('/paper/review/delete/' + id)
}