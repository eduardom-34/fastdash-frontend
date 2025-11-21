import { createBrowserRouter } from "react-router";
import DashboardBuilder from "./pages/DashboardBuilder";
import { Toaster } from "sonner";

const Layout = () => (
    <>
        <DashboardBuilder />
        <Toaster 
            position="top-right"
            richColors
            closeButton
            duration={5000}
        />
    </>
);

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Layout />,
            },
        ],
    },
])