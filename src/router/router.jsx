import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import CoffeeDetails from "../components/CoffeeDetails";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import User from "../components/profile/User";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("https://coffee-store-server-two-omega.vercel.app/coffees"),
        Component: Home,
      },
      { path: "addCoffee", Component: AddCoffee },
      { 
        path: "updateCoffee/:id", 
        loader: ({params})=> fetch(`https://coffee-store-server-two-omega.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee
     },

      {path:'/coffee/:id', 
         loader: ({params})=> fetch(`https://coffee-store-server-two-omega.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {path:'/signin', Component:Login},
      {path:'/register', Component: Register},
      {
        path: '/users',
        loader:()=>fetch('https://coffee-store-server-two-omega.vercel.app/users'),
        Component: User,
      }

    ],
  },
]);
