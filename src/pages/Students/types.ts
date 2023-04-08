export interface Column {
  id: 'identifier' | 'created' | 'lastSignIn' | 'isActive' | 'studentId';
  label: string;
  minWidth?: number;
  align?: 'right';
}

export interface Data {
  identifier: string;
  created: string;
  lastSignIn: string;
  isActive: string;
  studentId: number;
}
