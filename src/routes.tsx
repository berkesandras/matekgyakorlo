import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/Main.layout";
import AdditionPage from "./pages/addition/Addition.page";

export default createBrowserRouter([
    {
        path: "/",
        element: (
                <MainLayout />
        ),
        children: [
            {
                element: <Navigate to="osszeadas" />,
                index: true,
            },
            {
                path: "osszeadas",
                element: <AdditionPage />,
            },
        ],
    },
]);