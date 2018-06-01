import { types } from "mobx-state-tree";

export const Todo = types
  .model("Todo", {
    id: types.optional(types.number, () => Math.random()),
    title: types.string,
    finished: types.boolean
  })
  .actions(self => ({
    toggle() {
      self.finished = !self.finished;
    }
  }));

export const TodoStore = types
  .model("TodoStore", {
    todos: types.array(Todo)
  })
  .views(self => ({
    get unfinishedTodoCount() {
      return self.todos.filter(todo => !todo.finished).length;
    },
    allChecked(checked){
      return self.todos.setChecked(checked);
    }
  }))
  .actions(self => ({
    addTodo(title) {
      self.todos.push({ title, finished: false });
    },
    delTodo(item) {
      self.todos.splice(self.todos.indexOf(item), 1);
    },
    setChecked(checked){
      self.todos.forEach(todo => todo.finished = checked);
    }
  }));
