import axios from 'axios';
axios.defaults.baseURL = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

var HttpRequest = {};
HttpRequest.get = function (url, params) {
    return axios.get(url, {
        params: params
    }).catch(function () {
        console.log(url + " error");
    });
};

HttpRequest.post = function (url, params, config) {
    return axios.post(url, params, config).catch(function () {
        console.log(url + " error");
    });
};

var DataAccess = {};

// GET
// demo
DataAccess.demo = function (p) {
    return HttpRequest.get("/demo", p);
}


export default HttpRequest;