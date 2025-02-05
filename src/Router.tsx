import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@/App.tsx";
import Home from "@/pages/Home.tsx";
import Manifesto from "@/pages/Manifesto";
import How from "@/pages/How.tsx";
import Artist from "@/pages/Artist";
import Labels from "@/pages/Labels.tsx";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Not found</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/manifesto",
        element: <Manifesto />,
      },
      {
        path: "/how-it-works",
        element: <How />,
      },
      {
        path: "/artist",
        element: <Artist />,
      },
      {
        path: "/labels",
        element: <Labels />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
