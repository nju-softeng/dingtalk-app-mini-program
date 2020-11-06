import { post } from './utils/request'
import { getUserInfo } from './api/user'

App({
  onLaunch(options) {
    dd.getAuthCode({
      // 成功获取 res : {authCode: "xxxxxxxxxxxxxxxxxxxxxxxxxxx"}
      success: function (res) {
        // 向后端发送请求进行登录
        post('/login', res).then(res => {
          // 将返回的 token 缓存起来，用于后续接口请求
          dd.setStorageSync({
            key: 'token',
            data: res.data.token
          });

          getUserInfo().then(res => {
            dd.setStorageSync({
              key: 'user',
              data: res.data
            });
          })
        });
      },
      fail: function (err) {

      }
    });
  },
  onShow(options) {

  },


});
