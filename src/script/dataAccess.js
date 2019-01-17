import axios from 'axios';
axios.defaults.baseURL = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

var HttpRequest = {};
HttpRequest.get = (url, params) => {
  return axios.get(url, {
    params: params
  }).catch(() => {
    console.log(url + " error");
  });
};

HttpRequest.post = (url, params, config) => {
  return axios.post(url, params, config).catch(() => {
    console.log(url + " error");
  });
};

var DataAccess = {};

// GET
// demo
DataAccess.demo = (p) => {
  return HttpRequest.get("/demo", p);
}


export default HttpRequest;
