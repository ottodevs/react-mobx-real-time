import './root.scss';

import React from 'react';
import DevTools from 'mobx-react-devtools';
import { observer } from 'mobx-react';

import todolist from '../../stores/todolist';

@observer
export default class Root extends React.Component {

  constructor() {
    super();

    this.handleNewTodo = this.handleNewTodo.bind(this);
  }

  componentDidMount() {
    this.addTodoInput.focus();
  }

  handleNewTodo(e) {
    e.preventDefault();
    todolist.addTodo({
      title: this.addTodoInput.value
    });

    e.target.reset();
  }

  renderTodos() {
    return todolist.todos.map((todo) => {
      return <li key={todo.id}>{todo.title}</li>;
    });
  }

  render() {
    return (
      <div className="root">
        { process.env.NODE_ENV === 'development' && <DevTools /> }

        <h1 className="root-heading">React - MobX - Real-Time!</h1>

        <ul className="todos">
          <li>
            <form onSubmit={ this.handleNewTodo }>
              <input type="text"
                     ref={ (ref) => (this.addTodoInput = ref) }
                     placeholder="What would you like to do?"
              />
            </form>
          </li>
          { this.renderTodos() }
        </ul>
      </div>
    );
  }
}
