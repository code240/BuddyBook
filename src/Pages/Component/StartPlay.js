import React from 'react'
import { useHistory } from 'react-router-dom';
import "../../AllCss/Face.css";

function StartPlay(props) {
    let history = useHistory();
    let mainPlayerName = props.player;
    sessionStorage.setItem("mainPlayer",mainPlayerName);

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
      let cookiedata = getCookie("load");
      
      if(cookiedata===""){
          setCookie("load","error_checking","1");
          setTimeout(()=>{
            window.location.reload();
          },1000);
        }
      
    return (
        <>
            <div className="container-fluid face-main">
                <h1 className="main-face-heading">
                    <span className="r">W</span>hat You <span className="r">T</span>hink About <span className="r player-name">{props.player}</span>?
                </h1>
                <div className="container-fluid background-image"></div>
                <span className="text-create">
                    Answer These <span className="r">9</span> Questions for <span className="r">{props.player}</span> 
                </span>
                <span className="text-create text-infoo">
                    After answering, Don't forget to share screenshot to {props.player}.
                </span>
                <button className="play-btn btn " onClick={()=> history.push('/Entry')} >Play Now</button>


                <span className="text-create text-infoo text-ask-for-play">
                    Do you want to create your Question book?    
                </span>
                <button className="create-btn btn btn-success create-btn-on-play-page" onClick={()=> history.push('/Create')} >Create Now</button>
            </div>
        </>
    )
}

export default StartPlay;
