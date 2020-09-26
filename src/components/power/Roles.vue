<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>角色列表</el-breadcrumb-item>
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        </el-breadcrumb>

        <!--卡片视图-->
        <el-card>
            <el-row>
                <el-col>
                    <el-button type="primary">添加角色</el-button>
                </el-col>
            </el-row>

          <!--  角色列表区域-->
            <el-table :data="roleList" border stripe>
                <el-table-column  type="expand"></el-table-column>
                <el-table-column label="#" type="index"></el-table-column>
                <el-table-column label="角色名称" prop="roleName"></el-table-column>
                <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
                <el-table-column label="操作" width="300px">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
                        <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
                        <el-button size="mini" type="warning" icon="el-icon-setting">分配权限</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>

        <!--添加角色的对话框-->
        <el-dialog
                title="添加角色"
                :visible.sync="addDialogRoles"
                width="30%" @close="addDialogClosed">
            <el-form :model="editForm" :rules="addDialogRoles" ref="addFormRef" label-width="70px">
                <el-form-item label="角色名称">
                    <el-input v-model="addForm.roleName" disabled></el-input>
                </el-form-item>
                <el-form-item label="角色描述">
                    <el-input v-model="addForm.roleDesc" disabled></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="addDialogRoles = false">取 消</el-button>
            <el-button type="primary" @click="addRolesInfo">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                //所有角色列表数据
                roleList:[
                    {roleName:"老张",roleDesc:"laozhang"},
                    {roleName:"毛狗",roleDesc:"maogou"},
                    {roleName:"贺狗",roleDesc:"hegou"},
                    {roleName:"灿狗",roleDesc:"cangou"},
                    {roleName:"丁狗",roleDesc:"dinggou"}
                ],
                addDialogRoles:false
            }
        },
        created() {
            this.getRolesList()
        },
        method:{
            //获取所有角色的列表
            async getRolesList(){
               const {data : res} =await this.$http.get('roles')
                if(res.meta.status != 200){
                    return this.$message.error('获取角色列表失败')
                }
                this.roleList = res.data
            },
            //监听添加角色对话框的关闭事件
            addDialogClosed(){
                this.$refs.addFormRef.resetFields()
            },
            //添加角色
            editUserInfo(){
                this.$refs.addFormRef.validator(async valid =>{
                    if(!valid) return
                    //发起添加角色信息的数据请求
                    this.$http.post('user')
                })
            }

        }
    }
</script>

<style lang="less" scoped>

</style>
