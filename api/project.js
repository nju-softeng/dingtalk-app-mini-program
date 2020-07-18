import { get, post } from '../utils/request';

// 创建项目
export function createProject(data) {
  return post('/project', data)
}

// 删除项目
export function rmProject(pid) {
  return get('/project/' + pid + '/delete')
}

// 查询审核人创建的项目
export function listProject() {
  return get('/project')
}

// 查询实验室所有项目
export function listAllProject() {
  return get('/project/all')
}

// 查询项目详情
export function getProjectDetail(pid) {
  return get('/project/' + pid + '/detail')
}

// 查询项目所包含的迭代
export function listProjectIteration(pid) {
  return get('/project/' + pid + '/iteration')
}

// 创建迭代
export function createIteration(pid, data) {
  return post('/project/' + pid + '/iteration', data)
}

// 删除迭代
export function rmIteration(itid) {
  return get('/project/iteration/' + itid + '/delete')
}

// 查询迭代绩效
export function computeIterateAc(itid, date) {
  return post('/project/iteration/' + itid + '/computeac', { finishdate: date })
}

// 系统计算迭代AC
export function autoSetAc(itid, date) {
  return post('/project/autosetac/' + itid, { finishdate: date })
}

// 手动设置迭代AC
export function manualSetAc(itid, data) {
  return post('/project/manualsetac/' + itid, data)
}

// 获取迭代
export function getIteration(id) {
  return get('/project/iteration/' + id)
}

// 查询用户参与的迭代
export function listUserIteration() {
  return get('/project/iteration/user')
}