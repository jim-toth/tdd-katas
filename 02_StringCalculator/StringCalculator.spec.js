'use strict';

const common = require('../config/common');
const StringCalculator = require('./StringCalculator');

describe('StringCalculator', () => {
  let calc;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  it('An empty string returns zero', () => {
    calc.sum('').should.equal(0);
  });

  it('A single number returns the value', () => {
    calc.sum('7').should.equal(7);
  });

  it('Two numbers, comma delimited, returns the sum', () => {
    calc.sum('6,5').should.equal(11);
  });

  it('Two numbers, newline delimited, returns the sum', () => {
    calc.sum('3\n2').should.equal(5);
  });

  it('Three numbers, delimited either way, returns the sum', () => {
    calc.sum('1,2\n3').should.equal(6);
  });

  it('Negative numbers throw an exception', () => {
    (() => { calc.sum('1,2\n-3') }).should.throw(Error);
  });

  it('Numbers greater than 1000 are ignored', () => {
    calc.sum('1\n2000,3').should.equal(4);
  });

  it('A single char delimiter can be defined on the first line (e.g. //# for a ‘#’ as the delimiter)', () => {
    calc.sum('//#\n5,4\n3#2').should.equal(14);
  });

  it('A multi char delimiter can be defined on the first line (e.g. //[###] for ‘###’ as the delimiter)', () => {
    calc.sum('//[###]\n1\n2###3,4').should.equal(10);
  });

  it('Many single or multi-char delimiters can be defined (each wrapped in square brackets)', () => {
    calc.sum('//[###][&&]\n1\n2###3,4&&5').should.equal(15);
  });
});