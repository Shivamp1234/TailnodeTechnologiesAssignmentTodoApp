import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
    return (
        <>
            <div className='todo-container'>
                <ul>
                    {
                        todos.map((todo, index) => (
                            <Todo key={index} todo={todo} text={todo.text} todos={todos} setTodos={setTodos} />
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default TodoList