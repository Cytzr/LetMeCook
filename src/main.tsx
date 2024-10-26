import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './Styles/styles.css'
import './Styles/footer.css'
import IngredientsPage from './Pages/IngredientsPage.tsx'
import RecipesPage from './Pages/RecipesPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/example",
    element: <div>this is example page</div>
  },
  {
    path: "/recipes",
    element: <RecipesPage />
  },
  {
    path: "/ingredients",
    element: <IngredientsPage />
  },
  {
    path: "/experts",
    element: <App />
  },
  {
    path: "/about-us",
    element: <App />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
