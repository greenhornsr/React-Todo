import React from 'react'

const TodoForm = (props) => {
    return (
        <section>
            <form onSubmit={props.addTask}>
                <input placeholder='Add Task Here' value={props.todoForm.task} onChange={props.handleChanges} name="task"></input>
                <button type="submit">Add Todo</button>
                <button type="button">Clear Completed</button>
            </form>
        </section>
    )
}

export default TodoForm