import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Styles/styles.css";
import "./Styles/footer.css";
import IngredientsPage from "./Pages/IngredientsPage.tsx";
import RecipesPage from "./Pages/RecipesPage.tsx";
import Login from "./Pages/login.tsx";
import Register from "./Pages/register.tsx";
import OurExpertPage from "./Pages/OurExpertPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/example",
    element: <div>this is example page</div>,
  },
  {
    path: "/recipes",
    element: <RecipesPage />,
  },
  {
    path: "/ingredients",
    element: <IngredientsPage />,
  },
  {
    path: "/experts",
    element: <OurExpertPage />,
  },
  {
    path: "/about-us",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
