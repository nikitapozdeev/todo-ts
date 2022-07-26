import { ITodo } from "../types/data";

interface ITodoItemProps extends ITodo {
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({ id, title, done, onToggle, onDelete }) => {
  const handleToggle = () => onToggle(id);
  const handleDelete = () => onDelete(id);

  return (
    <div>
      <input 
        type="checkbox" 
        checked={done} 
        onChange={handleToggle} 
      />
      {title}
      <button onClick={handleDelete}>x</button>
    </div>
  )
}

export { TodoItem }