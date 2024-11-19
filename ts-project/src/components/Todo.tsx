import React from "react";
import TodoList from "../models/TodoList";
import ListItem from "./ListItem";
import NewTodo from "./NewTodo";

const Todo: React.FC<{ items: TodoList[] }> = (props) => {
  return (
    <>
      <NewTodo />
      <ul>
        {props.items.map((item) => (
          <ListItem key={item.id} text={item.text} />
        ))}
      </ul>
    </>
  );
};

export default Todo;

// import React from "react";

// const Todo: React.FC<{ items: { task: string }[]  }> = (props) => {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <li>{item.task}</li>
//       ))}
//     </ul>
//   );
// };

// export default Todo;
