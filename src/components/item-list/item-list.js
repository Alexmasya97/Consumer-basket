import React from 'react'


export default function ItemList() {
    return (
        <main>
            <h2 className='item-list__title'>Наушники</h2>
            <ul className="item-list">
                <li className="item">
                    <div className="item__image">
                        <img src='./img/id1.webp' alt="Apple BYZ S852I" width="220" height="237" />
                    </div>
                    <div className="item__top-info">
                        <h3 className="item__title">
                            <a href="#">Apple BYZ S852I</a>
                        </h3>
                        <p className="item__price">2927 ₽</p>
                    </div>
                    <div className="item__bottom-info">
                        <span className="item__rate">4.7</span>
                        <button className="item__btn">Купить</button>
                    </div>
                </li>

                <li className="item">
                    <div className="item__image">
                        <img src='./img/id2.webp' alt="Exployd EX-HP-1370" width="350" height="407" />
                    </div>
                    <div className="item__top-info">
                        <h3 className="item__title">
                            <a href="#">Exployd EX-HP-1370</a>
                        </h3>
                        <p className="item__price">70 ₽</p>
                    </div>
                    <div className="item__bottom-info">
                        <span className="item__rate">4.5</span>
                        <button className="item__btn">Купить</button>
                    </div>
                </li>

                <li className="item">
                    <div className="item__image">
                        <img src='./img/id3.webp' alt="Smartbuy S4" width="350" height="407" />
                    </div>
                    <div className="item__top-info">
                        <h3 className="item__title">
                            <a href="#">Smartbuy S4</a>
                        </h3>
                        <p className="item__price">70 ₽</p>
                    </div>
                    <div className="item__bottom-info">
                        <span className="item__rate">4.2</span>
                        <button className="item__btn">Купить</button>
                    </div>
                </li>
                <li className="item">
                    <div className="item__image">
                        <img src='./img/id1.webp' alt="Apple BYZ S852I" width="220" height="237" />
                    </div>
                    <div className="item__top-info">
                        <h3 className="item__title">
                            <a href="#">Apple BYZ S852I</a>
                        </h3>
                        <p className="item__price">2927 ₽</p>
                    </div>
                    <div className="item__bottom-info">
                        <span className="item__rate">4.7</span>
                        <button className="item__btn">Купить</button>
                    </div>
                </li>

                <li className="item">
                    <div className="item__image">
                        <img src='./img/id2.webp' alt="Exployd EX-HP-1370" width="350" height="407" />
                    </div>
                    <div className="item__top-info">
                        <h3 className="item__title">
                            <a href="#">Exployd EX-HP-1370</a>
                        </h3>
                        <p className="item__price">70 ₽</p>
                    </div>
                    <div className="item__bottom-info">
                        <span className="item__rate">4.5</span>
                        <button className="item__btn">Купить</button>
                    </div>
                </li>

                <li className="item">
                    <div className="item__image">
                        <img src='./img/id3.webp' alt="Smartbuy S4" width="350" height="407" />
                    </div>
                    <div className="item__top-info">
                        <h3 className="item__title">
                            <a href="#">Smartbuy S4</a>
                        </h3>
                        <p className="item__price">70 ₽</p>
                    </div>
                    <div className="item__bottom-info">
                        <span className="item__rate">4.2</span>
                        <button className="item__btn">Купить</button>
                    </div>
                </li>

            </ul>
        </main>

    )
}