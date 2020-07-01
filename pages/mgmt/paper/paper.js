import { listPaper } from '/api/paper';

Page({
  data: {
    // 后台分页从0开始
    page: 1,
    list: []
  },
  onLoad() {
    listPaper(this.data.page, 6).then(res => {
      this.setData({ list: res.data.list });
    });
  },
  onPullDownRefresh() {
    console.log('upper');
  },
  onReachBottom() {
    // 页面被拉到底部
    console.log('bottom');
  },
  test() {
    return "1234567890"
  }
});
