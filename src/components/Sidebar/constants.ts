import insightsIcon from '../../assets/insights.png';
import markersIcon from '../../assets/markers.png';
import settingsIcon from '../../assets/settings.png';
import studentsIcon from '../../assets/students.png';

export const MENU_ITEMS = [
  {
    text: 'Insights',
    icon: insightsIcon,
    onClick: () => console.log('Insights'),
  },
  {
    text: 'Students',
    icon: studentsIcon,
    onClick: () => console.log('Students'),
  },
  {
    text: 'Markers',
    icon: markersIcon,
    onClick: () => console.log('Markers'),
  },
  {
    text: 'Settings',
    icon: settingsIcon,
    onClick: () => console.log('Settings'),
  },
];