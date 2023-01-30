type IfizzBuzz = number | string;

export const fizzBuzz = (n: number): string => {
  const newArray: IfizzBuzz[] = [];

  for (let num = 1; num <= n; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      newArray.push("FizzBuzz");
    } else if (num % 3 === 0) {
      newArray.push("Fizz");
    } else if (num % 5 === 0) {
      newArray.push("Buzz");
    } else {
      newArray.push(num);
    }
  }
  return newArray.toString();
};

console.log(fizzBuzz(15));
