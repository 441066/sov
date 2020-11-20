let range = (start, end, step = 1) => {
  let downgrage;
  step = Number(step);
  if (step < 0) downgrage = true;
  step = Math.abs(step);
  let array = [];
  let max = Math.max(start, end);
  let min = Math.min(start, end);
  for (i = min; i <= max; i += step) {
    if (downgrage) array.unshift(i);
    else array.push(i);
  }
  return array;
};

let sum = (array) => {
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
  return sum;
};
console.log(sum(range(1, 10)));
