import { lastAc, getPerformance } from "/api/performance";
import { getMessages } from "/api/message";
import { getUnCheckCnt } from "/api/audit";

Page({
  data: {
    name: "--",
    ac: "--",
    dc: "--",
    messages:[]
  },
  onLoad(query) {
    // 页面加载
    let user = dd.getStorageSync({
      key: 'user',
    }).data;

    // 请求绩效
    let performance = getPerformance().then(res => {
      console.log(res.data)
      this.data.ac = res.data.acTotal;
      this.data.dc = res.data.dcTotal;
    })

    // 获取消息
    let message = getMessages(0, 8).then(res => {
      console.log(res.data.content)
      this.data.messages = res.data.content;
    })

    // 获取实验室最近的AC变更
    let lastAcList = lastAc().then(res => { 
      console.log(res.data)
    })

    //  等待所有请求完成，在更新数据
    Promise.all([performance, message, lastAcList]).then(()=> {
      console.log("???-------------???")
      console.log(this.data.messages)
      this.setData({
        name: user.name,
        ac: this.data.ac,
        dc: this.data.dc,
        messages: this.data.messages
      })
    })

  },
  onReady() {
    // 页面加载完成
  },
  onShow() {

  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
