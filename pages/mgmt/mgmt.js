Page({
  data: {
    arr: {
      onItemTap: 'onGridItemTap',
      list: [{
        icon: '/image/paper.png',
        title: '论文管理',
        entitle: 'Collapse',
        page: '/pages/mgmt/paper/paper',
      }, {
        icon: '/image/apply.png',
        title: '绩效申请',
        entitle: 'Tag',
        page: '/page/biz/pages/tag/index',
      }, {
        icon: '/image/ac.png',
        title: 'ac日志',
        entitle: 'Tag',
        page: '/page/biz/pages/tag/index',
      }, {
        icon: '/image/stat.png',
        title: '绩效汇总',
        entitle: 'Tag',
        page: '/page/biz/pages/tag/index',
      },
      {
        icon: '/image/dev.png',
        title: '开发管理',
        entitle: 'Tag',
        page: '/page/biz/pages/tag/index',
      }
      ],
    },
  },
  onLoad() { },
  onGridItemTap(e) {
    const page = this.data.arr.list[e.currentTarget.dataset.index].page;
    dd.navigateTo({ url: page });
  },
});
