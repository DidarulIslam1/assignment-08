import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import CardDetails from "../CardDetails/CardDetails";
import ErrorPage from "../ErrorPage/ErrorPage";


const myCreateRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('data.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/card/:id',
                element: <CardDetails></CardDetails>,
                loader: () => fetch('/data.json')
            }
        ]
    }
]);
export default myCreateRouter;