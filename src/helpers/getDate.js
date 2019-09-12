function nth(d) {
  if (d > 3 && d < 21) return 'th'; 
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}
function getDate(date) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const newDate = new Date(date)
  const dayOfMonth = newDate.getDate();
  const day = newDate.getDay();
  const month = months[newDate.getMonth() - 1];
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  return {
    dayOfMonth: `${dayOfMonth}${nth(dayOfMonth)}`,
    dayOfWeek: days[day],
    month: month, 
    time: `${hours}:${minutes}`
  }
}

export default getDate;