import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <div>404</div>,
        children: [
            {
                index: true,
                Component: HomePage
            }
        ]
    },
]);