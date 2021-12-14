import React from 'react';
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <>
        <h1>Oops!</h1>
        <h4>It looks like you arrived at this page in error</h4>
        <h4>Click <Link to='/'>here</Link> to go back</h4>
        </>
    )
}
