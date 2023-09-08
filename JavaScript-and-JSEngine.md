# Week2-JavaScript

# JavaScript 
JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved

# How Scripting Language Works?

JavaScript is either embedded directly into a web page or referenced via a separate .js file. When a user visits that web page, their browser will run the script along with the HTML and CSS code ‒ creating a functional page displayed via the browser tab.

The script is downloaded to the visitors’ machines and processed there. This differs from a server-side language, in which the server processes the script before sending it to the browser.

When encountering a block of JavaScript code, a web browser will process it from top to bottom. Since it’s order-sensitive, make sure to reference the objects or variables within the block first before modifying them. Having variables with no values will result in an undefined error.

# What makes JavaScript so powerful?

V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome. V8 provides the runtime environment in which JavaScript executes. The DOM and the other Web Platform APIs are provided by the browser.

In short, JS engines are programs converting JavaScript code into low-level or machine code. They follow the ECMAScript Standards that define features and execution process.

Other browsers have their own JavaScript engine:

Firefox has SpiderMonkey
Safari has JavaScriptCore (also called Nitro)
Edge was originally based on Chakra but has more recently been rebuilt using Chromium and the V8 engine.


# what is exactly happens with JavaScript parsed by the V8?

In the basic terms, V8 engine:

1. Taking your source code
2. The parser is generating an abstract syntax tree from the source
3. V8's interpreter is generating a bytecode from the syntax tree that a compiler can understand
4. V8's compiler is generating a graph from bytecode (replacing bytecode sections with optimized machine code)
5. And, ta-dah – executing!
   
![1-guwinzljjvtdpdet6o](https://github.com/prakashsfbu/Week2-JavaScript/assets/144198518/f9773ad3-2710-43c5-a927-22c7475df02a)


explain how scripting language works and how javascript works under the hood
ChatGPT
Sure! Let's dive a bit deeper into how scripting languages like JavaScript work under the hood.

Scripting Languages:
Scripting languages are a type of programming language. They're called "scripting" because they are often used to write scripts or sets of instructions that tell a computer what to do. These instructions are usually written in a human-readable form, making it easier for programmers to write and maintain code.

How JavaScript Works Under the Hood:

Parsing: When you write JavaScript code, your web browser or the JavaScript engine in other environments first needs to understand what your code means. This process is called parsing. It reads your code and checks if it follows the rules of the JavaScript language.

Abstract Syntax Tree (AST): After parsing, your code is transformed into an Abstract Syntax Tree (AST). Think of this as a tree-like structure that represents the structure and meaning of your code. It breaks down your code into smaller parts, like sentences in a language.

Execution: Once the AST is created, the JavaScript engine starts executing your code step by step. It follows the instructions you've written. For example, if you've told it to add two numbers, it performs that addition.

Memory Management: JavaScript also manages memory for you. When you create variables to store data, JavaScript keeps track of where that data is stored in your computer's memory.

Garbage Collection: JavaScript has a built-in system called garbage collection. It automatically looks for data that is no longer needed (like variables that are no longer used) and frees up the memory they were using so your computer doesn't run out of memory.

Interpreted vs. Compiled: JavaScript is typically an interpreted language, which means it's read and executed line by line. Some engines, like V8, use a technique called "Just-In-Time (JIT) Compilation" to speed things up. They convert parts of your code into machine code just before executing it, making it even faster.

Event Loop: JavaScript in web browsers also uses an event loop to handle things like user interactions and network requests. It listens for events (like a mouse click) and responds to them without freezing the entire webpage.

Web APIs: JavaScript can also interact with Web APIs (Application Programming Interfaces) provided by the browser, allowing it to do things like manipulate the DOM (Document Object Model), make network requests, and more.

In summary, JavaScript works by parsing your code, turning it into an Abstract Syntax Tree, executing it step by step, managing memory, and handling events. It's a versatile scripting language that makes websites interactive and dynamic by communicating with the browser and the computer's resources.



## ELI5 - Explain Like I'm 5
# JavaScript and JS Engine

JavaScript is like the language your computer speaks to make things happen on websites. Imagine a magic spell that makes pictures move, buttons work, and pop-up messages appear when you click on things. JavaScript is that magic spell for the internet. It's used by web developers to add interactivity and make web pages fun and useful.

# JS Engine/ V8 Engine

Now, think of the V8 engine as the superhero that helps JavaScript run really fast. When you tell your computer to do something with JavaScript, it needs to understand and follow those instructions quickly. The V8 engine is like a super-speedy translator that takes your JavaScript code and turns it into things your computer can understand and do super-fast.

So, in simple terms, JavaScript is the language for making cool things happen on websites, and the V8 engine is the superhero that makes it happen really, really fast!






