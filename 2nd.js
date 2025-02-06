// ques1
const input1 = new Date("2023-05-15");
const input2 = "Hello World";
console.log(Object.prototype.toString.call(input1) === "[object Date]"); // true
console.log(Object.prototype.toString.call(input2) === "[object Date]"); // false

// ques2
const separator = "-";
const currentDate = new Date();
console.log(`${currentDate.getMonth() + 1}${separator}${currentDate.getDate()}${separator}${currentDate.getFullYear()}`);

// ques3
console.log(new Date(2023, 7, 0).getDate()); // August

// ques4
const dateExample = new Date("2023-12-10");
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(monthNames[dateExample.getMonth()]);

// ques5
const dateA = new Date("2023-11-15");
const dateB = new Date("2023-11-10");
console.log(dateA > dateB ? "Greater than" : dateA < dateB ? "Less than" : "Equal to");

// ques6
const weekendCheck = new Date("2023-11-18");
console.log(weekendCheck.getDay() === 0 || weekendCheck.getDay() === 6);

// ques7
const diffDate1 = new Date("2023-10-01");
const diffDate2 = new Date("2023-10-15");
console.log(Math.ceil(Math.abs(diffDate2 - diffDate1) / (1000 * 60 * 60 * 24)));

// ques8
console.log(new Date(2023, 9, 0).getDate()); // September

// ques9
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
console.log(yesterday.toDateString());

// ques10
const dateArray = [new Date("2023-09-25"), new Date("2023-12-05"), new Date("2023-08-10")];
console.log(new Date(Math.max.apply(null, dateArray)));
