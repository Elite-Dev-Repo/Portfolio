import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Error from "./components/Error.jsx";
import Project from "./components/Project.jsx";
import Who from "./Who.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/who-is-elite-dev",
    element: <Who />,
  },
  {
    path: "/project/:id",
    element: <Project />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
