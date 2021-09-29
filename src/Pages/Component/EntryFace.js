import React from 'react'
import { useHistory } from 'react-router-dom';
import '../../AllCss/InputCreate.css';
const EntryFace = () => {
    let history = useHistory();
    let mainPlayer = sessionStorage.getItem("mainPlayer");
    if(mainPlayer==null){
        history.push('/');
        return false;
    }
    const player_entry = () => {
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
        history.push("/ask1");
    }

    return (
        <>
            <div className="container-fluid main-in-create">
                <div className="container-fluid div-for-form entry-face-form-div">
                    <span className="red-user"><i className="fas fa-user-alt"></i> </span>
                    <span className="enter-name-heading">Please enter your name before playing</span>
                    <input type="text" placeholder="Enter Your Name" title="3 to 20 characters" id="gamer" autoComplete="off" className="container-fluid input-create"></input>
                    <button className="btn btn-danger btn-create" onClick={()=> player_entry()}>Start</button>
                </div>
            </div> 
        </>
    )
}

export default EntryFace;
