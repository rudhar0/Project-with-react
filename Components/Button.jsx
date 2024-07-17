


function Button({ButtonImg,Title,clickFun}) {
  console.log(Title);
  return <button className="Button" onClick={clickFun} title={Title}>
    <img src={ButtonImg} className="ButtonImg" alt="" />
  </button>;
}

export default Button;
