<template>
    <div class="login-container">
        <el-form ref="form" :model="form" :rules="rules"  class="login-form">
            <img src="../../assets/login_img.jpeg" alt="" srcset="">
            <h2 class="login-title">积云会员管理系统</h2>
            <el-form-item prop="username">
               <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
               <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
               <el-button type="primary" @click="onSubmit('form')">登录</el-button>
            </el-form-item>
            
        </el-form>
    </div>
</template>

<script>
import loginApi from "../../api/login";
export default {
    data() {
        return {
            form:{
                username:'',
                password:''
            },
            rules:{
                username: [{ required: true, message: "请输入账号", trigger: "blur" }],
                password: [{ required: true, message: "请输入密码", trigger: "blur" }]
            }
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        onSubmit(formName){
            this.$refs[formName].validate(val=>{
                if(val){
                    console.log(this.form)
                    loginApi.login(this.form.username,this.form.password).then(response=>{
                        let res = response.data;
                        console.log(res)
                        localStorage.setItem("adminToken",res.data.remember_token)
                        if(res.code == 200){
                            console.log(111)
                            loginApi.getInfo().then(response=>{
                               let resUser = response.data;
                               console.log(resUser)
                               if(resUser.code==200){
                                    //将用户信息存储到本地
                                    localStorage.setItem("adminInfo",JSON.stringify(resUser.data))
                                    //将token存储到本地
                                    
                                    //跳转到首页
                                    this.$router.push("/");
                               }else{
                                   this.$message({
                                        duration : 1 * 1000,
                                        showClose: true,
                                        message: res.msg,
                                        type: 'warning'
                                   });
                               } 
                            })
                        }else{
                            this.$message({
                                duration : 1 * 1000,
                                showClose: true,
                                message: res.msg,
                                type: 'warning'
                            });
                            return false;
                        }
                    })
                }else{
                    console.log('error submit');
                    return false;
                }
            })
        }
    }
};
</script>

<style lang='scss' scoped>
.login-form{
    width: 350px;
    height: 300px;
    background: rgba(255,255,255,0.8);
    margin:0 auto;
    margin-top: 200px;
    border-radius: 20px;
    padding-right: 40px;
    img{
        width: 200px;
        display: block;
        margin: 0 auto;
    }
    h2{
        padding-top:20px;
        text-align: center;
    }
}
.login-container{
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    
}
</style>
