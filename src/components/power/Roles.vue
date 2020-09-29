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
                    <el-button type="primary" @click="addDialogVisible = true">添加角色</el-button>
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
                        <el-button size="mini" type="primary"
                                   icon="el-icon-edit" @click="editDialogVisible = true">编辑</el-button><!--@click="EditDialog(scope.row.id)"-->
                        <el-button size="mini" type="danger"
                                   icon="el-icon-delete" @click="removeRolesByID">删除</el-button><!--@click="removeDialog(scope.row.id)"-->
                        <el-button size="mini" type="warning" icon="el-icon-setting" @click="">分配权限</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>

        <!--添加角色的对话框-->
        <el-dialog
                title="添加角色"
                :visible.sync="addDialogVisible"
                width="30%" @close="addDialogClosed">
           <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
                <el-form-item label="角色名称" prop="roleName">
                    <el-input v-model="addForm.roleName"></el-input>
                </el-form-item>
            </el-form>
            <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
                <el-form-item label="角色描述" prop="roleDesc">
                    <el-input v-model="addForm.roleDesc"></el-input>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="addDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addRolesInfo">确 定</el-button>
            </span>
        </el-dialog>


        <!--修改用户对话框-->
        <el-dialog
                title="修改角色"
                :visible.sync="editDialogVisible"
                width="30%" @close="editDialogClosed">
            <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px">
                <el-form-item label="角色名称" prop="roleName">
                    <el-input v-model="editForm.roleName"></el-input>
                </el-form-item>
            </el-form>
            <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px">
                <el-form-item label="角色描述" prop="roleDesc">
                    <el-input v-model="editForm.roleDesc"></el-input>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="editDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="editRolesInfo">确 定</el-button>
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
                addDialogVisible:false,
                editDialogVisible:false,
                //添加角色的验证规则对象
                addFormRules:{
                    roleName:[

                    ],
                    roleDesc:[

                    ]
                },
                addForm:{
                    roleName:'',
                    roleDesc:''
                },
                editForm:{

                },
                editRolesInfo:''
            }
        },
        created() {
            this.getRolesList()
        },
        methods:{

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
            addRolesInfo(){
                this.$refs.addFormRef.validator(async valid =>{
                    if(!valid) return
                    //发起添加角色信息的数据请求
                    const {data: res} = await this.$http.post('roles', this.addForm);
                    if(res.meta.status != 201){
                        this.$message.error('添加角色失败')
                    }else{
                        this.$message.success('添加角色成功！')
                        this.addDialogVisible = false
                        this.roleList = res.data
                    }

                })
            },
            //监听修改角色对话框的关闭事件
            editDialogClosed(){
                this.$refs.editFormRef.resetFields()
            },
            editRolesInfo(){
                //修改角色信息并提交
                this.$refs.editFormRef.validate(async valid => {
                    if(!valid) return
                    //发起修改角色信息的数据请求
                    const{data:res} = await  this.$http.put('roles/' + this.editForm.id,{
                        roleName:this.editForm.roleName,
                        roleDesc:this.editForm.roleDesc
                    })
                    if(res.meta.status != 200){
                        return this.$message.error('更新角色信息失败')
                    }
                    //关闭对话框
                    this.editDialogVisible = false
                    //刷新数据列表
                    this.roleList = res.data
                    this.$message.success('更新角色信息成功')
                })
            },
            //根据Id删除对应角色信息
                async removeRolesByID(id){
                    //弹框提示是否删除
                    const confirmResult = await this.$confirm(
                        '此操作将永久删除该角色, 是否继续?', '提示',
                        {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }
                    ).catch(err => err)
                        if(confirmResult != 'confirm'){
                            return this.$message.info('已经取消删除')
                        }
                        const{data:res} = await  this.$http.delete('roles/' + id)
                        if(res.meta.status != 200){
                            return this.$message.error('删除失败！')
                        }
                        this.$message.success('删除成功！')
                        //刷新数据列表
                        this.roleList = res.data
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
