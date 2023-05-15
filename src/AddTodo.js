//To perform common actions such as clearing out an input's value or focusing our input we can use what's called a ref.
// A ref is a feature that React provides to reference to a given DOM element. 

//Refs is the shorthand used for references in React.
//  It is similar to keys in React. It is an attribute which
//  makes it possible to store a reference to particular DOM nodes or React elements.
//   It provides a way to access React DOM nodes or React elements and how to interact with it.


import React, {useRef} from 'react'

function AddTodo({setTodos1}) {

const inputRef = useRef()

    function handleAddTodo(e) {
      e.preventDefault();
      const text =e.target.elements.addTodo.value;
      const todo1={
        id:4,
        text,
        done:false
      };
      setTodos1(prevTodos=>{
        return prevTodos.concat(todo1)
      })   // 
      inputRef.current.value=" ";
    //   console.log(inputRef.current);
    }
  return (
    <>

<form onSubmit={handleAddTodo}>
<input type="text" name="addTodo" id=""  placeholder='Add todo' ref={inputRef}/>
<button type='submit'>Submit</button>

</form>

</>
  )
}

export default AddTodo

// Getting Data From the React Input

// To get form data from an uncontrolled input field, 
// React lets us use a ref to access the input DOM element and pull value from the DOM.

// import { useRef } from "react";

// const UncontrolledForm = () => {
//   const ref = useRef();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(ref.current.value);
//   };
//   return (
//     <>
//       <h1>Uncontrolled Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           First Name: <input type="text" ref={ref} />
//         </label>
//         <input type="submit" />
//       </form>
//     </>
//   );
// };
// export default UncontrolledForm;