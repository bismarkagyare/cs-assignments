const fibs = (num) => {
  const sequence = [0, 1];

  for (let i = 2; i < num; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }
  return sequence;
};

//console.log(fibs(8));

const fibsRec = (num, sequence = [0, 1]) => {
  if (num < 1) {
    return 'Invalid Number';
  }

  if (num === 1) {
    return [0];
  }

  if (sequence.length === num) {
    return sequence;
  }

  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  return fibsRec(num, sequence);
};

console.log(fibsRec(10));
