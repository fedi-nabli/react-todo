const TodoItem = ({ todoTitle, completed, toggleCompletion, deleteTodo }) => {
  return (
    <div className="w-full p-4 bg-gray-100 shadow-md rounded-lg flex items-center" onClick={toggleCompletion }>
      <p
        className={`text-lg ${
          completed ? 'line-through text-gray-400' : 'text-black'
        }`}
      >
        {todoTitle}
      </p>
      <p className="ml-auto text-sm text-gray-500">
        {completed ? 'Completed' : 'Pending'}
      </p>
      <button className="ml-2" onClick={deleteTodo}>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={deleteTodo} width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
      </button>
    </div>
  )
}

export default TodoItem
