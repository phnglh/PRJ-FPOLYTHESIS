import { Link, Navigate, useRoutes } from "react-router-dom";
import { HomePage } from "./home";
import { CollectionPage } from "./collection";

export function AppRoutes() {
    return useRoutes([
        {
            index: true,
            element: <Navigate replace to="/home" />,
        },
        {
            path: "/home",
            element: <HomePage />,
        },
        {
            path: "/collection",
            element: <CollectionPage />,
        },
        {
            path: "/contact",
            element: (
                <div>
                    <p>Contact page content</p>
                    <Link to="/collection">Collection</Link>
                </div>
            ),
        },
    ]);
}
