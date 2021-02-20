import "./styles/App.css";
import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { conn } from "./firebase_config";
import firebase from "firebase";
import TodoItemList from "./Todo";
function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  //Geat todo items on load
  useEffect(() => {
    getAllTodos();
  }, []);
  const getAllTodos = () => {
    conn.collection("todos").onSnapshot((snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          isfinished: doc.data().isfinished,
          item: doc.data().item,
        }))
      );
    });
  };
  //Set to database
  const addTodo = (e) => {
    e.preventDefault();
    conn.collection("todos").add({
      createdtime: firebase.firestore.FieldValue.serverTimestamp(),
      isfinished: false,
      item: todoInput,
    });
    //Reset text field on return
    setTodoInput("");
  };
  return (
    <div className="App container">
      <div>
        <h1>
          Todo<span style={{ color: "rebeccapurple" }}>.</span>
        </h1>
        <p style={{ color: "grey", marginTop: "-20px" }}>
          Type in an item and hit return
        </p>
        <form>
          <TextField
            id="standard-basic"
            label="New todo"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            style={{ maxWidth: "300px", width: "90vw" }}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={addTodo}
            style={{ display: "none" }}
          >
            Add
          </Button>
        </form>
        {todos.map((todo) => (
          <TodoItemList
            item={todo.item}
            isfinished={todo.isfinished}
            id={todo.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
