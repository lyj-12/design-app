import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'

// 创建axios实例
const request = axios.create({
  // 服务接口请求
  baseURL: '/api',
  // 超时设置
  timeout: 5000,
  // headers:{'Content-Type':'application/json;charset=utf-8'}
})
let loading: any
// 正在请求的数量
let requestCount = 0
// 显示loading
function showLoading() {
  if (requestCount === 0 && !loading) {
    loading = ElLoading.service({
      text: '拼命加载中，请稍后...',
      background: 'rgba(0, 0, 0, 0.7)',
      spinner: 'el-icon-loading',
    })
  }
  requestCount++
}
// 隐藏loading
function hideLoading() {
  requestCount--
  if (requestCount === 0)
    loading.close()
}

request.interceptors.request.use((config) => {
  config.data = JSON.stringify(config.data)
  // if (config.data && Object.keys(config.data).length == 0) {
  //     console.log(config.data);
  //     delete config.data
  // }
  config.headers = {
    'Content-Type': 'application/json;charset=UTF-8',
  }
  showLoading()
  return config
}, (error) => {
  Promise.reject(error)
})
request.interceptors.response.use((res) => {
  hideLoading()
  return Promise.resolve(res.data)
}, (error) => {
  hideLoading()
  if (error.message === 'timeout of 5000ms exceeded') {
    ElMessage.error('请求超时！')
    return Promise.reject(error)
  }
  if (error.response.status === 404) {
    ElMessage.error('找不到请求接口')
    return Promise.reject(error)
  }
})
export default request
