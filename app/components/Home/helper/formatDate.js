function formatDate(lastTrained) {
  const date = new Date(lastTrained * 1000); // converts unix seconds to date
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dateToday = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
  const daysAgo = Math.round((today - dateToday) / oneDay);

  if (daysAgo === 0) {
    return "today";
  } else if (daysAgo < 30) {
    return `${daysAgo} days ago`;
  } else if (date.getFullYear() === now.getFullYear()) {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  } else {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
}

export { formatDate };
