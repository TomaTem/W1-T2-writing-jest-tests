const sum = require('./1');
const arithmetic = require('./2');
const checkNumber = require('./3');

describe('Fuction getSum', () => {
    test('returns the sum of any number of numbers', () => {
        expect(sum([3, 6])).toBe(9);
        expect(sum([3, 6, 9])).toBe(18);
        expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
    });
    test('returns the sum of positive and negative numbers', () => {
        expect(sum([3, -6])).toBe(-3);
        expect(sum([3, 6, -9])).toBe(0);
        expect(sum([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10])).toBe(-55);
    });
    test('returns the sum of fractional numbers', () => {
        expect(sum([0.3, -0.6])).toBeCloseTo(-0.3);
        expect(sum([3, -0.6, -0.9])).toBeCloseTo(1.5);
        expect(sum([-1.1, -2.22, -3.333, -4.4444, -5.55555])).toBeCloseTo(-16.65);
    });
    test('also works not with numbers', () => {
        expect(sum(["тридцать ", "три ", "богатыря"])).toBe("тридцать три богатыря");
        expect(sum([-3.5, 6.5, 30, " богатыря"])).toBe("33 богатыря");
        expect(sum(["богатыря ", 3, 3])).toBe("богатыря 33");
        expect(sum([null, 2, 3])).toBe(5);
    });
    test('returns expected values', () => {
        expect(sum([NaN, 2])).toBeFalsy();
        expect(sum([undefined, 2])).toBeFalsy();
        expect(sum([NaN, 2])).toBeDefined();
        expect(sum([NaN, 2])).not.toBeNull();
        expect(sum([NaN, 2])).toBeNaN();
        expect(sum([undefined, 2])).toBeFalsy();
        expect(sum([undefined, 2])).not.toBeUndefined();
        expect(sum([undefined, 2])).toBeNaN();
    });
})

describe('Fuction arithmetic', () => {
    test('returns the sum', () => {
        expect(arithmetic(3, 6, "add")).toBe(9);
        expect(arithmetic(3.75, -6, "add")).toBeCloseTo(-2.25);
        expect(arithmetic("3", "6", "add")).toBe("36");
        expect(arithmetic("Привет ", "6", "add")).toBe("Привет 6");
    });
    test('returns the difference', () => {
        expect(arithmetic(3, 6, "subtract")).toBe(-3);
        expect(arithmetic(-3.75, -6, "subtract")).toBeCloseTo(2.25);
        expect(arithmetic("3", "6", "subtract")).toBe(-3);
        expect(arithmetic("Привет", "6", "subtract")).toBeNaN();
    });
    test('returns the product', () => {
        expect(arithmetic(-3, -6, "multiply")).toBe(18);
        expect(arithmetic(0.3, -6, "multiply")).toBeCloseTo(-1.8);
        expect(arithmetic("3", "6", "multiply")).toBe(18);
        expect(arithmetic("Привет", "6", "multiply")).toBeNaN();
    });
    test('returns the quotient', () => {
        expect(arithmetic(-6, -3, "divide")).toBe(2);
        expect(arithmetic(0.3, -6, "divide")).toBeCloseTo(-0.05);
        expect(arithmetic("3", "6", "divide")).toBeCloseTo(0.5);
        expect(arithmetic("Привет", "6", "divide")).toBeNaN();
        expect(arithmetic(6, 0, "divide")).toBe(Infinity);
    });
    test('only works with established operators and correct values', () => {
        expect(arithmetic(-6, -3, "/")).toBe("No such result");
        expect(arithmetic(1, 2, "Divide")).toBe("No such result");
        expect(arithmetic(null, "6", "divide")).toBe(0);
        expect(arithmetic(undefined, "6", "divide")).toBeNaN();
    });
})

describe('Fuction checkNumber', () => {
    test('checks if a positive number is even', () => {
        expect(checkNumber(3)).toBeFalsy();
        expect(checkNumber(6)).toBeTruthy();
        expect(checkNumber(28)).toBeTruthy();
        expect(checkNumber(0)).toBeTruthy();
    });
    test('checks if a negative number is even', () => {
        expect(checkNumber(-3)).toBeFalsy();
        expect(checkNumber(-6)).toBeTruthy();
        expect(checkNumber(-76)).toBeTruthy();
        expect(checkNumber(-0)).toBeTruthy();
    });
    test('checks if a positive fractional number is even', () => {
        expect(checkNumber(3.4)).toBeFalsy();
        expect(checkNumber(100006.0)).toBeTruthy();
        expect(checkNumber(0.000000000000000000001)).toBeFalsy();
    });
    test('checks if a negative fractional number is even', () => {
        expect(checkNumber(-3.4)).toBeFalsy();
        expect(checkNumber(-206.0)).toBeTruthy();
        expect(checkNumber(-0.000000000000000000001)).toBeFalsy();
    });
    test('also works not with numbers', () => {
        expect(checkNumber(null)).toBeTruthy();
        expect(checkNumber(undefined)).toBeFalsy();
        expect(checkNumber("4")).toBeTruthy();
        expect(checkNumber("3")).toBeFalsy();
        expect(checkNumber("Hello")).toBeFalsy();
    });
})