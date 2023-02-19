import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup ";
import Dashboard from "../../pages/dashBoard/Dashboard";
import Home from "../../pages/home/Home";
import ProductAdd from "../../pages/product/ProductAdd";
import ProductEdit from "../../pages/product/ProductEdit";
import ProductList from "../../pages/product/ProductList";
import ProductView from "../../pages/product/ProductView";
import Profile from "../../pages/profile/Profile";

export const routes = [
  {
    layout: "adminpages",
    pages: [
      {
        name: "dashboard",
        path: "/",
        element: <Dashboard />,
        isPrivate: true,
      },
      {
        name: "create product",
        path: "/createproduct",
        element: <ProductAdd />,
        isPrivate: true,
      },
      {
        name: "edit product",
        path: "/editproduct/:id",
        element: <ProductEdit />,
        isPrivate: true,
      },
      {
        name: "list product",
        path: "/listproduct",
        element: <ProductList />,
        isPrivate: true,
      },
      // {
      //   name: "home",
      //   path: "/*",
      //   element: <Home />,
      //   isPrivate: false,
      // },
      {
        name: "profile",
        path: "/profile",
        element: <Profile />,
        isPrivate: true,
      },
      {
        name: "productlist",
        path: "/productlist",
        element: <ProductList />,
        isPrivate: true,
      },
      {
        name: "productview",
        path: "/productview",
        element: <ProductView />,
        isPrivate: true,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        name: "sign in",
        path: "/signin",
        element: <Login />,
      },
      {
        name: "sign in",
        path: "/*",
        element: <Login />,
      },
      {
        name: "sign up",
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
];
