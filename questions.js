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
        question: "What is React primarily used for?",
        snippet: ``,
        options: [
          "Building mobile apps",
          "Server-side processing",
          "Building user interfaces",
          "Data analysis",
        ],
        answer: 2,
        explaination:
          "React is a JavaScript library used for building user interfaces, particularly for single-page applications.",
      },
      {
        question:
          "Which feature of React allows it to efficiently update the UI?",
        snippet: ``,
        options: ["Real DOM", "Virtual DOM", "Shadow DOM", "Document Fragment"],
        answer: 1,
        explaination:
          "The Virtual DOM is a key feature of React that allows efficient updates and rendering of the UI by minimizing real DOM manipulations.",
      },
      {
        question: "JSX stands for...",
        snippet: ``,
        options: [
          "JavaScript XML",
          "Java Syntax Extension",
          "JavaScript Syntax",
          "Java Structured XML",
        ],
        answer: 0,
        explaination:
          "JSX is an abbreviation for JavaScript XML. It allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.",
      },
      {
        question: "In JSX, how do you express JavaScript variables?",
        snippet: ``,
        options: [
          "Inside curly braces",
          "Inside square brackets",
          "Inside single quotes",
          "Inside parentheses",
        ],
        answer: 0,
        explaination:
          "In JSX, JavaScript expressions, including variables, are embedded inside curly braces.",
      },
      {
        question:
          "What is the correct syntax for embedding a JavaScript expression in JSX?",
        snippet: ``,
        options: ["{expression}", "expression", "${expression}", "#expression"],
        answer: 0,
        explaination: `In JSX, a JavaScript expression is embedded within curly braces, as in <div>{expression}</div>`,
      },
      {
        question: "JSX is processed into...",
        snippet: ``,
        options: [
          "JavaScript Objects",
          "HTML strings",
          "Virtual DOM Nodes",
          "Regular DOM Nodes",
        ],
        answer: 0,
        explaination: `JSX elements are transpiled into JavaScript objects by tools like Babel before they are rendered into the DOM.`,
      },
    ],
  },
  {
    category: "html",
    questions: [
      {
        question: "What is the correct syntax to write an HTML comment?",
        snippet: ``,
        options: [
          "<!-- Comment -->",
          "// Comment",
          "# Comment",
          "/* Comment */",
        ],
        answer: 0,
        explaination:
          "The correct syntax of writing an HTML comment is shown in option A.",
      },
      {
        question: "What is the function of the HTML style attribute?",
        snippet: ``,
        options: [
          "It is used to add styles to an HTML element.",
          "It is used to uniquely identify some specific styles of some element.",
          "Both A and B.",
          "None of the above.",
        ],
        answer: 0,
        explaination:
          "The HTML style attribute is used to add styles like font, color, and size to an HTML element.",
      },
      {
        question:
          "Which attribute is used to provide a unique name to an HTML element?",
        snippet: ``,
        options: ["id", "class", "type", "None of the above"],
        answer: 0,
        explaination:
          "An id is used to provide a unique name for an HTML element that can be used to identify it.",
      },
      {
        question:
          "Which HTML tag is used to set up a Javascript-like client-side scripting language?",
        snippet: ``,
        options: ["<script>", "<select>", "<anchor>", "None of the above"],
        answer: 0,
        explaination:
          "<script> tag is used for the purpose of setting up a client-side scripting language.",
      },
      {
        question:
          "Which of the following are examples of block-level elements in HTML?",
        snippet: ``,
        options: ["<div>", "<p>", "<h1>", "All of the above"],
        answer: 3,
        explaination:
          "All the above examples satisfy the properties in Prob. 41 and hence are block-level elements.",
      },
      {
        question: "What is meant by an empty tag in HTML?",
        snippet: ``,
        options: [
          "There is no such concept of an empty tag in HTML",
          "An empty tag does not require a closing tag",
          "An empty tag cannot have any content within it",
          "None of the above",
        ],
        answer: 1,
        explaination:
          "In HTML, empty tags are those tags that don’t require a closing tag for completion.",
      },
    ],
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
    ],
  },
];
