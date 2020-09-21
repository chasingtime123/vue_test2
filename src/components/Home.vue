<template>
        <el-container class="home-container">
            <!--头部区域-->
            <el-header>
                <div>
                    <img src="../assets/img/heima.png" alt="" />
                    <span>电商后台管理系统</span>
                </div>
                <el-button type="info" @click="logout">退出</el-button>
            </el-header>
            <!--主体区域-->
            <el-container>
                <!--侧边栏-->
                <el-aside :width="isCollapsed ? '64px' : '200px'">
                    <div class="toggle-button" @click="toggleClick"><i class="el-icon-menu"></i></div>
                    <!--侧边栏菜单区域-->
                    <!--用户管理--><!-- unique-opened是否只保持一个子菜单的展开-->
                    <el-menu background-color="#333744" text-color="#fff" :default-active="activePath"
                                       active-text-color="#409BFF" router
                                       unique-opened :collapse="isCollapsed"
                                       :collapse-transition="false" router  > <!--是否开启折叠动画-->

                    <!--一级菜单--><!--使用后台数据只需要写一个el-submenu，其它会循环出来-->
                    <el-submenu index="1"><!--获取后台数据：  :index="item.id + ''" v-for="item in menulist" :key="item.id"-->
                        <!--一级菜单的模板区域-->
                        <template slot="title">
                            <!--获取后台数据： -->
                            <!--<i :class="iconObj[item.id]"></i>-->
                            <i class="el-icon-user"></i>
                            <span>用户管理</span><!--获取后台数据:   {{subItem.authName}} -->
                        </template>
                        <!--二级菜单--><!--一级菜单的模板区域-->
                        <el-menu-item index="users" @click="saveNavState('/users')"><!--获取后台数据：    :index="'/' + subItem.path"  v-for="subItem in item.children" :key="subItem.id"-->
                            <template slot="title" width="190px">
                                <i class="el-icon-menu"></i>
                                <span>用户列表</span><!--获取后台数据:   {{subItem.authName}} -->
                            </template>
                        </el-menu-item>
                    </el-submenu>
                    </el-menu>
                    <!--权限管理-->
                    <el-menu background-color="#333744" text-color="#fff"
                             active-text-color="#409BFF" router
                             unique-opened :collapse="isCollapsed"
                             :collapse-transition="false">    <!--是否开启折叠动画-->
                        <el-submenu index="2"><!--获取后台数据：  :index="item.id + ''" v-for="item in menulist" :key="item.id"-->
                            <!--一级菜单的模板区域-->
                            <template slot="title">
                                <!--获取后台数据： -->
                                <!--<i :class="iconObj[item.id]"></i>-->
                                <i class="el-icon-s-cooperation"></i>
                                <span>权限管理</span><!--获取后台数据:   {{subItem.authName}} -->
                            </template>
                            <!--二级菜单--><!--一级菜单的模板区域-->
                            <el-menu-item index="roles"><!--获取后台数据：     :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id"-->
                                <template slot="title" width="190px">
                                    <i class="el-icon-menu"></i>
                                    <span>权限管理1</span><!--获取后台数据:   {{subItem.authName}} -->
                                </template>
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                    <!--商品管理-->
                    <el-menu background-color="#333744" text-color="#fff"
                             active-text-color="#409BFF" router
                             unique-opened :collapse="isCollapsed"
                             :collapse-transition="false">    <!--是否开启折叠动画-->
                        <el-submenu index="3"><!--获取后台数据：  :index="item.id + ''" v-for="item in menulist" :key="item.id"-->
                            <!--一级菜单的模板区域-->
                            <template slot="title">
                                <!--获取后台数据： -->
                                <!--<i :class="iconObj[item.id]"></i>-->
                                <i class="el-icon-s-shop"></i>
                                <span>商品管理</span><!--获取后台数据:   {{subItem.authName}} -->
                            </template>
                            <!--二级菜单--><!--一级菜单的模板区域-->
                            <el-menu-item index="2-5-2"><!--获取后台数据：     :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id"-->
                                <template slot="title" width="190px">
                                    <i class="el-icon-menu"></i>
                                    <span>商品管理1</span><!--获取后台数据:   {{subItem.authName}} -->
                                </template>
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                    <!--订单管理-->
                    <el-menu background-color="#333744" text-color="#fff"
                             active-text-color="#409BFF" router
                             unique-opened :collapse="isCollapsed"
                             :collapse-transition="false">    <!--是否开启折叠动画-->
                        <el-submenu index="4"><!--获取后台数据：  :index="item.id + ''" v-for="item in menulist" :key="item.id"-->
                            <!--一级菜单的模板区域-->
                            <template slot="title">
                                <!--获取后台数据： -->
                                <!--<i :class="iconObj[item.id]"></i>-->
                                <i class="el-icon-s-order"></i>
                                <span>订单管理</span><!--获取后台数据:   {{subItem.authName}} -->
                            </template>
                            <!--二级菜单--><!--一级菜单的模板区域-->
                            <el-menu-item index="2-5-2"><!--获取后台数据：     :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id"-->
                                <template slot="title" width="190px">
                                    <i class="el-icon-menu"></i>
                                    <span>订单管理11</span><!--获取后台数据:   {{subItem.authName}} -->
                                </template>
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                    <!--数据统计-->
                    <el-menu background-color="#333744" text-color="#fff"
                             active-text-color="#409BFF" router
                             unique-opened :collapse="isCollapsed"
                             :collapse-transition="false">    <!--是否开启折叠动画-->
                        <el-submenu index="5"><!--获取后台数据：  :index="item.id + ''" v-for="item in menulist" :key="item.id"-->
                            <!--一级菜单的模板区域-->
                            <template slot="title">
                                <!--获取后台数据： -->
                                <!--<i :class="iconObj[item.id]"></i>-->
                                <i class="el-icon-s-data"></i>
                                <span>数据统计</span><!--获取后台数据:   {{subItem.authName}} -->
                            </template>
                            <!--二级菜单--><!--一级菜单的模板区域-->
                            <el-menu-item index="2-5-2"><!--获取后台数据：     :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id"-->
                                <template slot="title" width="190px">
                                    <i class="el-icon-menu"></i>
                                    <span>数据统计1</span><!--获取后台数据:   {{subItem.authName}} -->
                                </template>
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <!--右侧内容主体-->
                <el-main>
                    <!--路由占位符-->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>

