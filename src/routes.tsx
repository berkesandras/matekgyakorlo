import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/Main.layout";
import MainPage from "./pages/main/Main.page";
import AdditionPage from "./pages/addition/Addition.page";
import SubstractionGame from "./pages/substraction/Substraction.page";

export default createBrowserRouter([
    {
        path: "/",
        element: (
                <MainLayout />
        ),
        children: [
            {
                path: "",
                element: <Navigate to="/main" />,
                index: true,
            },
            {
                path: "main",
                element: <MainPage />,
            },
            {
                path: "osszeadas",
                element: <AdditionPage />,
            },
            {
                path: "kivonas",
                element: <SubstractionGame />,
            },
        ],
    },
]);