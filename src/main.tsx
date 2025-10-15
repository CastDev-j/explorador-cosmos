import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/app-router";
import "@/styles/index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#6366f1",
          colorBackground: "#0c0a09",
          colorInputBackground: "#1c1917",
          colorInputText: "#fafaf9",
          colorText: "#fafaf9",
          colorTextSecondary: "#a8a29e",
        },
      }}
    >
      <AppRouter />
    </ClerkProvider>
  </StrictMode>
);
