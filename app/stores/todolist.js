import { observable, action } from 'mobx';

class Todolist {
  @observable todos = [
    {
      id: 1,
      title: 'Do something cool'
    },
    {
      id: 2,
      title: 'Implement Real-Time'
    }
  ];

  constructor() {
    this.addTodo = this.addTodo.bind(this);
  }

  @action addTodo(todo) {
    todo.id = this.todos.length + 1;
    this.todos.push(todo);
  }
}

export default new Todolist();
