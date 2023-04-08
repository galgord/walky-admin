import { Column, Data } from './types';


export const columns: Column[] = [
  { id: 'identifier', label: 'Identifier', minWidth: 170 },
  { id: 'created', label: 'Created', minWidth: 100 },
  {
    id: 'lastSignIn',
    label: 'Last Sign-In',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'isActive',
    label: 'Is Active',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'studentId',
    label: 'Student-ID',
    minWidth: 170,
    align: 'right',
  },
];


function createData(
  identifier: string,
  created: string,
  lastSignIn: string,
  isActive: boolean,
  studentId: number,
): Data {
  return { identifier, created, lastSignIn, isActive, studentId };
}

export const rows = [
  createData('example@example.com', 'last week', '1min ago', true, 3287263),
  createData('example1@example.com', 'last week', '13min ago', true, 3287263),
  createData('example2@example.com', 'last week', '50min ago', true, 3287263),
  createData('example3@example.com', 'last week', '40min ago', true, 3287263),
  createData('example4@example.com', 'last week', '1min ago', true, 3287263),
  createData('example5@example.com', 'last week', '10min ago', true, 3287263),
  createData('example6@example.com', 'last week', '10min ago', true, 3287263),
  createData('example7@example.com', 'last week', '10min ago', true, 3287263),
  createData('example8@example.com', 'last week', '50min ago', true, 3287263),
  createData('example9@example.com', 'last week', '30min ago', true, 3287263),
  createData('example10@example.com', 'last week', '12min ago', true, 3287263),
  createData('example11@example.com', 'last week', '16min ago', true, 3287263),
  createData('example12@example.com', 'last week', '24min ago', true, 3287263),
  createData('example13@example.com', 'last week', '15min ago', true, 3287263),
  createData('example14@example.com', 'last week', '1min ago', true, 3287263),

];

export const tableCellStyles = {
  fontSize: '18px',
  color: 'rgb(80, 102, 163)',
  borderBottom: '2px solid rgb(80, 102, 163)',
};