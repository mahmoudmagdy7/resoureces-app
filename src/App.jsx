import logo from "./assets/images/favicon.webp";
import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./Conponents/Layout";
import Home from "./Conponents/Home";
import "flowbite/dist/flowbite.min.js";
import "flowbite/dist/flowbite.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Colors from "./Conponents/Colors";
import Icons from "./Conponents/Icons";

const route = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "colors", element: <Colors /> },
      { path: "icons", element: <Icons /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
