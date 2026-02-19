function getNYParts(date = new Date()) {
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZoneName: "short", // EST or EDT
  });

  const parts = {};
  for (const p of fmt.formatToParts(date)) parts[p.type] = p.value;
  return parts;
}

export function nyStamp(date = new Date()) {
  const p = getNYParts(date);
  return `${p.year}${p.month}${p.day}_${p.hour}${p.minute}${p.second}`;
}

export function nyDateTime(date = new Date()) {
  const p = getNYParts(date);
  return `${p.year}-${p.month}-${p.day} ${p.hour}:${p.minute}:${p.second}`;
}

export function nyDateTimeWithZone(date = new Date()) {
  const p = getNYParts(date);
  return `${p.year}-${p.month}-${p.day} ${p.hour}:${p.minute}:${p.second} ${p.timeZoneName}`;
}
