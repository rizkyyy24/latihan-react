import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProductPage from "./pages/products";
import ProfilePage from "./pages/profile";
import DetailPage from "./pages/detailpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 className="text-3xl font-bold underline">Hello World</h1>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "products/:id",
    element: <DetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
