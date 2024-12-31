/* eslint-disable prettier/prettier */
import "./utils/translate";
import "@/assets/css/global.css";
import { routes } from "@generouted/react-router/lazy";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

window.global = window;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={createBrowserRouter(routes)} />
);