</template>

<script>
    export default {
        data(){
            return{
                //左侧菜单数据
                menulist:[],
                iconObj:{
                    '125':'iconfont icon-user',
                    '103':'iconfont icon-tijikongjian',
                    '101':'iconfont icon-shangpin',
                    '102':'iconfont icon-danju',
                    '145':'iconfont icon-baobiao'
                },
                //是否折叠
                isCollapsed:false,
                //被激活的链接地址
                activePath: ''
            }
        },
        created(){
            this.getMenuList();
            this.activePath = window.sessionStorage.getItem('activePath')
        },
        methods:{
        logout(){
        window.sessionStorage.clear();  //清空token之后跳转到登录页面
        this.$router.push('/login')
        },
            //获取所有的菜单
            async getMenuList(){
            const {data : res} = await this.$http.get('menus')
                if(res.meta.status != 200) return this.$message.error(res.meta.msg)
                this.menulist = res.data
                console.log(res)
            },
            //点击按钮，切换菜单的折叠与展开
            toggleClick(){
                this.isCollapsed = !this.isCollapsed
            },
            //保存链接的激活状态
            saveNavState(activePath){
                window.sessionStorage.setItem('activePath',activePath)
                this.activePath = activePath;
            }
    }
    };
</script>

<style lang="less" scoped>
    .home-container{
        height:100%;
    }
    .el-header {
        background-color: #373D41;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        color: #fffdef;
        font-size: 20px;
        > div {
            display: flex;
            align-items: center;
            span{
                margin-left:15px;
            }
        }
    }
    .el-aside{
        background-color:#333744;
        .el-menu{
            border-right:none;
        }

    }
    .el-main{
        background-color:#fff;
    }
    .toggle-button {
        background-color: #4A5064;
        color: white;
        font-size: 25px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.2em;
        cursor: pointer;
    }

</style>
