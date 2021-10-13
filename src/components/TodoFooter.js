const TodoFooter = ({ todos }) => {
    const pendingTodos = () => {
        return todos.filter( el => !el.isCompleted).length
    }

    return (
        <div className="todo-item">
            <p>You have {pendingTodos()} pending tasks</p>
            <button>Clear all</button>
        </div>
    );
};

export default TodoFooter;