import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import CoffeeDetails from "../components/CoffeeDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      { path: "addCoffee", Component: AddCoffee },
      { 
        path: "updateCoffee/:id", 
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee
     },

      {path:'/coffee/:id', 
         loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails,
      }
    ],
  },
]);
