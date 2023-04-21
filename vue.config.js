const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports ={
  //https://cli.vuejs.org/config/#devserver-proxu
  devServer:{
    port: 3000,
    proxy:{
      '/api' : {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  }
}