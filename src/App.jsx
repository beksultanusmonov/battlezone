import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'
import HomeLayout from './layouts/HomeLayout'
import MainLayout from './layouts/MainLayout'
import HomePage from "./pages/HomePage";
import BattlePage from "./pages/BattlePage";
import CustomBattlePage from "./pages/CustomBattlePage";
import CreateBattle from "./pages/CreateBattle";
import ProfilePage from "./pages/ProfilePage";

function App() {
  // toast.success('ishladi')
  document.body.style="bg-base-300"
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />
    },
    {
      path: '/accaunt',
      element: <RegisterLayout />
    },
    {
      path: '/main',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'battles',
          element: <BattlePage />
        },
        {
          path: 'custom-battles',
          element: <CustomBattlePage />
        },
        {
          path: 'create-battle',
          element: <CreateBattle />
        },
        {
          path: 'profile',
          element: <ProfilePage />
        }
      ]
    }
  ])
  return <RouterProvider router={routes} />
}

export default App
