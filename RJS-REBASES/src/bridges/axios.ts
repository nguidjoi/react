import { notificationService } from "@/core/services/notification.service";
import axios from "axios";
import { buildWebStorage, setupCache } from "axios-cache-interceptor";

const instance = axios.create({
  baseURL: 'http://localhost:5050',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

instance.interceptors.request.use(
  async config => {
    console.log('REQUEST', config)
    
    config.url = config.url?.replace('/api', '');

    await new Promise(r => setTimeout(r, 2000 * Math.random() ));

    notificationService.push('Processing Request', "info");

    return config
  }
  , error => Promise.reject(error)
)

instance.interceptors.response.use(

  async response => {
    console.log('RESPONSE', response)

    notificationService.push('Request Completed', "success");

    return response
  }
  , error => {
    console.log('ERROR', error)

    notificationService.push( error.message, "error")

    return Promise.reject(error)
  }
)

setupCache(instance, {
  storage: buildWebStorage(localStorage, 'axios-cache', 1000),
})

export { instance as axios };
