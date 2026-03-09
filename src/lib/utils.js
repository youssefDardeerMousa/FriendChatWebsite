export function formatMessageTime(date, now = new Date()) {
  const d = new Date(date);

  const diffMs = now.getTime() - d.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  const isSameDay = d.toDateString() === now.toDateString();
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = d.toDateString() === yesterday.toDateString();

  if (diffMinutes < 60) {
    if (diffMinutes < 1) return "Just now";
    if (diffMinutes === 1) return "1 minute ago";
    return `${diffMinutes} minutes ago`;
  }

  // رسائل اليوم: Today
  const timeString = d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  if (isSameDay) {
    return `Today, ${timeString}`;
  }

  // رسائل أمس: Yesterday
  if (isYesterday) {
    return `Yesterday, ${timeString}`;
  }

  // رسائل أقدم: day/month/year
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
