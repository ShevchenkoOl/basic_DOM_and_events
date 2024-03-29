# Basic Methods for Handling Events and DOM in JavaScript
This repository contains code examples and explanations for 10 fundamental methods when working with event handlers and the DOM in JavaScript.


* ### task-01
In HTML, there is a list of categories, __ul#categories__. Write a script that:
  1. Will count and display in the console the number of categories in __ul#categories__, that is, __li.item__ elements;
  2. For each __li.item__ element in the __ul#categories__ list, will find and display in the console the element header text ```<h2>``` tag and the number of elements in the category (all nested ```<li>```).
As a result, the following messages will be displayed in the console:
```
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
```
* ### task-02
In HTML, there is an empty __ul#ingredients__ list. ```<ul id="ingredients"></ul>``` In JavaScript, there is an array of strings:
```
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
```
Write a script that, for each element in the ingredients array:
1. Will create a separate ```<li>``` element. Be sure to use the __document.createElement()__ method;
2. Will add the ingredient name as its text content;
3. Will add the item class to the element;
4. Then will insert all ```<li>``` to the __ul#ingredients__ list in a single operation.
* ### task 03
Write a script to create a gallery of images from an array of data. There is a list, __ul.gallery__, in HTML:
```
<ul class="gallery"></ul>
```
Use an array of objects images to create ```<img>``` elements nested in ```<li>```. Use template strings and the __insertAdjacentHTML()__ method to create markup.
1. All gallery items must be added to DOM in one insert operation;
2. Add at least some gallery design with flexboxes or grids using CSS classes.
```
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
```
* ### task-04
The counter consists of a span and buttons, which, when clicked, should increase and decrease its value by one.
```
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
```
1. Create a variable, ```counterValue```, that will store the current counter value and initialize it with ```0```;
2. Add listeners for clicks on the buttons; inside them, increase or decrease the value of the counter;
3. Update the interface with the new value of the variable ```counterValue```.
* ### task-05
Write a script that, when typing in the __input#name-input__ input (input event), substitutes its current value into ___span#name-output___. If the input is empty, the span should display the __"Anonymous"__ string:
```
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```
* ### task-06
Write a script that, when focus on input is lost (```blur``` event), checks its contents for the correct number of entered characters:
```
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
```
1. The number of characters in the input is specified in its __data-length__ attribute;
2. If the number of characters entered is correct, the input's ___border__ turns green, or red with a wrong number.
To add styles, use the ```valid``` and ```invalid``` CSS classes, which you can find in the task source files:
```
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
```
* ### task-07
Write a script that responds to changes in the value of __input#font-size-control__ (input event) and changes the inline style of __pan#text__ by updating the __font-size__ property. As a result, the text size will change responding to scrollbar dragging:
```
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
```
* ### task-08
Write a script to manage the login form:
```
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
```
1. Form submission (__form.login-form__) must be processed on the __submit__ event;
2. The page must not reload when the form is submitted;
3. If the form has empty fields, display __alert__ saying that all fields must be filled in;
4. As soon as the user has filled in all the fields and submitted the form, collect the field values into an object, where the field name will be the property name and the field value will be the property value. Use the __elements__ property to access form elements;
5. Display the object with the entered data in the console and clear the values of the form fields using the reset method.
* ### task-09
Write a script that changes the background colors of the ```<body>``` element via inline style when clicking on __button.change-color__ and outputs the color value to __span.color__.
```
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```
Use the __getRandomHexColor__ function to generate a random color:
```
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```
* ### task-10
Write a script to create and clear a collection of elements. The user enters the number of elements into __input__ and clicks the __New__ button, after which a collection is rendered. When you click on the __Clear__ button, the collection is cleared.
```
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```
Create a __createBoxes(amount)__ function that takes one parameter, a number. The function creates as many ```<div>``` as specified in __amount__ and adds them to __div#boxes__:
1. The dimensions of the very first ```<div>``` are 30px by 30px;
2. Each element after the first one should be 10px wider and higher than the previous one;
3. All elements must have a random HEX background color. Use the ready-made __getRandomHexColor__ function to get a color:
```
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```
Create a __destroyBoxes()__ function that clears the contents of __div#boxes__, thereby removing all created elements.

## Usage
To use this repository, follow these steps:
1. Clone the repository to your local computer;
2. Go to the repository directory;
3. Run each task following the instructions described in the corresponding task file.

## Author
This repository was created and maintained by [Oleksii Shevchenko](https://shevchenkool.github.io/portfolio/). Questions, suggestions, and feedback can be directed to [email](uzlabini@gmail.com) or [linkedin profile](linkedin.com/in/oleksii-shevchenko-535ab61b8).
