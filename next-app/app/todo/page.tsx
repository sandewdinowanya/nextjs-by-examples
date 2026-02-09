import React from 'react'

interface Todo{
  id: number;
  title: string;
}

const todo = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todolist: Todo[] = await res.json();

  return (
    <>
      <h1>todo</h1>
      <ul>
        {todolist.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </>
  )
}

export default todo