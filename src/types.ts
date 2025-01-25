type Task = {
  id: string;
  name: string;
  isChecked: boolean;
  // date format is "YYYY-MM-DD"
  date: string;
};
type Tasks = Task[];

export type {Task, Tasks};