module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/bimpt/' : '/',
  assetsDir:'static',
  outputDir:'bimpt',
  devServer: {
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://123.56.7.142' // 配置跨域处理,只有一个代理
    proxy: {
      '/bimplatform': {
        target: 'http://123.56.7.142/bimplatform',   // 需要请求的地址
        changeOrigin: true,  // 是否跨域
        pathRewrite: {
          '^/bimplatform': '/'  // 替换target中的请求地址，也就是说，在请求的时候，url用'/proxy'代替'http://ip.taobao.com'
        },
      },
      '/bimelements': {
        target: 'http://123.56.7.142/bimelements',   // 需要请求的地址
        changeOrigin: true,  // 是否跨域
        pathRewrite: {
          '^/bimelements': '/'  // 替换target中的请求地址，也就是说，在请求的时候，url用'/proxy'代替'http://ip.taobao.com'
        },
      }
    },  // 配置多个代理
  }
}