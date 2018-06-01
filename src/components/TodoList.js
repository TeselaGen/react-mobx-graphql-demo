import { observable } from "mobx";
import { observer, PropTypes } from "mobx-react";
import * as React from "react";
import { Button, Intent, Checkbox } from "@blueprintjs/core";
import { Todo } from "./Todo";

@observer
export class TodoList extends React.Component {
  @observable newTodoTitle = "";
  state = { selected: false };
  toggleSelected = () => {
    const selected = !this.state.selected;
    this.props.todoStore.setChecked(selected);
    this.setState({ selected: selected });
  };
  render() {
    const { todoStore } = this.props;
    return (
      <div style={{ display: "flex", flexDirection: "column", margin: "16px" }}>
        <div style={{ display: "flex" }}>
          <input
            className="pt-input"
            value={this.newTodoTitle}
            onChange={this.handleChange}
          />
          <div style={{ marginLeft: "10px" }}>
            <Button
              type="button"
              intent={Intent.SUCCESS}
              onClick={this.handleNewTodoClick}
            >
              Add
              <span className="pt-icon-standard pt-icon-plus pt-align-right" />
            </Button>
          </div>
        </div>
        <ul>
          <div>
            <Checkbox
              checked={this.state.selected}
              label="Seleccionar todos"
              onChange={this.toggleSelected.bind(this)}
            />
          </div>
          {todoStore.todos.map(todo => (
            <Todo delTodo={todoStore.delTodo} todo={todo} key={todo.id} />
          ))}
        </ul>
        <div>Tasks left: {todoStore.unfinishedTodoCount}</div>
      </div>
    );
  }

  handleChange = e => {
    this.newTodoTitle = e.target.value;
  };

  handleNewTodoClick = e => {
    e.stopPropagation();
    this.props.todoStore.addTodo(this.newTodoTitle);
    this.newTodoTitle = "";
  };
}

TodoList.propTypes = {
  todoStore: PropTypes.objectOrObservableObject
};
