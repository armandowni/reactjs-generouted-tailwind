import { Routes } from "@generouted/react-router";
import { NextUIProvider } from "@nextui-org/react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <Routes />
  </NextUIProvider>
);
