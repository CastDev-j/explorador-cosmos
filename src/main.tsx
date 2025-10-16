import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/app-router";
import "@/styles/index.css";
import { Providers } from "./providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <AppRouter />
    </Providers>
  </StrictMode>
);
