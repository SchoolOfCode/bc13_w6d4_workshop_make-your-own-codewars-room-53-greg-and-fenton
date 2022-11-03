//👉 Write your tests below here:
import findTheFutureDayOfTheWeek from "./main.js"

test("Clare's holiday", () => {
    const actual = findTheFutureDayOfTheWeek(6,132);
    const expected = 5;
    expect(actual).toBe(expected);
});
