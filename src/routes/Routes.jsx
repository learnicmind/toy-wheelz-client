import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import ToyTable from "../pages/ToyTable/ToyTable";
import ToyDetail from "../pages/ToyDetail/ToyDetail";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'addtoy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: 'alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: 'mytoys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'ToyTable',
                element: <ToyTable></ToyTable>
            },
            {
                path: '/toydetail/:id',
                element: <PrivateRoute><ToyDetail></ToyDetail></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-wheelz-server.vercel.app/alltoys/${params.id}`)
            },
            {
                path: '/updatetoy/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({params}) => fetch(`https://toy-wheelz-server.vercel.app/myToys/${params.id}`)
            }
        ]
    }
]);

export default router