import React, { useRef } from "react"

const NewTodo = () => {
    const input = useRef<HTMLInputElement>(null);
    const submitHandler = (event : React.FormEvent) => {
        event.preventDefault();
        const enteredText = input.current!.value;
        // const enteredText = input.current?.value;
        if(enteredText.trim().length === 0) {
          return;
        }
    }
  return (
    <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={input} />
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo