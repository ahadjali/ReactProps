import { AiOutlineFileAdd } from "react-icons/ai";

const AddTodo = () => {
    return (
        <div>
            <input type = "text" placeholder="Add your new todo" />
            <button><AiOutlineFileAdd /></button>
        </div>
    );
};

export default AddTodo;