import { useRoutes } from 'react-router-dom';

import { lazy } from 'react';

import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    }
  ]
};

export default function ThemeRoutes() {
  return useRoutes([MainRoutes]);
}
