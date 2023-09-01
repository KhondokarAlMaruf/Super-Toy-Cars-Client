import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Home/Main";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import NotFound from "./Components/NotFound/NotFound";
import AllToys from "./Components/AllToys/AllToys";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProviders from "./providers/AuthProviders";
import AddAToys from "./Components/AddAToys/AddAToys";
import MyToys from "./Components/MyToys/MyToys";
import ViewDetailsToy from "./Components/ShopCategory/ViewDetailsToy";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addatoys",
        element: <AddAToys></AddAToys>,
      },
      {
        path: "/mytoys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/view-details/:id",
        loader: ({ params }) =>
          fetch(`https://super-toy-cars-server.vercel.app/toys/${params.id}`),
        element: (
          <PrivateRoute>
            {" "}
            <ViewDetailsToy></ViewDetailsToy>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProviders>
  </React.StrictMode>
);
