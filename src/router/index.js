import { createRouter, createWebHistory } from 'vue-router'
import TestView from "@/views/Test/TestView";
import TableView from "@/views/Table/TableView";
import AddView from "@/views/Add/AddView";
import LoginView from "@/views/Login/LoginView";
import RegisterView from "@/views/Register/RegisterView";
import HomeView from "@/views/Home/HomeView";
import FirstTest from "@/views/Test/FirstTest";
import SecondTest from "@/views/Test/SecondTest";
import ThreedTest from "@/views/Test/ThreedTest";
import NotFoundPage from "@/views/NotFound/NotFoundPage";
import UpdateUser from "@/views/Update/UpdateUser";

const routes = [
  {
    path: '/',
    name:"Login",
    component: LoginView
  },
  {
    path: '/register',
    name:"Register",
    component: RegisterView
  },
  {
    path: '/home',
    name:'Home',
    component: HomeView,
    children:[
      {
        path:'/test',
        name:"Tests",
        component:TestView
      },
      {
        path:'/first-test',
        name:"First-test",
        component:FirstTest
      },
      {
        path:'/second-test',
        name:"Second-test",
        component:SecondTest
      },{
        path:'/threed-test',
        name:"Threed-test",
        component:ThreedTest
      },
      {
        path:'/table',
        name:"Table",
        component:TableView
      },
      {
        path:'/add',
        name:"AddUsers",
        component:AddView
      },
      {
        path:'/update/:id',
        name:"Update-User",
        component:UpdateUser
      },
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
