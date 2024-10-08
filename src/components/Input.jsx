import { useState } from 'react'

const Input = ({ addTodo }) => {
  const [title, setTtile] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    if (title.trim()) {
      addTodo(title)
      setTtile('')
    }
  }

  return (
    <>
      <form onSubmit={submitForm} className="flex flex-col items-center space-y-4 p-4 bg-gray-100 shadow-md rounded-lg max-w-sm mx-auto mb-10">
        <input
          type="text"
          value={title}
          onChange={(e) => setTtile(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a task"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </form>
    </>
  )
}

export default Input
