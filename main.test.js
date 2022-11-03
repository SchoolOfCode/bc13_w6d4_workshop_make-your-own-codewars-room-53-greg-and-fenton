//👉 Write your tests below here:
import findTheFutureDayOfTheWeek from "./main.js"

test("Clare's holiday", () => {
    const actual = findTheFutureDayOfTheWeek(6,132);
    const expected = 5;
    expect(actual).toBe(expected);
});

test("John's holiday", () => {
    const actual = findTheFutureDayOfTheWeek(2,44);
    const expected = 4;
    expect(actual).toBe(expected);
});



test("Fred's holiday", () => {
    const actual = findTheFutureDayOfTheWeek(1,1000000000);
    const expected = 7;
    expect(actual).toBe(expected);
});

test("Fiona's holiday", () => {
    const actual = findTheFutureDayOfTheWeek(5,2383);
    const expected = 1;
    expect(actual).toBe(expected);
});

test("Fiona's holiday", () => {
    const actual = findTheFutureDayOfTheWeek(2,22342);
    const expected = 7;
    expect(actual).toBe(expected);
});

test("Helen's holiday", () => {
    const actual = findTheFutureDayOfTheWeek(4,98);
    const expected = 4;
    expect(actual).toBe(expected);
});