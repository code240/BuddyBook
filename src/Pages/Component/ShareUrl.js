import React from 'react'
import { useHistory } from 'react-router'

const ShareUrl = () => {
    let history = useHistory();
    let player = sessionStorage.getItem("Player");
    if(player==null){
        history.push('/');
    }
    let current_location = document.location.href;
    current_location = current_location.replace('share','play/');
    current_location = current_location.replace('Share','play/');
    let game_url = current_location + player;
    game_url = game_url.replace(' ','%20');
    let whatsapp_url = "whatsapp://send?text="+game_url;
    return (
        <>
            <div className="container-fluid main-in-create">
                <div className="container-fluid div-for-form">
                    <span className="red-user"><i className="fas fa-link"></i></span>
                    <span className="enter-name-heading">Copy this link and share with your friends</span>
                    <div className="container-fluid input-create show-url text-truncate" id="a">{game_url}</div>
                    <button className="btn btn-danger btn-create" onClick={()=>copy()}>Copy</button>
                    <a className="btn btn-back-home" href={whatsapp_url}><i className="fab fa-whatsapp"></i> Share to whatsapp</a>
                </div>
            </div>
            <span className="copied" id="notification-copy">Copoied!</span>
        </>
    )
}

function copy(){
        var range = document.createRange();
        range.selectNode(document.getElementById("a"));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");

        document.getElementById("notification-copy").style.display = "block";
        setTimeout(()=>{
        document.getElementById("notification-copy").style.display = "none";
        },1000);
        
}
export default ShareUrl
