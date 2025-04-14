import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFound() {
    return (
            <div className='not-found'>
                <Link to="/">
                        <p>Not Found 404</p>
                        <p>Go to the main page</p>
                </Link>
                </div>
    )}

