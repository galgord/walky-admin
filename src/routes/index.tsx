import { createBrowserRouter } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Markers from '../pages/Markers';
import Settings from '../pages/Settings';
import Students from '../pages/Students';
import Insights from './Insights';
import { PAGES } from './types';

export const router = createBrowserRouter([
  {
    path: "/walky-admin/",
    element: <Sidebar/>,
    children: [
      {
        path: PAGES.INSIGHTS,
        element: <Insights />,
      },
      {
        path: PAGES.MARKERS,
        element: <Markers />,
      },
      {
        path: PAGES.SETTINGS,
        element: <Settings />,
      },
      {
        path: PAGES.STUDENTS,
        element: <Students />,
      },
    ],
  },
  
]);