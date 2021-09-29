import React from 'react';
import "../../../AllCss/Header.css";
import { useHistory } from "react-router-dom";


const Header = (prop) => {
  let history = useHistory();
  let active = prop.active;   
  setTimeout(()=>{
    document.getElementById(active).classList.add('active');
  },100);
  
  return (
        <>
        <header className="head">
          <div className="left-div-for-logo">
            <span className="logo"><b className="firstS">B</b><i>uddies</i><b className="firstB">B</b><i>ook</i></span>
            <span className="bars" id="btn-shower" onClick={() => Show_ButtonBar()}><i className="fas fa-stream"></i></span>
            <span className="bars" id="btn-hider" onClick={() => Hide_ButtonBar()}><i className="fas fa-stream"></i></span>
          </div>
          <div className="right-div-for-btns" id="buttonbar">
            <button className="btn btn-header" id="i1"  onClick={()=>history.push('/')}>Home</button>
            <button className="btn btn-header" id="i2">Questions</button>
            <button className="btn btn-header" id="i3" onClick={()=>history.push('/create')}>Create</button>
            <button className="btn btn-header" id="i4">About</button>
            <button className="btn btn-header" id="i5">Contact</button>
            <button className="btn btn-header btn-try" onClick={()=>history.push('/create')}  id="i6">Try</button>
          </div>
        </header>
      </>
    );
}


const Show_ButtonBar = () => {
    document.getElementById('buttonbar').style.display = "block";
    document.getElementById('btn-shower').style.display = "none";
    document.getElementById('btn-hider').style.display = "block";
}
const Hide_ButtonBar = () => {
    document.getElementById('buttonbar').style.display = "none";
    document.getElementById('btn-shower').style.display = "block";
    document.getElementById('btn-hider').style.display = "none";
}
Header.defaultProps = {
  active : 'i1'
}
export default Header
