import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './Styles/styles.css'
import './Styles/footer.css'
import IngredientsPage from './Pages/IngredientsPage.tsx'
import RecipesPage from './Pages/RecipesPage.tsx'
import Login from './Pages/login.tsx'
import Register from './Pages/register.tsx'
import Home from './Pages/home.tsx'
import CreateRecipe from './Pages/CreateRecipe.tsx'
import OurExpertPage from "./Pages/OurExpertPage.tsx";import LikedRecipe from './Pages/likedRecipe.tsx'
import MyRecipe from './Pages/myRecipe.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/example",
    element: <div>this is example page</div>
  },
  {
    path: "/recipes",
    element: <RecipesPage />,
  },
  {
    path: "/ingredients",
    element: <IngredientsPage />
  },
  {
    path: "/create-recipe",
    element: <CreateRecipe />
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
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/user-id/saved-menu",
    element: <LikedRecipe />
  },
  {
    path: "/myRecipe", 
    element: <MyRecipe/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
