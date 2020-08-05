const path = require("path");
const { config } = require("process");
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports = {
    // 公共路径
    publicPath:"./",
    // 静态资源
    assetsDir:"./",
    // 生产环境
    productionSourceMap:false,
    chainWebpack:config=>{
        // 配置文件别名
        config.resolve.alias
        .set("@",resolve("src"))
        .set('com',resolve('src/components'))
    }
}