import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [newtodo, setNewtodo] = useState([]);
  const [todoInput, settodoInput ] = useState("")

  const handleNewtodo = (event) => {

        settodoInput(event.target.value)
  }
  const addtodo = () => {
    setNewtodo((preVal) => [...preVal,todoInput])
    settodoInput("")
  }

  const deletetodo = (item) => {
    const filtertodo = newtodo.filter((todo) => todo !== item);
    setNewtodo(filtertodo)

  }

  return (
    <div>
      <div>Add a todo :</div>
      <input type="text" onChange={handleNewtodo} value={todoInput} placeholder="enter a todo" />
      <button type="submit" onClick={addtodo}>
        Submit
      </button>

      {newtodo.length > 0 ? (
        <div>
          {newtodo.map((item) => {
        
            return (<div key={item}>
                    <div>{item}</div>
                    <button onClick={() => deletetodo(item)}>delete</button>
                </div>
                );
          })}
        </div>
      ) : (
        <p>no todo found</p>
      )}
    </div>
  );
};
export default TodoList;
