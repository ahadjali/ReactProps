import { AiOutlineDelete } from 'react-icons/ai'

const TodoItem = ({ todo, deleteTodo }) => {
    return (
        <div className="todo-item">
            <p> {todo.title} </p>
            <button onClick = {() => deleteTodo(todo.id)}><AiOutlineDelete /></button>
        </div>
    );
};

export default TodoItem;