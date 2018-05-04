//编写webpack.congig.js需要使用commonJS规范
module.exports = {
    entry : {
        app : './app.js'
    },
    output : {
        filename : './db/[name].[hash:5].js'
    }
}