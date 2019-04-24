import React from 'react'

const Todo = (props) => {
    return (
        <section>
            <h2>{props.todo.task}</h2>
        </section>
    )
}

export default Todo