import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Recipes from './Recipes.jsx'
import Root from "./routes/Root"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RecipeDetails from './RecipeDetails.jsx'
import Home from './Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[ {
      path: "/",
      element: <Home />
    },
    {
      path: "/recipes",
      element: <Recipes/>
    },
    {
      path: "/recipes/:id",
      element: <RecipeDetails/>
    }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
