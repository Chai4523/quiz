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
      {
        question: "What will be the output of the following code snippet?",
        snippet: `let s = "00000001111111";
let l = 0, r = s.length - 1, ans = -1;
while(l <= r) {
   var mid = Math.floor((l + r) / 2);
   if(s[mid] == '1') {
       ans = mid;
       r = mid - 1;
   }
   else {
       l = mid + 1;
   }
}
print(ans);`,
        options: ["8", "7", "0", "1"],
        answer: 1,
        explaination:
          "This code snippet shows one of the many applications of the binary search algorithm in Javascript. Here, we are binary searching for the index of the first occurrence of the character ‘1’ in the given string. When we get the character ‘1’ at the mid index, we store it as the answer and move to the left half which will have the first index of ‘1’ if it occurs. Else we move to the right half. So, the answer will be 7 (0-based indexing).",
      },
      {
        question: "What will be the output of the following code snippet?",
        snippet: `const example = ({ a, b, c }) => {
 console.log(a, b, c);
};
example(0, 1, 2);`,
        options: [
          "0 1 2",
          "0 Undefined Undefined",
          "Undefined Undefined Undefined",
          "None of the above",
        ],
        answer: 2,
        explaination:
          "Since we are passing individual numbers rather than a single object to the function, Javascript will initialize the object parameters with their default value of undefined.",
      },
    ],
  },
  {
    category: "react",
    questions: [
      {
        question: "What will be the output of the following code snippet?",
        snippet: `print(typeof(NaN));`,
        options: ["Object", "Number", "String", "None of the above"],
        answer: 0,
        explaination:
          "NaN in Javascript is defined to be of type number despite its name(not a number).",
      },
      {
        question: "What will be the output of the following code snippet?",
        snippet: `print(typeof(NaN));`,
        options: ["Object", "Number", "String", "None of the above"],
        answer: 0,
        explaination:
          "NaN in Javascript is defined to be of type number despite its name(not a number).",
      },
    ]
  },
  {
    category: "html",
    questions: [
      {
        question: "What will be the output of the following code snippet?",
        snippet: `print(typeof(NaN));`,
        options: ["Object", "Number", "String", "None of the above"],
        answer: 0,
        explaination:
          "NaN in Javascript is defined to be of type number despite its name(not a number).",
      },
    ]
  },
  {
    category: "css",
    questions: [
      {
        question: "What will be the output of the following code snippet?",
        snippet: `print(typeof(NaN));`,
        options: ["Object", "Number", "String", "None of the above"],
        answer: 0,
        explaination:
          "NaN in Javascript is defined to be of type number despite its name(not a number).",
      },
    ]
  }
];
