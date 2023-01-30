import { fizzBuzz } from "./FizzBuzz";

test("test Fizz", () => {
  expect(fizzBuzz(3)).toEqual("1,2,Fizz");
  expect(fizzBuzz(6)).toEqual("1,2,Fizz,4,Buzz,Fizz");
});

test("test Buzz", () => {
  expect(fizzBuzz(5)).toEqual("1,2,Fizz,4,Buzz");
  expect(fizzBuzz(10)).toEqual("1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz");
});

test("test FizzBuzz", () => {
  expect(fizzBuzz(15)).toEqual(
    "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz"
  );
  expect(fizzBuzz(0)).toEqual("");
});
