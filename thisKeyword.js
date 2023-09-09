// Create an object called "robot" with properties and a method
var robot = {
  name: "Robo",
  sayHello: function() {
    console.log("Hello, I'm " + this.name + "!");
  }
};

// Call the sayHello method of the "robot" object
robot.sayHello(); // Output: Hello, I'm Robo!


// So, "this" in JavaScript is like a special word that tells a function or method which object it should work with, just like a remote control tells a toy which toy it should control. It helps keep things organized and makes sure each object knows what to d
