import logo from "./assets/images/favicon.webp";
import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Html from "./Components/Html";
import Css from "./Components/Css";
import "flowbite/dist/flowbite.min.js";
import "flowbite/dist/flowbite.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Colors from "./Components/Colors";
import Icons from "./Components/Icons";

const route = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "colors", element: <Colors /> },
      { path: "icons", element: <Icons /> },
      { path: "html", element: <Html /> },
      { path: "css", element: <Css /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
