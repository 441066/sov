let isEven = (num) => {
  if (Number.isNaN(num)) return false;
  else if (num < 0) return false;
  else if (num == 0) return true;
  else if (num == 1) return false;
  else return isEven(num - 2);
};
console.log(isEven(2));
