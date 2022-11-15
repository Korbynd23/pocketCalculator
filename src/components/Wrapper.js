import React from 'react';
import '../styles/app.css';

const Wrapper = ({ children, }) => {
    return (
        <div className='wrapper'>{children}</div>
    )
}

export default Wrapper