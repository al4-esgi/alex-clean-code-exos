import { buildFizzBuzzString } from "..";

describe("buildFizzBuzzString", () => {
  describe("FizzBuzz case (divisible by both 3 and 5)", () => {
    test('should return " FizzBuzz" for 15', () => {
      expect(buildFizzBuzzString(15)).toBe(" FizzBuzz");
    });

    test('should return " FizzBuzz" for 30', () => {
      expect(buildFizzBuzzString(30)).toBe(" FizzBuzz");
    });

    test('should return " FizzBuzz" for 45', () => {
      expect(buildFizzBuzzString(45)).toBe(" FizzBuzz");
    });

    test('should return " FizzBuzz" for 60', () => {
      expect(buildFizzBuzzString(60)).toBe(" FizzBuzz");
    });

    test('should return " FizzBuzz" for 75', () => {
      expect(buildFizzBuzzString(75)).toBe(" FizzBuzz");
    });

    test('should return " FizzBuzz" for 90', () => {
      expect(buildFizzBuzzString(90)).toBe(" FizzBuzz");
    });

    test('should return " FizzBuzz" for larger numbers like 150', () => {
      expect(buildFizzBuzzString(150)).toBe(" FizzBuzz");
    });
  });

  describe("Fizz case (divisible by 3 but not by 5)", () => {
    test('should return " Fizz" for 3', () => {
      expect(buildFizzBuzzString(3)).toBe(" Fizz");
    });

    test('should return " Fizz" for 6', () => {
      expect(buildFizzBuzzString(6)).toBe(" Fizz");
    });

    test('should return " Fizz" for 9', () => {
      expect(buildFizzBuzzString(9)).toBe(" Fizz");
    });

    test('should return " Fizz" for 12', () => {
      expect(buildFizzBuzzString(12)).toBe(" Fizz");
    });

    test('should return " Fizz" for 18', () => {
      expect(buildFizzBuzzString(18)).toBe(" Fizz");
    });

    test('should return " Fizz" for 21', () => {
      expect(buildFizzBuzzString(21)).toBe(" Fizz");
    });

    test('should return " Fizz" for larger numbers like 33', () => {
      expect(buildFizzBuzzString(33)).toBe(" Fizz");
    });
  });

  describe("Buzz case (divisible by 5 but not by 3)", () => {
    test('should return " Buzz" for 5', () => {
      expect(buildFizzBuzzString(5)).toBe(" Buzz");
    });

    test('should return " Buzz" for 10', () => {
      expect(buildFizzBuzzString(10)).toBe(" Buzz");
    });

    test('should return " Buzz" for 20', () => {
      expect(buildFizzBuzzString(20)).toBe(" Buzz");
    });

    test('should return " Buzz" for 25', () => {
      expect(buildFizzBuzzString(25)).toBe(" Buzz");
    });

    test('should return " Buzz" for 35', () => {
      expect(buildFizzBuzzString(35)).toBe(" Buzz");
    });

    test('should return " Buzz" for 40', () => {
      expect(buildFizzBuzzString(40)).toBe(" Buzz");
    });

    test('should return " Buzz" for larger numbers like 55', () => {
      expect(buildFizzBuzzString(55)).toBe(" Buzz");
    });
  });

  describe("Normal number case (not divisible by 3 or 5)", () => {
    test('should return " 1" for 1', () => {
      expect(buildFizzBuzzString(1)).toBe(" 1");
    });

    test('should return " 2" for 2', () => {
      expect(buildFizzBuzzString(2)).toBe(" 2");
    });

    test('should return " 4" for 4', () => {
      expect(buildFizzBuzzString(4)).toBe(" 4");
    });

    test('should return " 7" for 7', () => {
      expect(buildFizzBuzzString(7)).toBe(" 7");
    });

    test('should return " 8" for 8', () => {
      expect(buildFizzBuzzString(8)).toBe(" 8");
    });

    test('should return " 11" for 11', () => {
      expect(buildFizzBuzzString(11)).toBe(" 11");
    });

    test('should return " 13" for 13', () => {
      expect(buildFizzBuzzString(13)).toBe(" 13");
    });

    test('should return " 14" for 14', () => {
      expect(buildFizzBuzzString(14)).toBe(" 14");
    });

    test('should return " 16" for 16', () => {
      expect(buildFizzBuzzString(16)).toBe(" 16");
    });

    test('should return " 17" for 17', () => {
      expect(buildFizzBuzzString(17)).toBe(" 17");
    });

    test('should return " 19" for 19', () => {
      expect(buildFizzBuzzString(19)).toBe(" 19");
    });

    test('should return " 22" for 22', () => {
      expect(buildFizzBuzzString(22)).toBe(" 22");
    });

    test('should return " 23" for 23', () => {
      expect(buildFizzBuzzString(23)).toBe(" 23");
    });

    test('should return " 26" for 26', () => {
      expect(buildFizzBuzzString(26)).toBe(" 26");
    });

    test('should return " 28" for 28', () => {
      expect(buildFizzBuzzString(28)).toBe(" 28");
    });

    test('should return " 29" for 29', () => {
      expect(buildFizzBuzzString(29)).toBe(" 29");
    });

    test('should return " 31" for 31', () => {
      expect(buildFizzBuzzString(31)).toBe(" 31");
    });

    test('should return " 37" for 37', () => {
      expect(buildFizzBuzzString(37)).toBe(" 37");
    });

    test('should return " 41" for 41', () => {
      expect(buildFizzBuzzString(41)).toBe(" 41");
    });

    test('should return " 43" for 43', () => {
      expect(buildFizzBuzzString(43)).toBe(" 43");
    });

    test('should return " 44" for 44', () => {
      expect(buildFizzBuzzString(44)).toBe(" 44");
    });

    test('should return " 46" for 46', () => {
      expect(buildFizzBuzzString(46)).toBe(" 46");
    });

    test('should return " 47" for 47', () => {
      expect(buildFizzBuzzString(47)).toBe(" 47");
    });

    test('should return " 49" for 49', () => {
      expect(buildFizzBuzzString(49)).toBe(" 49");
    });

    test('should return " 52" for 52', () => {
      expect(buildFizzBuzzString(52)).toBe(" 52");
    });

    test('should return " 53" for 53', () => {
      expect(buildFizzBuzzString(53)).toBe(" 53");
    });

    test('should return " 56" for 56', () => {
      expect(buildFizzBuzzString(56)).toBe(" 56");
    });

    test('should return " 58" for 58', () => {
      expect(buildFizzBuzzString(58)).toBe(" 58");
    });

    test('should return " 59" for 59', () => {
      expect(buildFizzBuzzString(59)).toBe(" 59");
    });

    test('should return " 61" for 61', () => {
      expect(buildFizzBuzzString(61)).toBe(" 61");
    });

    test('should return " 62" for 62', () => {
      expect(buildFizzBuzzString(62)).toBe(" 62");
    });

    test('should return " 64" for 64', () => {
      expect(buildFizzBuzzString(64)).toBe(" 64");
    });

    test('should return " 67" for 67', () => {
      expect(buildFizzBuzzString(67)).toBe(" 67");
    });

    test('should return " 68" for 68', () => {
      expect(buildFizzBuzzString(68)).toBe(" 68");
    });

    test('should return " 71" for 71', () => {
      expect(buildFizzBuzzString(71)).toBe(" 71");
    });

    test('should return " 73" for 73', () => {
      expect(buildFizzBuzzString(73)).toBe(" 73");
    });

    test('should return " 74" for 74', () => {
      expect(buildFizzBuzzString(74)).toBe(" 74");
    });

    test('should return " 76" for 76', () => {
      expect(buildFizzBuzzString(76)).toBe(" 76");
    });

    test('should return " 77" for 77', () => {
      expect(buildFizzBuzzString(77)).toBe(" 77");
    });

    test('should return " 79" for 79', () => {
      expect(buildFizzBuzzString(79)).toBe(" 79");
    });

    test('should return " 82" for 82', () => {
      expect(buildFizzBuzzString(82)).toBe(" 82");
    });

    test('should return " 83" for 83', () => {
      expect(buildFizzBuzzString(83)).toBe(" 83");
    });

    test('should return " 86" for 86', () => {
      expect(buildFizzBuzzString(86)).toBe(" 86");
    });

    test('should return " 88" for 88', () => {
      expect(buildFizzBuzzString(88)).toBe(" 88");
    });

    test('should return " 89" for 89', () => {
      expect(buildFizzBuzzString(89)).toBe(" 89");
    });

    test('should return " 91" for 91', () => {
      expect(buildFizzBuzzString(91)).toBe(" 91");
    });

    test('should return " 92" for 92', () => {
      expect(buildFizzBuzzString(92)).toBe(" 92");
    });

    test('should return " 94" for 94', () => {
      expect(buildFizzBuzzString(94)).toBe(" 94");
    });

    test('should return " 97" for 97', () => {
      expect(buildFizzBuzzString(97)).toBe(" 97");
    });

    test('should return " 98" for 98', () => {
      expect(buildFizzBuzzString(98)).toBe(" 98");
    });

    test('should return " 101" for 101', () => {
      expect(buildFizzBuzzString(101)).toBe(" 101");
    });

    test('should return " 137" for 137', () => {
      expect(buildFizzBuzzString(137)).toBe(" 137");
    });
  });

  describe("Edge cases and additional tests", () => {
    test("should handle negative numbers", () => {
      expect(buildFizzBuzzString(-1)).toBe(" -1");
      expect(buildFizzBuzzString(-3)).toBe(" Fizz");
      expect(buildFizzBuzzString(-5)).toBe(" Buzz");
      expect(buildFizzBuzzString(-15)).toBe(" FizzBuzz");
    });

    test("should handle zero", () => {
      expect(buildFizzBuzzString(0)).toBe(" FizzBuzz"); // 0 is divisible by both 3 and 5
    });

    test("should handle large numbers", () => {
      expect(buildFizzBuzzString(300)).toBe(" FizzBuzz");
      expect(buildFizzBuzzString(999)).toBe(" Fizz");
      expect(buildFizzBuzzString(1000)).toBe(" Buzz");
      expect(buildFizzBuzzString(1001)).toBe(" 1001");
    });
  });
});
