import axios from 'axios'

axios.defaults.baseURL = process.env.API
const commonParams = {}
// const option = {}

export default {
  ajax (url, parma, type) {
    let data = Object.assign({}, commonParams, parma)
    return new Promise((resolve, reject) => {
      axios({
        method: type,
        url: url,
        params: data}
      ).then((res) => {
        resolve(res.data)
      }, (error) => {
        reject(error)
      })
    })
    // return new Promise((resolve, reject) => {
    //   axios[type](url, (type.toLowerCase() == "post" ? data : {params: data}), option)
    //     .then((data) => {
    //       resolve(data.data)
    //     }).catch((error) => {
    //     reject(error)
    //   })
    // })
  },
  post (url, parma) {
    return this.ajax(url, parma, 'post')
  },
  get (url, parma) {
    return this.ajax(url, parma, 'get')
  }
}
