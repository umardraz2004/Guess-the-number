import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./models/TodoList";

function App() {
  const todos = [
    new TodoList("Task 1"),
    new TodoList("Task 2"),
    new TodoList("Task 3"),
    new TodoList("Task 4"),
    new TodoList("Task 5"),
  ]
  return (
    <div>
      <Todo items={todos} />
    </div>
  );
}

export default App;
