import React from 'react'

const Todo = (props) => {
    let completeCheckClass = "not-complete";
    if(props.todo.completed){
        completeCheckClass = "complete";
    }

    function addCompletedStatus(){
        props.toggleCompleted(props.todo.id);
    }
    return (
        <section className={completeCheckClass} onClick={addCompletedStatus}>
            <h2>{props.todo.task}</h2>
        </section>
    )
}

export default Todo