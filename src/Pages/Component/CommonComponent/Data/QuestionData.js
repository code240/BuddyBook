var mainPlayer = sessionStorage.getItem("mainPlayer");
const Data = [
    {
        questionNumber : "q1",
        question : `Any nickname for ${mainPlayer}`,
        questionImage : "media/q01.png",
        next : "ask2",
    },
    {
        questionNumber : "q2",
        question : `Colour which suits on ${mainPlayer}`,
        questionImage : "media/q02.png",
        next : "/ask3",
    },
    {
        questionNumber : "q3",
        question : `One Thing You Like in ${mainPlayer}`,
        questionImage : "media/q03.png",
        next : "/ask4",
    },
    {
        questionNumber : "q4",
        question : `One Thing You Dislike in ${mainPlayer}`,
        questionImage : "media/q04.png",
        next : "/ask5",
    },
    {
        questionNumber : "q5",
        question : `Things that are similar in You and ${mainPlayer}`,
        questionImage : "media/q05.png",
        next : "/ask6",
    },
    {
        questionNumber : "q6",
        question : `Any sweet memories with ${mainPlayer}`,
        questionImage : "media/q06.png",
        next : "/ask7",
    },
    {
        questionNumber : "q7",
        question : `Your relationship with ${mainPlayer}`,
        questionImage : "media/q07.png",
        next : "/ask8",
    },
    {
        questionNumber : "q8",
        question : `Any song dedicated for ${mainPlayer}`,
        questionImage : "media/q08.png",
        next : "/ask9",
    },
    {
        questionNumber : "q9",
        question : `Can I post Your Answers in story`,
        questionImage : "media/q09.png",
        next : "/result",
    },
]
export default Data;