import Menu from "@/pages/Menu";
import {createRouter, createWebHistory} from "vue-router";
import EmployeePage from "@/pages/EmployeePage";
import PostPage from "@/pages/PostPage";
import TablePage from "@/pages/TablePage";

const routes = [
    {
        path: '/',
        component: Menu
    },
    {
        path: '/employee',
        component: EmployeePage
    },
    {
        path: '/post',
        component: PostPage
    },
    {
        path: '/table',
        component: TablePage
    }
]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
export default router