function sumItems(array) {
  let result = 0;
  for (const i of array) {
    if (Array.isArray(i)) {
      result += sumItems(i);
    } else {
      result += i;
    }
  }
  return result;
}

module.exports = sumItems;