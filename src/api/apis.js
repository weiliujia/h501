import axios from './https.js';
//注册
export let Reg = (opts) =>{ // opts={username:xxx,password:xxx}
  return axios.post('/api/Register/api_register_doregis',opts);
}
//列表
export let Getlist = () =>{ 
  return axios.get('/api/Comm/api_users_list');
}
//短信验证码
export let  yzm= (o) =>{ 
  return axios.post('/api/Sendsms/sendsms',o);
}
//获取二维码
export let  ewm= () =>{ 
  return axios.get('/api/Comm/api_comm_qecode');
}
//获取二维码
export let  xiey= () =>{ 
  return axios.get('/api/comm/api_comm_agree');
}
//获取金额
export let  money= () =>{ 
  return axios.get('/api/Comm/api_comm_quota');
}
