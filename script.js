function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0)
        return "FizzBuzz";
    if (num % 3 === 0)
        return "Fizz";
    if (num % 5 === 0)
        return "Buzz";
    return num;
}
var fizzBuzzArr = [];
for (var i = 1; i <= 100; i++)
    fizzBuzzArr.push(fizzbuzz(i));
