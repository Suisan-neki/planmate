import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppShell from '@/app/AppShell'
import routes from '@/app/routes'
import SplashScreen from '@/pages/splash'
import Onboarding from '@/pages/onboarding'
import SignUp from '@/pages/auth/signup'
import ForgotPassword from '@/pages/auth/forgot'
import ResetPassword from '@/pages/auth/reset'
import ProfileSetting from '@/pages/profile'
import EventPlanningView from '@/pages/events/planning'
import EventAfterView from '@/pages/events/after'
import QuickPlanner from '@/pages/quick-planner'
import '@/styles/tailwind.css'
import '@/styles/tokens.css'
import '@/styles/common.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: routes,
  },
  { path: '/splash', element: <SplashScreen /> },
  { path: '/onboarding', element: <Onboarding /> },
  { path: '/auth/signup', element: <SignUp /> },
  { path: '/auth/forgot', element: <ForgotPassword /> },
  { path: '/auth/reset', element: <ResetPassword /> },
  { path: '/profile', element: <ProfileSetting /> },
  { path: '/events/planning', element: <EventPlanningView /> },
  { path: '/events/after', element: <EventAfterView /> },
  { path: '/quick-planner', element: <QuickPlanner /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
