import type { RouteObject } from 'react-router-dom'
import HomePage from '@/pages/home'
import TasksPage from '@/pages/tasks'
import CalendarPage from '@/pages/calendar'
import SettingsPage from '@/pages/settings'

const routes: RouteObject[] = [
  { index: true, element: <HomePage /> },
  { path: 'tasks', element: <TasksPage /> },
  { path: 'calendar', element: <CalendarPage /> },
  { path: 'settings', element: <SettingsPage /> },
]
export default routes
