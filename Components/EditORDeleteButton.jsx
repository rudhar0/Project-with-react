import React from 'react'

function EditORDeleteButton({ButtonValue , id ,Btnkey}) {
  return (
<button id ={id} key={Btnkey}>{ButtonValue} </button>
  )
}

export default EditORDeleteButton