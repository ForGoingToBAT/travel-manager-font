import axios from 'axios'
const ConfigBaseURL = 'http://localhost:8099/'
//使用create方法创建axios实例
export const Service = axios.create({
    timeout: 60000, // 请求超时时间
    baseURL: ConfigBaseURL,
})
// 添加请求拦截器
Service.interceptors.request.use(function (config) {
    //在请求发出之前进行一些操作，比如请求头携带内容
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return config;
}, function (error) {
    return error;
});

//添加一个响应拦截器
Service.interceptors.response.use(function (res) {
    // 写一下操作，比如token过期处理
    if (res.data.statusCode == 401) {
        alert('暂无权限，请重新登录!');
        window.location.href = '/login';
        return false;
    }
    return res;
}, function (error) {
    switch (error && error.response && error.response.status) {
        case 400:
            error.message = '请求错误'
            break
        case 401:
            error.message = '未授权，请登录'
            break
        case 403:
            error.message = '拒绝访问'
            break
        case 404:
            error.message = '未找到访问地址'
            break
        case 408:
            error.message = '请求超时'
            break
        case 500:
            error.message = '服务器内部错误'
            break
        case 501:
            error.message = '服务未实现'
            break
        case 502:
            error.message = '网关错误'
            break
        case 503:
            error.message = '服务不可用'
            break
        case 504:
            error.message = '网关超时'
            break
        case 505:
            error.message = 'HTTP版本不受支持'
            break
        default:
    }
    //Do something with response error
    return error;
})

export default Service