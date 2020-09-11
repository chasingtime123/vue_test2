<template>
    <div class="login_container">
        <div class="login_box">
            <!--头像-->
            <div class="avatar_box">
                <img src="../assets/img/totos.jpg" alt="">
            </div>
            <!--登录-->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules"
                     label-width="0px" class="login_form">
                <!--用户名-->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password"
                              prefix-icon="iconfont icon-3702mima"></el-input>
                </el-form-item>
                <!--登录-->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login" plain>登录</el-button>
                    <el-button @click="resetLoginForm" type="info" plain>重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                //这是登录表单的数据绑定
                loginForm :{
                    username:'',
                    password:''
                },
                //表单验证规则对象
                loginFormRules: {
                    username:[
                        { required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods:{
                //点击重置按钮，重置登录表单
                resetLoginForm() {
                //console.log(this);
                this.$refs.loginFormRef.resetFields();
            },
            login(){
                /*this.$refs.loginFormRef.validate(async valid => {
                    if(!valid) return;
                    const { data: result } = await this.$http.post('login', this.loginForm)
                    if(result.meta.status !== 200) return this.$message.error('登录失败')
                    this.$message.success('登录成功')
                    console.log(result + "=====================");
                    //将登录成功之后的token，保存到客户端的sessionStorage中
                    //项目中出了登录之外的其他api接口，必须在登录之后才能访问
                    //token只应在当前网站打开期间生效，所以将token保存在sessionStorage中
                    console.log(result);
                    window.sessionStorage.setItem('token',result.data.token);
                    //通过编程式导航跳转到后台主页，路由地址是  /home
                    this.$router.push('/home');
                });*/
                this.$router.push('/home');
            }
        }
    }
</script>

<style lang="less" scoped>

    .login_container {
        background-image: url("../assets/img/grils.jpg");
        height: 100%;
    }
    .login_box {
        width: 450px;
        height: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform:translate(-50%,-50%);
        border-radius: 5%;

        .avatar_box {
            height: 130px;
            width: 130px;
            border: 1px solid #eee;
            border-radius: 100%;
            padding: 0px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform:translate(-50%,-50%);
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
    }

    .btns{
        display: flex;
        justify-content: flex-end;
    }

    .login_form{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }

</style>
