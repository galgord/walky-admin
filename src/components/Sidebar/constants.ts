import insightsIcon from '../../assets/insights.png';
import markersIcon from '../../assets/markers.png';
import settingsIcon from '../../assets/settings.png';
import studentsIcon from '../../assets/students.png';

export const MENU_ITEMS = [
  {
    text: 'Insights',
    icon: insightsIcon,
    onClick: () => console.log('Insights'),
    linkTo: '/walky-admin/insights',
    index: 0,
  },
  {
    text: 'Students',
    icon: studentsIcon,
    onClick: () => console.log('Students'),
    linkTo: '/walky-admin/students',
    index: 1,
  },
  {
    text: 'Markers',
    icon: markersIcon,
    onClick: () => console.log('Markers'),
    linkTo: '/walky-admin/markers',
    index: 2,
  },
  {
    text: 'Settings',
    icon: settingsIcon,
    onClick: () => console.log('Settings'),
    linkTo: '/walky-admin/settings',
    index: 3,
  },
];