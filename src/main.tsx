import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Styles/styles.css';
import './Styles/footer.css';
import IngredientsPage from './Pages/IngredientsPage.tsx';
import RecipesPage from './Pages/RecipesPage.tsx';
import Login from './Pages/login.tsx';
import Register from './Pages/register.tsx';
import Home from './Pages/home.tsx';
import CreateRecipe from './Pages/CreateRecipe.tsx';
import OurExpertPage from "./Pages/OurExpertPage.tsx";
import LikedRecipe from './Pages/likedRecipe.tsx';
import MyRecipe from './Pages/myRecipe.tsx';
import RecipeDetail from './Pages/RecipeDetail.tsx';
import ExpertDetail from './Pages/ExpertDetail.tsx';
import PremiumPage from './Pages/PremiumPage.tsx';
import BMICalculator from './Pages/BMICalculatorPage.tsx';
import {initializeFirebaseMessaging} from "../firebase-messaging-sw.tsx";

// Setup Firebase Messaging
initializeFirebaseMessaging()
    .then(() => {
      console.log("Firebase Messaging initialized successfully.");
    })
    .catch((error) => {
      console.error("Error initializing Firebase Messaging: ", error);
    });


// Setup React Router
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/recipes", element: <RecipesPage /> },
  { path: "/ingredients", element: <IngredientsPage /> },
  { path: "/create-recipe", element: <CreateRecipe /> },
  { path: "/experts", element: <OurExpertPage /> },
  { path: "/bmi-calculator", element: <BMICalculator /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/home", element: <Home /> },
  { path: "/recipe-detail/:recipeId", element: <RecipeDetail /> },
  { path: "/saved-menu", element: <LikedRecipe /> },
  { path: "/my-recipe", element: <MyRecipe /> },
  { path: "/expert-detail/:expertId", element: <ExpertDetail /> },
  { path: "/premium", element: <PremiumPage /> },
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
