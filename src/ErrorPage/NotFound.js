import React from 'react'
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    let history = useHistory();
    history.push('/');
    return (
        <div>
            <h1>
                  
            </h1>
        </div>
    )
}

export default NotFound;