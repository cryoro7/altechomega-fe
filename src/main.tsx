import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Error from "./Error.tsx";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Pricing from "./pages/Pricing.tsx";
import Contact from "./pages/Contact.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
