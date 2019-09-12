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
    'December'
  ]
  const newDate = new Date(date)
  const day = newDate.getDate();
  const month = months[newDate.getMonth() - 1];
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  return {
    day: `${day}.${month}`,
    time: `${hours}:${minutes}`
  }
}

export default getDate;