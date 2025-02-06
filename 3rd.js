// ques1
const str1 = "Hello World";
console.log(/^[A-Z]/.test(str1)); // true

// ques2
const emailPattern = /^[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+(\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
console.log(emailPattern.test("test@example.com")); // true

// ques3
const datePattern = /\b\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4}\b/;
const textWithDate = "Today's date is 15/08/2023.";
console.log(textWithDate.match(datePattern)); // ["15/08/2023"]

// ques4
const countVowels = str => (str.match(/[aeiouAEIOU]/g) || []).length;
console.log(countVowels("Hello World")); // 3

// ques5
const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
console.log(urlPattern.test("http://www.example.com")); // true

// ques6
const mobilePattern = /^\d{5} \d{5}$/;
console.log(mobilePattern.test("87987 67324")); // true

// ques7
const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(domainPattern.test("example.com")); // true
