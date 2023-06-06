const fibs = (num) => {
  const sequence = [0, 1];

  for (let i = 2; i < num; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }
  return sequence;
};

console.log(fibs(8));

const fibsRec = (num, sequence = []) => {
  if (num === 0) {
    sequence.push(0);
    return sequence;
  } else if (num === 1) {
    sequence.push(0, 1);
    return sequence;
  } else {
    sequence = fibsRec(num - 1, sequence);
    sequence.push(sequence[num - 1] + sequence[num - 2]);
    return sequence;
  }
};

console.log(fibsRec(8));
