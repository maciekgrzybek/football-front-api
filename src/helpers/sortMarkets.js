function sortMarkets(a, b) {
  const currentNumber  = a.data.displayOrder;
  const nextNumber  = b.data.displayOrder;
  const currentName  = a.data.name;
  const nextName  = b.data.name;

  if (nextNumber < currentNumber) {
    return 1;
  } else if (nextNumber > currentNumber) {
    return -1;
  } else if (nextNumber === currentNumber) {
    if (nextName < currentName) {
      return 1;
    } else if (nextName > currentName) {
      return -1;
    }
  }
  return 0; 
}

export default sortMarkets;
