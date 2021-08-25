import React, { useState, useEffect } from 'react';
import { ToDoForm } from '../components/ToDoForm';
import { ToDoList } from '../components/ToDoList';
import { iTodo } from '../interfaces';

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<iTodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as iTodo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: iTodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
        console.log(todo.completed);
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm(
      'Вы уверены, что хотите удалить элемент?'
    );
    if (shouldRemove) setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <ToDoForm onAdd={addHandler} />

      <ToDoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
};
