let countChar = (word, letter) => {
  let counter = 0;
  let stringWord = String(word);
  for (let i = 0; i < stringWord.length; i++) if (word[i] === letter) counter++;
  return counter;
};
console.log(
  countChar("hello darkness my old friend i come to talk with you again", "l")
);
