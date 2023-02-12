import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/personajes";
import { Personajes } from "../layouts/";
import { Favoritos } from "../pages/favoritos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Personajes />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "favoritos",
        element: <Favoritos />,
      },
    ],
  },
]);
