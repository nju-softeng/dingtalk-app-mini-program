# dingtalk-mini-program


为支持多环境切换，取消了git对配置文件的跟踪,克隆项目后需自行添加
1. 根目录创建`config.js`文件
2. 填写配置文件内容，例如：
```
export default {
  baseURL: 'http://localhost:8080/api',
}
```

