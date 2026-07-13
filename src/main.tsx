import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap";
/*import App from "./App.tsx";*/
import AboutMePage from "./pages/AboutMePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AboutMePage />
  </StrictMode>,
);
