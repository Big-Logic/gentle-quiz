function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const radomiseArray = (arr) => {
  let countNum = 0;
  const radomiseArray = [];
  const countedValues = [];
  while (countNum !== arr.length) {
    const numToCheck = getRandomInt(arr.length);
    if (!countedValues.includes(numToCheck)) {
      countedValues.push(numToCheck);
      radomiseArray.push(arr[numToCheck]);
      countNum += 1;
    }
  }
  return radomiseArray;
};
