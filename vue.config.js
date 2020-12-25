module.exports = {
  // 基本路径
  devServer: {
   open: process.platform === 'darwin',
   host: '0.0.0.0',
   port: 8088,
   https: false,
   hotOnly: false,
   proxy: null, // 设置代理
   before: app => {}
  }
}