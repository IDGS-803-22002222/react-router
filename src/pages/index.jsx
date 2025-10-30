import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import NotFound from "./NotFound";
import LayoutPublic from "../layout/LayoutPublic";

//creamos el router y su configuracion basica
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
