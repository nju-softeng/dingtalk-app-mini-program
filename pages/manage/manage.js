Page({
  data: {

  },
  onLoad() {},
  tapTab(event) {
    let tab =  event.target.dataset.tab
    dd.navigateTo({url: './' + tab + '/' + tab })
  }
});
