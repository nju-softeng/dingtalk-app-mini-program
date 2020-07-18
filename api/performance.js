import { get, post } from '../utils/request';

// 批量获取周报
export function getDcSummary(date) {
    return post('/dcsummary', date)
}

// 查询用户总AC
export function getAcSummary() {
    return get('/acsummary')
}

// 查询用户AC变化日志
export function listUserAC(uid) {
    return get('/userac/' + uid)
}

// 获取实验室最近10条AC变动公告
export function lastAC() {
    return get('/lastac')
}

// 获取首页的绩效信息
export function getPerformance() {
    return get('/performance')
}

// 更新用户指定月份的topup
export function updateTopup(data) {
    return post('/performance/topup', data)
}

