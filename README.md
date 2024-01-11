## Basic Methods for Handling Events and DOM in JavaScript

This repository contains code examples and explanations for 10 fundamental methods when working with event handlers and the DOM in JavaScript.

# List of Methods:

task-01 - Write a script like this
You will see in the console the number of categories in ul#categories, then the elements li.item.
For the skin element li.item in the ul#categories list, find and output to the console the text of the element's title (the <h2> tag) and the number of elements in the category (all <li>, inserted into this).
To complete this task, you need to use the forEach() method and control the DOM navigation.(#add-event-listener)
task-02 - Write a script for the ingredients array for the skin element:
Create an element <li>. Obov'yakovo vikoristovy method document.createElement().
Add the name of the ingredient as a text instead.
Give the element the class item.
After that, insert <li> in one operation into the ul#ingredients list.
task-03 - Write a script to create a gallery and display an array of data on the display. HTML list ul.gallery.
<ul class="gallery"></ul>
A vikory array of images objects for creating <img> elements nested in <li>. To create the layout of the vikory template row, use the insertAdjacentHTML() method.
All gallery elements must be added to the DOM in one append operation.
task-04 - Change counterValue to keep the exact values of the doctor and initialize these values to 0. 
Add auditory clicks to the buttons in the middle, which increase or change the value of the doctor.
Update the interface for new values of the counterValue change.
task-05 - Write a script that, when typing text in the input#name-input (input name), inserts the exact value into the span#name-output. If the input is empty, the “Anonymous” row will appear.
task-06 - Write a script that, when the focus is on an input (called blur), checks it for the correct number of characters entered. 
<input
   type="text"
   id="validation-input"
   data-length="6"
   placeholder="Please enter 6 symbols"
/>
The number of characters required in the input is indicated in the data-length attribute.
If the correct number of characters is entered, the border of the input will turn green; if the number of characters is incorrect, the border will turn red.
To add styles to the vikory CSS class, valid and invalid, which we have already added to the output files.

#validation-input {
   border: 3px solid #bdbdbd;
}

#validation-input.valid {
   border-color: #4caf50;
}

#validation-input.invalid {
   border-color: #f44336;
}
task-07 - Write a script that reacts to changing the value of input#font-size-control (input) and changes the online style of span#text, and also the power of font-size. As a result, tightening the string will change the size of the text.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
task-08 - Write a script to manage the login form.
The form submission processing form.login-form must be processed before submit.
When the form is submitted, the page does not need to be re-enabled.
If the form has empty fields, issue an alert in advance about those fields that are required to be filled in.
Once the user has filled out all the fields and submitted the form, select the field values into an object, where the field values will be the authority values, and the field values will be the authority values. To access the elements of the form, vikory power elements.
Enter the object by entering the data into the console and clear the values of the form fields using the reset method.
task-09 - Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
task-10 - Write a script for creating and cleaning a collection of elements. You enter a number of elements into the input and press the Create button, after which the collection is rendered. When you press the Clear button, the collection of elements is cleared.

<div id="controls">
   <input type="number" min="1" max="100" step="1" />
   <button type="button" data-create>Create</button>
   <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Create a function createBoxes(amount), which takes one parameter - a number. The function creates <div> boxes as specified in the amount and adds them to div#boxes.

The size of the largest <div> is 30px by 30px.
The skin element after the first one should be wider and taller than the first one by 10px.
All elements are due to the color of the background in the HEX format. Vikorist has a ready-made function getRandomHexColor to select the color.
function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
     .toString(16)
     .padStart(6, 0)}`;
}
Create a function destroyBoxes() that clears div#boxes instead, this way will remove all created elements. 

# How to Use Code Examples:
Clone the repository: git clone https://github.com/ShevchenkoOl/basic_DOM_and_events.git
Open the index.html file in a browser.
