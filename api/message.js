import { get, post } from '../utils/request';

// 获取消息
export function getMessages(page, size) {
  return get('/message/page/' + page + '/' + size)
}