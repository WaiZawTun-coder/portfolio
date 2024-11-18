export default function getUTC(time: {
  year: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
}) {
  const date = new Date();
  const current = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes()
  );
  const posted_time = Date.UTC(
    time.year,
    time.month,
    time.date,
    time.hour,
    time.minute
  );
  return humanDiff(posted_time, current);
}

function humanDiff(posted_time: number, current_time: number) {
  const diff =
      Math.max(posted_time, current_time) - Math.min(posted_time, current_time),
    SEC = 1000,
    MIN = SEC * 60,
    HRS = MIN * 60;

  const hrs = Math.floor(diff / HRS),
    min = Math.floor((diff % HRS) / MIN);
  if (hrs < 0) return min + " minute" + (min > 1 ? "s " : " ");
  else if (hrs < 24) return hrs + "h";
  else if (hrs < 168) return Math.floor(hrs / 24) + " d";
  else
    return new Date(posted_time).toLocaleString("default", {
      timeZone: "UTC",
      year: "numeric",
      month: "long",
      day: "2-digit",
      // hour12: false,
      // minute: "numeric",
    });
}
