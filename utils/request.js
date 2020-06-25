import CONFIG from '../config'

const baseURL = CONFIG.baseURL

function request(config) {
    const token = dd.getStorageSync({ key: 'token' }).data;
    return new Promise((resolve, reject) => {
        dd.httpRequest({
            headers: {
                'content-type': 'application/json;charset=utf-8;',
                'token': token
            },
            url: baseURL + config.url,
            method: config.method,
            // 需要手动调用JSON.stringify将数据进行序列化
            data: JSON.stringify(config.data),
            dataType: 'json',
            success: function (res) {
                resolve(res)
            },
            fail: function (err) {
                console.info(err)
                reject(err)
            }
        });
    });
}

export function get(url) {
    return request({
        method: 'get',
        url
    })
}

export function post(url, data = {}) {
    return request({
        method: 'post',
        url,
        data
    })
}