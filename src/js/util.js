export default{
  install (Vue, options) {
    /**
     * 滚动初始化
     */
    Vue.prototype.initScroll = function (damo) {
      if (damo != null && damo.length !== 0) {
        for (let i = 0; i < damo.length; i++) {
          this.Scrollbar.destroy(damo[i])
          this.Scrollbar.init(damo[i], {alwaysShowTracks: true, continuousScrolling: true})
        }
      }
    }
  }
}
