import { listPaper } from '/api/paper';

Page({
  data: {
    // 后台分页从0开始
    page: 1,
    pageSize: 30,
    hasNext: true,
    list: []
  },
  onLoad() {
    listPaper(this.data.page, 6).then(res => {
      this.setData({ list: res.data.list });
    });
  },
  // 顶部下拉刷新
  onPullDownRefresh() {
    this.data.page = 1;
    this.data.hasNext = true;
    listPaper(this.data.page, 6)
      .then(res => {
        this.setData({ list: res.data.list });
        dd.stopPullDownRefresh();
      })
      .catch(() => {
        dd.showToast({
          type: 'fail',
          content: '加载失败',
          duration: 2000
        });
      })
      .finally(() => {
        dd.stopPullDownRefresh();
      });

    console.log('upper');
  },
  // 触底上拉加载
  onReachBottom() {
    if (this.data.hasNext) {
      this.data.page++;
      listPaper(this.data.page, 6).then(res => {
        console.log(res.data.list);
        this.setData({ list: this.data.list.concat(res.data.list) });
        if (res.data.list.length == 0) {
          this.data.hasNext = false;
        }
      });
    }

    console.log('bottom');
  },
  test() {
    return '1234567890';
  }
});
