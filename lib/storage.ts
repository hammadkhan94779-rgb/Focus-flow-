import { FocusFlowData } from "./types";

const today = new Date().toISOString().slice(0, 10);
const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);

export const defaultData: FocusFlowData = {
  tasks: [
    { id: "task-1", title: "Plan the day", description: "Pick three high-impact outcomes.", priority: "High", category: "Work", dueDate: today, status: "In Progress", createdAt: today },
    { id: "task-2", title: "Deep work session", description: "90 minutes on the most important project.", priority: "High", category: "Business", dueDate: today, status: "Todo", createdAt: today },
    { id: "task-3", title: "Evening review", description: "Close loops and write tomorrow's plan.", priority: "Medium", category: "Personal", dueDate: today, status: "Todo", createdAt: today }
  ],
  habits: [
    { id: "habit-1", name: "Exercise", icon: "🏃", frequency: "Daily", reminderTime: "06:30", completions: [today], longestStreak: 5 },
    { id: "habit-2", name: "Read Quran", icon: "📖", frequency: "Daily", reminderTime: "07:00", completions: [], longestStreak: 12 },
    { id: "habit-3", name: "Drink Water", icon: "💧", frequency: "Daily", reminderTime: "09:00", completions: [today], longestStreak: 9 }
  ],
  goals: [
    { id: "goal-1", title: "Launch Startup", description: "Validate, build, and ship the first paid version.", deadline: tomorrow, priority: "High", category: "Business", targetProgress: 60, milestones: [ { id: "m1", title: "Landing page", done: true }, { id: "m2", title: "MVP", done: true }, { id: "m3", title: "First customer", done: false } ] },
    { id: "goal-2", title: "Read 20 Books", description: "Build a deliberate reading system.", deadline: tomorrow, priority: "Medium", category: "Learning", targetProgress: 35, milestones: [ { id: "m4", title: "Book list", done: true }, { id: "m5", title: "10 books", done: false } ] }
  ],
  journals: [
    { id: "journal-1", date: today, template: "Daily Reflection", wins: "Protected focus time", challenges: "Too many tabs", lessons: "Prepare the workspace first", mood: "Focused", tomorrow: "Start with one deep block", body: "A strong day begins with fewer decisions and a clear first task." }
  ],
  focusHistory: [
    { id: "focus-1", mode: "Focus", minutes: 25, completedAt: today },
    { id: "focus-2", mode: "Focus", minutes: 25, completedAt: today }
  ],
  planner: [
    { id: "plan-1", time: "06:00", title: "Exercise", category: "Health" },
    { id: "plan-2", time: "08:00", title: "Study", category: "Learning" },
    { id: "plan-3", time: "10:00", title: "Deep Work", category: "Work" },
    { id: "plan-4", time: "21:00", title: "Journal", category: "Personal" }
  ],
  settings: { theme: "light", notifications: true, language: "English", profileName: "Focus Builder", dailyFocusGoal: 120 },
  xp: 420
};

export const STORAGE_KEY = "focusflow:v1";

export function loadData(): FocusFlowData {
  if (typeof window === "undefined") return defaultData;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData;
    return { ...defaultData, ...JSON.parse(raw) };
  } catch {
    return defaultData;
  }
}

export function saveData(data: FocusFlowData) {
  if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function uid(prefix: string) {
  return `${prefix}-${crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36)}`;
}
