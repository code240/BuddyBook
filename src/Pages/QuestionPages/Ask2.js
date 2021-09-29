import React from 'react'
import Header from '../Component/CommonComponent/Header';
import Question from '../Component/CommonComponent/Question';
import Data from '../Component/CommonComponent/Data/QuestionData';
const Ask2 = () => {
    return (
        <>
            <Header active="i6" />
            <Question data={Data[1]} />
        </>
    )
}

export default Ask2;
