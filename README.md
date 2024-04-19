<!-- Tools used in react app -->
I have used Html, Css, JavaScript, Bootstrap5 and React Hooks like useState, useEffect to create this todo list React app and have used localstorage to store the tasks of the React app.

<!-- UI classification -->
 The entire UI is divided into two components. 
 
 <!-- First Component -->
 To add the task in the first component, I have created a structure layout with Bootstrap and written the logic with JavaScript.
 
<!-- setStates using useState -->
In which first of all I have defined the state of the task using useState hook and to fetch all the tasks, I have created the state of allNotes.

<!-- handleClick function for add task -->
 And then to add the task, a function called handleClick has been created in which the event preventDefault is done so that the page is not refreshed when the task is added and then the task has been added to localstorage and then the state of the task has been set so that after the task is added, Once the form is empty then all the tasks have been fetched.
 
 <!-- onChange function for change the input state  -->
A second function is written so that the state of the task can be updated.

<!-- useEffect hook for fetch all tasks after the mount component -->
 useEffect hook is used so that after the component is mounted, all the tasks are fetched.
 
 <!--getAllNotes function for fetch all tasks  -->
A third function in which the logic to fetch all the tasks is written. An empty array has been created, after this for loop has been used and all the tasks have been pushed into the array. And the array has been returned.

<!-- removeNotes function for remove the task from localstorage -->
The fourth function has been written in which the logic to detect the task has been written in which the filter method has been used with the help of unique key. Then I have set the filtered task with setState and removed the task with the unique key.

<!-- creaet form for add task using Bootstrap -->
Jsx in which I have created a form with bootstrap to add the task and have written some logic and the second component. Imported it and added it and exported allNotes and removeNotes functions with the help of props


<!-- Second Component -->
<!-- handleDelete function for remove the tsak -->
In the second componet NoteItems component, first of all props are received, then handleDelete is a function in which removeNotes function is called.

<!-- Jsx for create card -->
jsx in which card is created to view the task item.