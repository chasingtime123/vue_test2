import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {Form, FormItem} from "element-ui";
import {Input} from "element-ui";
import {Message} from "element-ui";
import Validator from 'vue-validator'
import { MessageBox } from 'element-ui';
import {
    Container,Header,Aside,Main,Menu,
    Submenu,MenuItemGroup,MenuItem,
    Breadcrumb,BreadcrumbItem,Card,Row,Col,
    Table,TableColumn,Switch,Tooltip,Pagination,
    Dialog,Tag
} from "element-ui";

Vue.use(Element)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Validator)
Vue.use(Tag)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
