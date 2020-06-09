import request from '../utils/request';

// 请求方式
export default {
    login(mobile,password){
        return request({
            method:"post",
            url: "/adminUser/login",
            data : {
                mobile,
                password,
            }
        })
    },
    getInfo(token){
        return request({
            method:"get",
            url:`/menu/info/${token}`
        })
       
    }
}
