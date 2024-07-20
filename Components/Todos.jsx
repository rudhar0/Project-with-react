import React from 'react'
import Input from './Input.jsx'
import EditORDeleteButton from './EditORDeleteButton.jsx'
import '../Style/Todos.css'

function Todos({PlaceHolder,mykey}) {

  return (
    <div id='Todos'  key={mykey}>
        <Input PlaceHolder = {PlaceHolder} Inkey={mykey + 1} id="TodoInputAndOutput"/>
        <EditORDeleteButton ButtonValue = {"Edit"} Btnkey={mykey + 2}  id ="EditDeltButnID"/>
        <EditORDeleteButton ButtonValue = {"Delete"} Btnkey={mykey + 3} id = "EditDeltButnID"/>
    </div>
    
  )
}

export default Todos
