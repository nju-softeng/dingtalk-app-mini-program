import { get, post } from '../utils/request';

// 查询系统中所有可用用户
export function getUserList() {
  return get('/userlist')
}