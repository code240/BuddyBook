import React from 'react'
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    let history = useHistory();
    setTimeout(()=>{
        history.push('/');
    },1000);
    return (
        <div>
            <h1>
                Page Not Found
            </h1>
        </div>
    )
}

export default NotFound;