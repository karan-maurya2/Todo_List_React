
import React,{useState} from 'react'
import Todo from './TodoList';
import AddTodo from './AddTodo';


function App() {

  const [todos, setTodos] = useState( [
    { id: 1, text: "Wash dishes", done: true },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: true }
  ])


  
  return (
    <div className="App">
      
      <h1>Todo List</h1>
      <Todo todos1={todos}/>
      <AddTodo setTodos1={setTodos}/>
    </div>
  );
}

export default App;

// Props are custom attributes(todos, it can be any name) we can add to
//  React components to pass data to our components. 
//  They are the React equivalent of arguments in JavaScript. 


// If we look at the console tab at the bottom we will see a warning, saying each child in the list should have a "unique key prop." 
// The reason for this is that React needs to keep track of the order of each of the items in our list. It does so with the help of a special React prop called a key. 
// It is important for React to figure out how it should appropriately update our user interface. If we were to update a todo's text or done value, the key is what tells React which todo item needs to be updated.
// Once we add the key prop to the element or component that we're looping over, we no longer get that warning: 