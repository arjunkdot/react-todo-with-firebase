import React from "react";
import "./styles/Todo.css";
import { Button, ListItem, ListItemText } from "@material-ui/core";
import { conn } from "./firebase_config";
export default function TodoItemList({ item, isfinished, id }) {
  //Toggle finished status
  const toggleFinished = () => {
    conn.collection("todos").doc(id).update({ isfinished: !isfinished });
  };
  //Delete item
  const deleteTodo = () => {
    conn.collection("todos").doc(id).delete();
  };
  return (
    <div className="list-container">
      <ListItem style={{ padding: "10px 0px" }}>
        <ListItemText
          primary={item}
          secondary={isfinished ? "Completed" : "Due"}
          className={isfinished ? "strikethrough" : ""}
        />
      </ListItem>
      <Button color="primary" onClick={toggleFinished}>
        {isfinished ? "Undo" : "Done"}
      </Button>
      <Button color="secondary" onClick={deleteTodo}>
        Delete
      </Button>
    </div>
  );
}
