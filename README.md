# FocusFlow

FocusFlow is an offline-first premium productivity operating system built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Chart.js, and browser storage.

## Features

- Landing page with premium responsive product preview
- Dashboard with daily tasks, habits, goals, focus time, productivity score, streaks, recent journal entries, and daily local quote
- Task manager with list, Kanban, calendar-style views, search, filters, priority/category/status editing, and completion tracking
- Pomodoro timer with focus, short break, long break, custom mode, circular progress, and session history
- Habit tracker with check-ins, streaks, completion rate, heatmap, and reminder time
- Goal planner with progress, milestones, deadlines, category, and priority
- Daily journal with reflection templates, mood tracking, and rich-text style free-writing areas
- Progress analytics powered by Chart.js visualizations
- Achievement system with XP, levels, badges, and progress
- Daily planner timeline with editable schedule blocks
- Settings for light, dark, AMOLED themes, local notifications preference, profile, language, and exports
- PWA manifest, install icons, service worker, offline cache, and background sync placeholder
- JSON, CSV, and PDF export flows

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```

All user data is stored locally in the browser via `localStorage`, so the app works without an external API or backend.
