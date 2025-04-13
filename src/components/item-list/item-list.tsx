import React from 'react'
import { Items } from '../../types/item'
import { useState } from 'react';


type ItemsListProps = {
    items: Items;
    onAddToBasket: (newCount: number) => void;
}

export default function ItemList({ items, onAddToBasket }: ItemsListProps) {

    const [basketCount, setBasketCount] = useState(
        () => Number(sessionStorage.getItem('basketCount')) || 0
    );

    const addToBasket = () => {
        const newCount = basketCount + 1;
        setBasketCount(newCount);
        sessionStorage.setItem('basketCount', newCount.toString());
        onAddToBasket(newCount);
    }

    const wiredItems = items.filter(item => !item.wireless);
    const wirelessItems = items.filter(item => item.wireless);

    return (
        <main>
            <h2 className='item-list__title'>Наушники</h2>
            <ul className="item-list">
                {wiredItems.map((item) => (
                    <li className="item" key={item.id}>
                        <div className="item__image">
                            <img src={item.img} alt={item.title} width="220" height="237" />
                        </div>
                        <div className="item__top-info">
                            <h3 className="item__title">
                                <a href="#">{item.title}</a>
                            </h3>
                            <p className="item__price">{item.price} ₽</p>
                        </div>
                        <div className="item__bottom-info">
                            <span className="item__rate">{item.rate}</span>
                            <button className="item__btn" onClick={addToBasket}>Купить</button>
                        </div>
                    </li>
                ))}
            </ul>

            <h2 className='item-list__title'>Беспроводные наушники</h2>
            <ul className="item-list">
                {wirelessItems.map((item) => (
                    <li className="item" key={item.id}>
                        <div className="item__image">
                            <img src={item.img} alt={item.title} width="220" height="237" />
                        </div>
                        <div className="item__top-info">
                            <h3 className="item__title">
                                <a href="#">{item.title}</a>
                            </h3>
                            <p className="item__price">{item.price} ₽</p>
                        </div>
                        <div className="item__bottom-info">
                            <span className="item__rate">{item.rate}</span>
                            <button className="item__btn" onClick={addToBasket}>Купить</button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>

    )
}
