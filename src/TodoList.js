import React from "react";


function TodoList({todos1, setTodo1}) { // here we have did props destructuring passing props name in { }.
  // console.log(props.todos);

  function handleToggleTodo (todo){       //  In this case, our function that we use to handle  
                                         /// the event doesn't have to receive any event data. 
  
  
  setTodo1()                             ///This function will handle updating our todo's state.
                                     
  }

  return (
    <>
    <ul>
      {todos1.map((todo) => (
        <li onClick={()=>handleToggleTodo(todo) } style={{textDecoration:todo.done?'line-through':" "}} key={todo.id}> {todo.text}</li>
      ))}  
      {/*  you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code. */}
    </ul>
    
</>
  );
}

export default TodoList;


// How to Get Individual Props with Destructuring:-
// Note that one additional shorthand is that instead of
//  referencing the entire object within the TodoList,
//   we can reference the individual properties on that
//    object to make our code a little bit shorter by using object destructuring.


    // Object destructuring :-
    
    // it is not a React concept,
    //  but a standard JavaScript feature that makes
    //   accessing object properties easier by immediately
    //    declaring them as individual variables.

//     What is object Destructuring in JavaScript?
// JavaScript Object Destructuring is an expression which allows
//  us to access the data from objects like arrays, objects,
//   maps and assign it to new variables. Through this object 
//   destructuring, we can create variables easily from the object's properties

// let { property1: variable1, property2: variable2 } = object;

// Code language: JavaScript (javascript)

// The identifier before the colon (:) is the property of the object and the identifier after the colon is the variable.

// Notice that the property name is always on the left whether it’s an object literal or object destructuring syntax.

// If the variables have the same names as the properties of the object, you can make the code more concise as follows:

// let { firstName, lastName } = person;

