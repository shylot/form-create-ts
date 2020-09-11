/**
 *
 *  配置前端代理，以及开发环境配置
 */
const baseUrl = process.env.NODE_ENV === 'production' ? '/dist' : '/';

module.exports = {
    publicPath: baseUrl,
    devServer: {
        host: 'localhost',
        port: 8081,
        proxy: {  //配置跨域
            '/local': {
                target: 'http://localhost:8082/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                changOrigin: true,  //允许跨域
                pathRewrite: {
                    '^/local': ''
                }
            },
            '/el': {
                target: 'https://jsonplaceholder.typicode.com/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                changOrigin: true,  //允许跨域
                pathRewrite: {
                    '^/el': ''
                }
            },
        }
    },
};

