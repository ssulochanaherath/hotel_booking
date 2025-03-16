import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Login from "./pages/Login.tsx";
import {RootLayout} from "./components/RootLayout.tsx";
import Signup from "./pages/Signup.tsx";
import Home from "./pages/Home.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                { path: "/", element: <Login /> },
                { path: "/login", element: <Login /> },
                { path: "/signup", element: <Signup /> },
                { path: "/home", element: <Home /> },
            ],
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
