function fizzbuzz(num: number): string | number {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

const fizzBuzzArr: (number | string)[] = [];
for (let i: number = 1; i <= 100; i++) fizzBuzzArr.push(fizzbuzz(i));
