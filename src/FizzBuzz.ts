type IfizzBuzz = number | string;

export const fizzBuzz = (n: number): string => {
  const newArray: IfizzBuzz[] = [];

  for (let num = 1; num <= n; num++) {
    num % 3 === 0 && num % 5 === 0
      ? newArray.push("FizzBuzz")
      : num % 3 === 0
      ? newArray.push("Fizz")
      : num % 5 === 0
      ? newArray.push("Buzz")
      : newArray.push(num);
  }

  return newArray.toString();
};

console.log(fizzBuzz(15));
