import React, { useState } from "react";
import Input from "./Input.jsx";
import InputAcceptButton from "./InputAcceptButton.jsx";
import TodoShowerContainer from "./TodoShowerContainer.jsx";
import "../Style/TodoContainer.css";
import Todos from "./Todos";

let onChangeValue;

function Inputchange(e) {
  onChangeValue = e.target.value;
}

export default function TodoContainer() {
  const [PlaceHolder, setPlaceHolder] = useState("Todo is Empty");
  const [TodosArry, setTodosArry] = useState(<h1>Todo is Empty</h1>);
  const [Key, setKey] = useState(0);
  const [TodoListarry, setTodoListarry] = useState([]);

  function AddButunClick() {
    if (onChangeValue == undefined) {
      alert("Input Is Empty");
    } else {
      setTodoListarry([...TodoListarry, onChangeValue]);
    }
  }
  console.log(TodoListarry.length,Key);
  if (TodoListarry.length == 0) {
    
  }  else if( TodoListarry.length == Key + 1) {
    setKey(Key + 1);
    let tempVal = TodoListarry.map((e) => {
      return <Todos PlaceHolder={e} mykey={Key } />;
    })
  
    setTodosArry(
      tempVal
    );
  }
  
  return (
    <div id="TodoContainer" >
      <h1 id="MangeHeading">Manage Your Todos</h1>
      <div id="InputAndAddButnDiv">
        <Input
          PlaceHolder={PlaceHolder}
          id="TodosInput"
          onChange={Inputchange}
          Inkey ={64376}
        />
        <InputAcceptButton ButnId="AddButtonid" onClick={AddButunClick} />
      </div>
      <TodoShowerContainer TodosArray={TodosArry} mykey ={998}/>

    </div>
  );
}
