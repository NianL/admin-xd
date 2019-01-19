import axios from 'axios';
axios.defaults.baseURL = 'http://10.122.66.176:84';
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

var HttpRequest = {};
HttpRequest.get = (url, params) => {
  return axios.get(url, {
    params: params
  }).catch(e => {
    console.log(url + " " + e);
  });
};

HttpRequest.post = (url, params) => {
  return axios.post(url, params).catch(e => {
    console.log(url + " " + e);
  });
};

var DataAccess = {};

// GET
// demo
DataAccess.demo = (p) => {
  return HttpRequest.get("/demo", p);
}

// GET
// 1.4 获取熔断规则
DataAccess.GetFuseRule = (p) => {
  return HttpRequest.get("/api/Admin/GetFuseRule", p);
}

// POST
// 1.5 设置熔断规则
DataAccess.SetFuseRule = (p) => {
  return HttpRequest.post("/api/Admin/SetFuseRule", p);
}

// GET
// 1.6 获取心跳间隔
DataAccess.GetHeartBeat = (p) => {
  return HttpRequest.get("/api/Admin/GetHeartBeat", p);
}

// POST
// 1.7 设置心跳间隔
DataAccess.SetHeartBeat = (p) => {
  return HttpRequest.post("/api/Admin/SetHeartBeat", p);
}

// GET
// 1.8 获取日志转发设置
DataAccess.GetLogTransSettings = (p) => {
  return HttpRequest.get("/api/Admin/GetLogTransSettings", p);
}

// POST
// 1.9 设置日志转发设置
DataAccess.SetLogTransSettings = (p) => {
  return HttpRequest.post("/api/Admin/SetLogTransSettings", p);
}

// GET
// 2.0 获取手机设置
DataAccess.GetMobileSettings = (p) => {
  return HttpRequest.get("/api/Admin/GetMobileSettings", p);
}

// POST
// 2.1 设置手机设置
DataAccess.SetMobileSettings = (p) => {
  return HttpRequest.post("/api/Admin/SetMobileSettings", p);
}

// POST
// 3.1 发送短信验证码
DataAccess.SendMessage = (p) => {
  return HttpRequest.post("/api/Admin/SendMessage", p);
}

// POST
// 3.2 登录
DataAccess.Login = (p) => {
  return HttpRequest.post("/api/Admin/Login", p);
}


export default DataAccess;
