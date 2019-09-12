const filterDisplayable = item => {
  if (item.data) {
    return item.data.status.displayable;
  }
  return item.status.displayable;
}

export default filterDisplayable;