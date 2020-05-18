import axios from 'axios'
let instance = null

export class ApiInstance {
    constructor(baseURL, headers) {
        if (!instance) {
            instance = ApiInstance.create(baseURL, headers)
            this.setInterceptors()
        }
        return instance
    }

    static create(baseURL, headers) {
        return axios.create({baseURL, headers})
    }

    setInterceptors() {
        instance.interceptors.response.use(
            res => res.data,
            err => {
                console.log('err.response', err.response)
                if (err.response) {
                    switch (err.response.status) {
                        case 500:
                            return Promise.reject('Network Service Error.Try again later')
                        case 401:
                            console.log('401')
                            break
                        case 404:
                            break
                        default:
                            console.log('err.response', err.response)
                            break
                    }
                    return
                }
                Promise.reject(err)
            }
        )
    }
}

const headers = {
    'Accept-Language': 'en',
    'Content-Type': 'application/json'
}

const Api = new ApiInstance(process.env.REACT_APP_SYNONYMS_API_SERVICE, headers)

export default Api
