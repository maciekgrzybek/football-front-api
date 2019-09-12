function getDate(date) {
  const newDate = new Date(date)
  const day = newDate.getDate();
  const month = newDate.getMonth();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  return {
    date: `${day}.${month}`,
    time: `${hours}:${minutes}`
  }
}

export default getDate;