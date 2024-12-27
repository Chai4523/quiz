const questions = [
  {
    category: "javascript",
    questions: [
      {
        question: "What will be the output of the following code snippet?",
        snippet: `const obj1 = {first: 20, second: 30, first: 50};
console.log(obj1);`,
        options: [
          "{first: 20, second: 30}",
          "{first: 50, second: 30}",
          "{first: 20, second: 30, first: 50}",
          "Syntax Error",
        ],
        answer: 1,
        explaination:
          "When an object is passed with duplicate keys, the value of the key will be replaced by the last value of that key used in the declaration.",
      },
      {
        question: "What will be the output of the following code snippet?",
        snippet: `let a = [1, 2, 3, 4, 5, 6];
var left = 0, right = 5;
var found = false;
var target = 5;
while(left <= right) {
   var mid = Math.floor((left + right) / 2);
   if(a[mid] == target) {
       found = true;
       break;
   }
   else if(a[mid] < target) {
       left = mid + 1;
   }
   else {
       right = mid - 1;
   }
}
if(found) {
   print("YES");
}
else {
   print("NO");
}`,
        options: ["YES", "NO", "Syntax Error", "None of the above"],
        answer: 0,
        explaination:
          "The above code performs binary search to search for the target element of 5 in the given array. If it is found, it prints YES else NO.",
      },
      {
        question: "What will be the output of the following code snippet?",
        snippet: `print(typeof(NaN));`,
        options: ["Object", "Number", "String", "None of the above"],
        answer: 0,
        explaination:
          "NaN in Javascript is defined to be of type number despite its name(not a number).",
      },
    ],
  },
];
