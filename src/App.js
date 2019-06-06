import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';

import "./components/TodoComponents/Todo.css"

// const initialTodo = [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   }
// ];

class App extends React.Component {
    constructor(){
      super()
      this.state = {
        // todoList: initialTodo,
        todoList: [],
        todoElements: {
          task: '',
          id: '',
          completed: false,
        }
      }
    }
  
  handleChanges = event => {
    // console.log(event.target);
    this.setState({
        todoElements: {
          [event.target.name]: event.target.value,
        },
      }
    )
  }

  addTask = (event) => {
    event.preventDefault();
    if(this.state.todoElements.task==="") return
    // console.log(this.state.todoElements)
    this.setState({
      todoList: [...this.state.todoList,  {
        ...this.state.todoElements,
        id: Date.now(),
      }],
      todoElements: {
        task: '',
        id: '',
        completed: false,
      }
    })
  }

  toggleCompleted = (id) => {
    // console.log(this)
    this.setState({
      todoList: this.state.todoList.map((todo => {
        return todo.id === id ?{...todo, completed: !todo.completed}:todo
      }))
    })
  }

  removeSelected = () =>{
    this.setState({
      todoList: this.state.todoList.filter(todo => !todo.completed)
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="container">
        <h2>Welcome to your Todo App!</h2>
        <section>
          <TodoForm todoForm={this.state.todoElements} handleChanges={this.handleChanges} addTask={this.addTask} removeSelected={this.removeSelected} />
        </section>
        <section className="list-container">
          <TodoList todoList={this.state.todoList} toggleCompleted={this.toggleCompleted} />
        </section>
      </div>
    );
  }
}

export default App;
