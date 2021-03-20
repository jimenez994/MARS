import React from "react";
import ReactDom from "react-dom";
import ToDoList from "./toDoList/toDoList"

const App = () => {
  return (
    <div>
      <ToDoList/>
    </div>
  )
}

ReactDom.render(<App/>, document.querySelector("#root"))