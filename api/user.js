import { get, post } from '../utils/request'

// 获取用户信息
export function getUserInfo() {
  return get("/user/info");
}