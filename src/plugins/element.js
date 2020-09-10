import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {Form, FormItem} from "element-ui";
import {Input} from "element-ui";
import {Message} from "element-ui";
import {Container,Header,Aside,Main,Menu,Submenu,MenuItemGroup,MenuItem} from "element-ui";

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
Vue.prototype.$message = Message
