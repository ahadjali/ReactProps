
import TodoItem from './TodoItem';

const TodoList = ({ todos, firstName = "Anis", sayHello, children, deleteTodo }) => {
    console.log(children);
    /*props.sayHello();*/
    return (
        <div className="todo-list">
            <h1>{firstName}</h1>
            {children}
            <button onClick={sayHello}> CLICK !!! </button>
            {todos.map((el) => <TodoItem todo={el} key={el.id} deleteTodo={deleteTodo} />)}
        </div>
    );
};

export default TodoList;