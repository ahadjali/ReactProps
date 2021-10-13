import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const todos = [
    {
      id:uuidv4(),
      title:"Buy a new gaming laptop",
      isCompleted:false
    },
    {
      id:uuidv4(),
      title:"Complete a previous task",
      isCompleted:false
    },
    {
      id:uuidv4(),
      title:"Create video from youtube",
      isCompleted:true
    },
    {
      id:uuidv4(),
      title:"Create a portfolio site",
      isCompleted:false
    }
  ]

  const sayHello = () => {
    alert("HELLLLLLLLooo")
  };
 const deleteTodo = (id) => {
  console.log (id)
 };
  return (
    <div className="todo-list">
      <h1>To do list</h1>
      <AddTodo />
      <TodoList todos={todos} firstName = "Anis" sayHello={sayHello} deleteTodo={deleteTodo}>
          <p> Hello children props :D</p>
          <img src="/logo192.png" />
      </TodoList>
      <TodoFooter todos={todos} />
    </div>
  );
}

export default App;

// function FullName () {
//   return (
//   <h1> Anis HADJ</h1>
//   );
// }