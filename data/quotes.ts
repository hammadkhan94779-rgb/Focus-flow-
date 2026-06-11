export const quotes = [
  { category: "Discipline", text: "Small promises kept daily become an identity you can trust.", author: "FocusFlow" },
  { category: "Productivity", text: "Clarity creates momentum; momentum creates confidence.", author: "FocusFlow" },
  { category: "Success", text: "The best plan is the one you return to after a hard day.", author: "FocusFlow" },
  { category: "Business", text: "Ship the smallest valuable thing, then make it excellent.", author: "FocusFlow" },
  { category: "Learning", text: "A focused hour compounds faster than a distracted day.", author: "FocusFlow" },
  { category: "Islamic", text: "Tie your camel, then trust Allah with the outcome.", author: "Proverb" },
  { category: "Discipline", text: "Consistency is quiet, but its results are loud.", author: "FocusFlow" },
  { category: "Success", text: "Win the morning, review the evening, repeat with mercy.", author: "FocusFlow" }
];

export function quoteOfTheDay() {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const day = Math.floor((Date.now() - start.getTime()) / 86400000);
  return quotes[day % quotes.length];
}
