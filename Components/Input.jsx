function Input({ PlaceHolder, id,onChange ,Inkey }) {
  return <input type="text" placeholder={PlaceHolder} id={id} onChange={onChange} key={Inkey}/>;
}

export default Input;
