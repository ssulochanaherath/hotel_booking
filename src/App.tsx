import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Login from "./pages/Login.tsx";
import {RootLayout} from "./components/RootLayout.tsx";
import Signup from "./pages/Signup.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                { path: "/", element: <Login /> },
                { path: "/signup", element: <Signup /> },
            ],
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
