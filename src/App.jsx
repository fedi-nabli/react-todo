import { useState, useEffect } from 'react'
import Input from './components/Input'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setTodos([])

    for (let i = 0; i < 20; i++) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
      .then(response => response.json())
      .then(json => initTodo(json))
    }
  }, [])

  const initTodo = (todo) => {
    const newTodoItem = {
      id: todo.id,
      title: todo.title,
      completed: todo.completed
    }

    setTodos((prevTodos) => [...prevTodos, newTodoItem])
  }

  const addTodo = (title) => {
    const newTodoItem = {
      id: todos.length + 1,
      title,
      completed: false
    }

    setTodos((prevTodos) => [...prevTodos, newTodoItem])
  }

  const toggleCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
        <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Todo List</h1>
          <Input addTodo={addTodo} />
          <div className="mt-6 space-y-4">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todoTitle={todo.title}
                completed={todo.completed}
                toggleCompletion={() => toggleCompletion(todo.id)}
                deleteTodo={() => deleteItem(todo.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
