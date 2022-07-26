import { useState, useEffect, useRef, KeyboardEventHandler } from 'react';
import { ITodo } from '../types/data';
import { TodoList } from './TodoList';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  }

  const addTodo = () => {
    if (value) {
      const todo: ITodo = {
        id: Date.now(),
        title: value,
        done: false
      }
      setTodos([...todos, todo]);
      setValue('');
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) {
        return todo;
      }

      return {
        ...todo,
        done: !todo.done
      }
    }));
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <div>
        <input 
          ref={inputRef} 
          value={value} 
          onKeyDown={handleKeyDown}
          onChange={handleChange} 
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList 
        todos={todos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />
    </>
  )
}

export { App }