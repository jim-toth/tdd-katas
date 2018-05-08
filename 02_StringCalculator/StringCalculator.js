'use strict';

class StringCalculator {
  sum(str) {
    let customDelimeters = this.parseCustomDelimeters(str),
        numberString = str,
        delimeters = [',', '\n'],
        sum = 0,
        numbers = [];

    if (customDelimeters.length > 0) {
      delimeters = delimeters.concat(customDelimeters);
      numberString = numberString.substring(this.calcDelimeterOffset(customDelimeters));
    }

    numbers = this.parseNumbers(delimeters, numberString);

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i]) {
        let parsedNumber = parseInt(numbers[i]);

        if (this.isNegative(parsedNumber)) {
          throw new Error('Negative numbers not allowed');
        } else if (!this.isGreaterThan1000(parsedNumber)) {
          sum = sum + parsedNumber;
        }
      }
    }

    return sum;
  }

  calcDelimeterOffset(customDelimeters) {
    let delimeterOffset = 0;

    if (customDelimeters.length > 1) {
      let customDelimetersLength = customDelimeters.reduce((offset, x) => { return offset + x.length; }, 0);
      delimeterOffset = 3 + (customDelimeters.length * 2) + customDelimetersLength;
    } else if (customDelimeters[0].length > 1) {
      delimeterOffset = 5 + customDelimeters[0].length;
    } else {
      delimeterOffset = 4;
    }

    return delimeterOffset;
  }

  parseNumbers(delimeters, numberString) {
    let numbers = [];

    for (let i = 0; i < delimeters.length; i++) {
      if (i == 0) {
        numbers = numberString.split(delimeters[i]);
      } else {
        numbers = numbers.map(x => x.split(delimeters[i]))
                         .reduce((all, x) => all.concat(x));
      }
    }

    return numbers;
  }

  parseCustomDelimeters(str) {
    let delimeters = [], multiCharDelimeterRegex = /\/\/(?:\[([^\[\]]+)\])(?:\[([^\[\]]+)\])*/,
        matches = str.match(multiCharDelimeterRegex);

    if (matches && matches.length > 1) {
      for (let i = 1; i < matches.length; i++) {
        if (matches[i]) {
          delimeters.push(matches[i]);
        }
      }
    } else if (str[0] === '/' && str[1] === '/') {
      delimeters = [str[2]];
    }

    return delimeters;
  }

  isNegative(number) {
    return number < 0;
  }

  isGreaterThan1000(number) {
    return number > 1000;
  }
}

module.exports = StringCalculator;
