Page({
  data: {
    arr: {
      onItemTap: 'onGridItemTap',
      list: [
        {
          icon: '/image/paper.png',
          title: '论文管理',
          entitle: 'Collapse',
          page: '/pages/manage/paper/paper'
        },
        {
          icon: '/image/apply.png',
          title: '开发中...',
          entitle: 'Tag',
          page: '/page/biz/pages/tag/index'
        },
        {
          icon: '/image/ac.png',
          title: '开发中...',
          entitle: 'Tag',
          page: '/page/biz/pages/tag/index'
        },
        {
          icon: '/image/stat.png',
          title: '开发中...',
          entitle: 'Tag',
          page: '/page/biz/pages/tag/index'
        },
        {
          icon: '/image/dev.png',
          title: '开发中...',
          entitle: 'Tag',
          page: '/page/biz/pages/tag/index'
        }
      ]
    }
  },
  onLoad() {},
  onGridItemTap(e) {
    const page = this.data.arr.list[e.currentTarget.dataset.index].page;
    dd.navigateTo({ url: page });
  }
});
