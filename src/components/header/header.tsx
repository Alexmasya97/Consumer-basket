import React, { useEffect, useState } from 'react';
import Logo from '../logo/logo'
import { Link } from 'react-router-dom'
import ButtonBasket from '../btn-basket/btn-basket';

export default function Header() {

    return (
        <header>

            <Link to="/"><Logo /></Link>

            <div className='user-wish'>

                <button className="like">
                    <svg className="like__svg" width="22.000000" height="20.000000" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M11 1.65C13.58 -0.63 17.57 -0.56 20.06 1.9C22.55 4.35 22.64 8.26 20.32 10.81L10.99 20L1.67 10.81C-0.65 8.26 -0.56 4.34 1.93 1.9C4.42 -0.55 8.4 -0.64 11 1.65ZM18.5 3.42C16.85 1.8 14.19 1.73 12.47 3.26L11 4.56L9.53 3.26C7.79 1.73 5.14 1.8 3.48 3.43C1.85 5.04 1.76 7.62 3.27 9.32L10.99 16.93L18.72 9.33C20.23 7.62 20.15 5.04 18.5 3.42Z" fill="#838383" fill-opacity="1.000000" fill-rule="nonzero" />
                    </svg>

                    <span className="like__count">2</span>
                    <span className="visually-hidden">Избранное</span>
                </button>

                <Link to="/basket-page">

                    <ButtonBasket />

                </Link>
            </div>

        </header>
    )
}
