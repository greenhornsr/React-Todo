import React from 'react';
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = (props) => {
    return (
        <section className="list-content">
            {props.todoList.map(todo => {
                return <Todo todo={todo} key={todo.id} toggleCompleted={props.toggleCompleted} />
            })}
        </section>
    )
}

export default TodoList 