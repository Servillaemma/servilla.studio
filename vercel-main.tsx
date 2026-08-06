import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./app/page";
import AboutPage from "./app/a-propos/page";
import "./app/globals.css";

const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
const Page = normalizedPath === "/a-propos" ? AboutPage : Home;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
