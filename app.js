import { post } from './utils/request'
import { getUserInfo } from './api/user'

App({
  onLaunch(options) {
    dd.getAuthCode({
      success: function (res) {
        console.info()
        post('/login', res).then(res => {
          // 将 token 缓存起来
          dd.setStorageSync({
            key: 'token',
            data: res.headers['token']
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
    // 从后台被 scheme 重新打开
    // options.query == {number:1}

  },


});
