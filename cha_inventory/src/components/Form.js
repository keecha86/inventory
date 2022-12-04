import React, { useState } from "react";
import Button from "./Button";

function Form(prop) {
  const [itemInput, setItemInput] = useState('')

  const inputHandler = (e) => {
    setItemInput(e.target.value)
  }
  return <form>
    <input onChange={inputHandler} value={itemInput}/>
    <Button  btnName={prop.btnNameValue} clickHandler={prop.clickHandler} itemInput={itemInput}/>
  </form>;
}

export default Form;
