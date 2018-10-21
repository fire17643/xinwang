module.exports = {
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch').delete('preload')
  },
  devServer: {
    proxy: 'http://localhost:3000'
  }
}
