import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";

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
            }
        ]
    }
]);

export default router