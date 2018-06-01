import { observer } from "mobx-react";
import * as React from "react";
import { Button, Intent, Checkbox } from "@blueprintjs/core";

export const Todo = observer(({ todo, delTodo }) => {
  return (
    <li style={{ display: "flex", alignItems: "center", margin: "10px" }}>
      <div>
        <Checkbox checked={todo.finished} label={todo.title} onChange={todo.toggle} />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <Button
          type="button"
          intent={Intent.DANGER}
          onClick={delTodo.bind(this, todo)}
        >
          Delete
          <span className="pt-icon-standard pt-icon-cross pt-align-right" />
        </Button>
      </div>
    </li>
  );
});
