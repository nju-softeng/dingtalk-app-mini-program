Page({
  data: {
    name: '',
    userid: ''
  },
  onLoad() {
    const user = dd.getStorageSync({ key: 'user' }).data;
    console.log(user);
    this.setData({ name: user.name, userid: user.userid });
  }
});
