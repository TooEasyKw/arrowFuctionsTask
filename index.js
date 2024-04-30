const SumR = (Num1, Num2) => {
  return Num1 + Num2;
};

const great = (name) => {
  return `Hello, ${name}!`;
};

const Sqr = (x) => {
  return x * x;
};

const SqrArr = (xArr) => {
  for (let i = 0; i < xArr.length; i++) {
    xArr[i] = xArr[i] * xArr[i];
  }
  return xArr;
};
console.log(great("Dawood"));
console.log(SumR(5, 5));
console.log(Sqr(5));
console.log(SqrArr([5, 6, 7]));
