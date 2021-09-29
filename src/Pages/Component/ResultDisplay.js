import React from "react";
import { useHistory } from "react-router-dom";
import "../../AllCss/ResultDisplay.css";


const ResultDisplay = (props) => {
    let history = useHistory();
    let ans1 = sessionStorage.getItem("q1");
    let ans2 = sessionStorage.getItem("q2");
    let ans3 = sessionStorage.getItem("q3");
    let ans4 = sessionStorage.getItem("q4");
    let ans5 = sessionStorage.getItem("q5");
    let ans6 = sessionStorage.getItem("q6");
    let ans7 = sessionStorage.getItem("q7");
    let ans8 = sessionStorage.getItem("q8");
    let ans9 = sessionStorage.getItem("q9");
    let mainPlayer = sessionStorage.getItem("mainPlayer");
    let Player = sessionStorage.getItem("Player");
    if (
        ans1 === null ||
        ans2 === null ||
        ans3 === null ||
        ans4 === null ||
        ans5 === null ||
        ans6 === null ||
        ans7 === null ||
        ans8 === null ||
        ans9 === null ||
        Player === null ||
        mainPlayer === null
    ) {
        history.push("/");
    }

    return (
        <>
            <div className="result-body">
                <span className="screenshot-sign">
                    <i className="fas fa-camera"></i>
                </span>
                <span className="take-ss-text">
                    Now, Send Screenshot To{" "}
                    <span className="mainPlayer">{mainPlayer}</span>
                </span>
                <span className="take-ss-text given-by">
                    Answer given by <span className="mainPlayer">{Player}</span>
                </span>
                <div className="container-fluid main-result-show">
                    {props.data.map((currentElement) => {
                        return (
                            <div className="container-fluid result">
                                <div className="for-image-left">
                                    <img
                                        src={currentElement.questionImage}
                                        alt="buddy-book question-images"
                                        className="question-image-mini"
                                    />
                                </div>
                                <div className="for-content-right">
                                    <span className="question-text-mini">
                                        {currentElement.question}?
                                    </span>
                                    <span className="ans-text">Ans :</span>
                                    <span className="user-answer">
                                        {sessionStorage.getItem(currentElement.questionNumber)}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <span className="take-ss-text given-by">
                   These answer given by <span className="mainPlayer">{Player}</span>
                </span>
                <h3 className="your-turn">Now its your turn</h3>
                <button className="btn create-your-btn" onClick={()=>history.push("/create")}>
                    Create your question book
                </button>
            </div>
            <div className="black-screen" id="myalert">
                <div className="container-fluid alert-box">
                    <h6 className="alert-heading-ss">
                        Now Take a Screenshot and send it to <span className="mainPlayer-alert">{sessionStorage.getItem("mainPlayer")}</span>
                    </h6>
                    <button className="btn btn-primary Okay-btn" onClick={()=>dissmissalert()}>Okay</button>
                </div>
            </div>
        </>
    );
};

function dissmissalert(){
    document.getElementById("myalert").style.display = "none";
}
export default ResultDisplay;
