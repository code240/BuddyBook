import React from "react";
import { useHistory } from "react-router-dom";
import "../../../AllCss/Question.css";
import Data from "./Data/QuestionData";


const Question = (props) => {
    console.log(props.data.questionText);
    let history = useHistory();
    let mainPlayer = sessionStorage.getItem("mainPlayer");
    let Player = sessionStorage.getItem("Player");
    if (mainPlayer == null) {
        history.push("/");
        return false;
    }
    if (Player == null) {
        history.push("/");
        return false;
    }
    const valid = () => {
        let name = document.getElementById('answer').value;
        name = name.trim();
        if(name===""){
            alert("Enter your Answer");
            return false;
        }else{
            var len = name.length;
            if(len < 1 || len > 1000){
                alert("1 to 1000 charactres only");
                return false;
            } 
        }
        return true;
    }
    const saveRecord = () => {
        let validation = valid();
        if(validation){       
            var question = document.getElementById("qno").value;
            var answer = document.getElementById("answer").value;
            sessionStorage.setItem(question,answer);
            history.push(props.data.next);
        }
    }
    return (
        <>
            <div className="container-fluid gameStart-Body">
                <div className="container-fluid main-question-div">
                    <div className="container-fluid question-div">
                        <div className="container-fluid for-image">
                            <img
                                src={props.data.questionImage}
                                alt="buddy-book question"
                                className="question-image"
                            />
                        </div>
                        <h1 className="my-question" id="hh">{props.data.question}?</h1>
                        <input type="text" autoComplete="off" title="Answer must be between 1 to 1000 characters" id="answer" className="input-answer" placeholder="Answer here..." />
                        <input type="hidden" value={props.data.questionNumber} id="qno" />
                        <button className="btn btn-next" onClick={()=>saveRecord(Data)}>Next</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Question;

