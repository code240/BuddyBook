import React from 'react'
import { useHistory } from 'react-router-dom';
import "../../AllCss/Face.css";

function StartPlay(props) {
    let history = useHistory();
    sessionStorage.setItem("mainPlayer",props.player);
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
