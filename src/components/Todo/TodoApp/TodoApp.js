import React from 'react';
import './TodoApp.css';
class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, name:'Show demo for react application.', isComplete: true},
        {id: 2, name:'Ship it.', isComplete: false},
        {id: 3, name:'Build an awesome App!', isComplete: true}
      ]
    };
  }
  getItems() {
    return this.state.todos.map((eachTodo) => {
      return <li key={eachTodo.id}>
        <input type="checkbox" defaultChecked={eachTodo.isComplete} />
        {eachTodo.name}
      </li>;
    });
  }
  render() {
    return <div className="TodoApp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <section className="main">
        <input type="text" placeholder="What needs to be done?" className="main-input" />
        <div className="results">
          <ul>
            {this.getItems()}
          </ul>
        </div>
      </section>
    </div>;
  }
}

export default TodoApp;