// Select input field
let input = document.querySelector("input");

// Select Add button
let button = document.querySelector("button");

// Select ordered list where tasks will be added
let list = document.querySelector("ol");

// BUTTON CLICK EVENT

button.addEventListener("click", function(){

    // Get text entered by user and remove extra spaces
    let taskText = input.value.trim();

    // If input is empty, stop function
    if(taskText === "") return;

 // CREATE NEW LIST ITEM
   

    // Create <li> element dynamically
    let li = document.createElement("li");

    // Add user text inside the list item
    li.innerText = taskText;

    // Add class to apply CSS styling
    li.setAttribute("class","task-item");

    // Apply inline style using style.property
    li.style.listStyle = "decimal";

 // REMOVE TASK WHEN CLICKED
 // When user clicks the task, remove it
    li.addEventListener("click", function(){
        li.remove();
    });

 // APPEND TASK TO ORDERED LIST
    list.append(li);

 // CLEAR INPUT FIELD AFTER ADDING
   input.value = "";
});