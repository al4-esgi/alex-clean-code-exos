function dirty() {
  const numbers = Array.from({ length: 100 }).map((x, i) => i + 1);

  console.log(
    numbers.reduce((acc, curr) => {
      return `${acc} ${(curr % 3 && curr % 5) === 0 ? "FizzBuzz" : curr % 3 === 0 ? "Fizz" : curr % 5 === 0 ? "Buzz" : curr}`;
    }, ""),
  );
}

const fizzBuzzValue = (number: number = 30): string => buildFizzBuzzString(number);

export function buildFizzBuzzString(number: number): string {
  if (number % 3 === 0 && number % 5 === 0) {
    return " FizzBuzz";
  } else if (number % 3 === 0) {
    return " Fizz";
  } else if (number % 5 === 0) {
    return " Buzz";
  }

  return ` ${number}`;
}

// x();
console.log(fizzBuzzValue(15));
