import { TodoItem } from "./TodoItem";

import { ITodo } from "../types/data";

interface ITodoListProps {
  todos: ITodo[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, onToggleTodo, onDeleteTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
          {...todo} 
        />
      ))}
    </div>
  )
}

export { TodoList }