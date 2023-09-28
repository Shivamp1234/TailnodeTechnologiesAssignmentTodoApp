import React, { useState } from 'react'
import './index.css'
import Form from './Components/Form'
import TodoList from './Components/TodoList'

const App = () => {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  return (
    <>
      <header>
        <h1>TODO LIST</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App