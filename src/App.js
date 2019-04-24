import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';

const initialTodo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
    constructor(){
      super()
      this.state = {
        todoList: initialTodo,
        todoElements: {
          task: '',
          id: '',
          completed: '',
        }
      }
    }
  
  handleChanges = event => {
    this.setState({
        todoElements: {
          ...this.state.todoList,
          [event.target.name]: event.target.value,
        }
      }
    )
  }

  addTask = event => {
    event.preventDefault();
    this.setState({
      todoList: [...this.state.todoList, this.state.todoElements],
      todoElements: {
        task: '',
        id: '',
        completed: '',
      }
    })
  }

  // clearInput = event => {
  //   event.preventDefault();
  //   this.setState(){
 
  //   }
  // }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <section>
          <TodoList todoList={this.state.todoList} />
        </section>
        <section>
          <TodoForm todoForm={this.state.todoElements} handleChanges={this.handleChanges} addTask={this.addTask}/>
        </section>
        
      </div>
    );
  }
}

export default App;
