import { Login, Register } from "./views";

const dashboardRoutes = [
    {
        path: "/register",
        name: "Register",
        component: Register,
        layout: "/auth",
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
        layout: "/auth",
    }
]

export default dashboardRoutes;