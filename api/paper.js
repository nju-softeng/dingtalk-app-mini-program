import { get, post } from '../utils/request';

// 分页查询论文
export function listPaper(page, size) {
  return get('/paper/page/' + page + '/' + size);
}
