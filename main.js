/* 
👉 Write your kata here!
*/
/* You have 
A meteor is heading for earth. NASA has a team of meteor-fighting, expert oil-drilling astronauts in their department to fight this meteor. The problem is, some have booked holiday. We need to figure out what day of the week this holiday is booked upon. 
The days of the week are represented as numbers like this:
Monday = 1,
Tuesday = 2,
Wednesday = 3,
Thursday = 4,
Friday = 5,
Saturday = 6,
Sunday = 7

Given a number between 1 - 7 representing the current day, and another number representing the amount of days in the future our oil-drilling astronauts go on holiday, return a number between 1 - 7 that represents the day upon which they go away.

For instance:
John knows that on Wednesday (3) his holiday is 10458 days in the future.
So findTheFutureDayOfTheWeek(3, 10460) should return 5 (i.e. Friday)

Clare knows that on Sat (6) her holiday is 132 days in the future.
So findTheFutureDayOfTheWeek(6, 131) should return 4 (i.e Thursday)

*/
function findTheFutureDayOfTheWeek(currentDay, futureAmountOfDays) {
    let remainder = futureAmountOfDays % 7; 
    let futureDay = currentDay + remainder;
    if (futureDay > 7) {
        futureDay = futureDay - 7;
    }
    return futureDay;
}

console.log(findTheFutureDayOfTheWeek(1, 8)); // should return 2 (Tuesday) ( 8 % 7 = 1)
console.log(findTheFutureDayOfTheWeek(4, 25)); // should return 1 (Monday) (25 % 7 = 4)
console.log(findTheFutureDayOfTheWeek(5, 10458)); // current day was a Friday, the future day was a Friday
console.log(findTheFutureDayOfTheWeek(5, 10459));

console.log("John ", findTheFutureDayOfTheWeek(3, 10458));
console.log("Clare ", findTheFutureDayOfTheWeek(6, 132));

export default findTheFutureDayOfTheWeek;

//👉 Write the function your CodeWarriors will start with below here:
