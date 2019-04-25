import React from 'react'

const TodoForm = (props) => {
    return (
        <section className="form-section">
            <form onSubmit={props.addTask}>
                <input className="input-1" placeholder='Add WORK Here' value={props.todoForm.task} onChange={props.handleChanges} name="task"></input>
                <button className="buttons b-1" type="submit">Make More Work</button>
                <button className="buttons b-2"type="button" onClick={props.removeSelected}>Clear Completed</button>
            </form>
        </section>
    )
}

export default TodoForm