export type Priority = "High" | "Medium" | "Low";
export type TaskStatus = "Todo" | "In Progress" | "Done";
export type ThemeMode = "light" | "dark" | "amoled";

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  category: string;
  dueDate: string;
  status: TaskStatus;
  createdAt: string;
};

export type Habit = {
  id: string;
  name: string;
  icon: string;
  frequency: string;
  reminderTime: string;
  completions: string[];
  longestStreak: number;
};

export type Goal = {
  id: string;
  title: string;
  description: string;
  deadline: string;
  priority: Priority;
  category: string;
  targetProgress: number;
  milestones: { id: string; title: string; done: boolean }[];
};

export type JournalEntry = {
  id: string;
  date: string;
  template: string;
  wins: string;
  challenges: string;
  lessons: string;
  mood: string;
  tomorrow: string;
  body: string;
};

export type FocusSession = {
  id: string;
  mode: string;
  minutes: number;
  completedAt: string;
};

export type PlannerBlock = {
  id: string;
  time: string;
  title: string;
  category: string;
};

export type Settings = {
  theme: ThemeMode;
  notifications: boolean;
  language: string;
  profileName: string;
  dailyFocusGoal: number;
};

export type FocusFlowData = {
  tasks: Task[];
  habits: Habit[];
  goals: Goal[];
  journals: JournalEntry[];
  focusHistory: FocusSession[];
  planner: PlannerBlock[];
  settings: Settings;
  xp: number;
};
