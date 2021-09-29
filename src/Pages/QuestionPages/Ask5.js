import React from 'react'
import Header from '../Component/CommonComponent/Header';
import Question from '../Component/CommonComponent/Question';
import Data from '../Component/CommonComponent/Data/QuestionData';
const Ask5 = () => {
    return (
        <>
            <Header active="i6" />
            <Question data={Data[4]} />
        </>
    )
}

export default Ask5;
