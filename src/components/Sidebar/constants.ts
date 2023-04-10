import insightsIcon from '../../assets/insights.png';
import markersIcon from '../../assets/markers.png';
import settingsIcon from '../../assets/settings.png';
import studentsIcon from '../../assets/students.png';
import { PAGES } from '../../routes/types';

export const MENU_ITEMS = [
  {
    text: 'Insights',
    icon: insightsIcon,
    onClick: () => console.log('Insights'),
    linkTo: PAGES.INSIGHTS,
    index: 0,
  },
  {
    text: 'Students',
    icon: studentsIcon,
    onClick: () => console.log('Students'),
    linkTo: PAGES.STUDENTS,
    index: 1,
  },
  {
    text: 'Markers',
    icon: markersIcon,
    onClick: () => console.log('Markers'),
    linkTo: PAGES.MARKERS,
    index: 2,
  },
  {
    text: 'Settings',
    icon: settingsIcon,
    onClick: () => console.log('Settings'),
    linkTo: PAGES.SETTINGS,
    index: 3,
  },
];