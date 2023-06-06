const fibs = (num) => {
  const sequence = [0, 1];

  for (let i = 2; i < num; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }
  return sequence;
};

console.log(fibs(10));
