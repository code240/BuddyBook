import React from 'react'
import { useHistory } from 'react-router-dom';
import "../../AllCss/InputCreate.css";


const InputCreate = () => {
    let history = useHistory();
    const CreateGame = () => {
        var name = document.getElementById('gamer').value;
        name = name.trim();
        if(name===""){
            alert("Enter your Name");
            return false;
        }else{
            var len = name.length;
            if(len < 3 || len > 20){
                alert("3 to 20 charactres only");
                return false;
            } 
        }
        sessionStorage.setItem("Player",name);
        history.push('/share');
    }
    return (
        <>
            <div className="container-fluid main-in-create">
                <div className="container-fluid div-for-form">
                    <span className="red-user"><i className="fas fa-user-alt"></i> </span>
                    <span className="enter-name-heading">Enter your name to play the game</span>
                    <input type="text" placeholder="Enter Your Name" title="3 to 20 characters" id="gamer" autoComplete="off" className="container-fluid input-create"></input>
                    <button className="btn btn-danger btn-create" onClick={()=>CreateGame()}>Create</button>
                    <b className="btn btn-back-home" onClick={()=>history.push('/')}><i className="fas fa-undo back-sign"></i> Back home</b>
                </div>
            </div>
        </>
    )
}


export default InputCreate

