const fibs = (num) => {
  const sequence = [0, 1];
  let num1 = 0;
  let num2 = 1;
  for (let i = 2; i < num; i++) {
    let res = num1 + num2;
    num1 = num2;
    num2 = res;
    sequence.push(res);
  }
  return sequence;
};

console.log(fibs(7));
