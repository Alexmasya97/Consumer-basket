import React from 'react';
import { Item as ItemType } from '../../types/item';
import { useCart } from "react-use-cart";

type ItemProps = {
    items: ItemType[];
};

const Item: React.FC<ItemProps> = ({ items }) => {
    const { addItem } = useCart();

    return (
        <>
            {items.map(({ id, img, title, rate, price, oldPrice }) => (
                <li className="item" key={id}>
                    <div className="item__image">
                        <img src={img} alt={title} width="220" height="237" />
                    </div>
                    <div className="item__top-info">
                        <h3 className="item__title">
                            <a href="#">{title}</a>
                        </h3>
                        <div className="item__price">
                            {price} ₽
                            {oldPrice && <span className='item__old-price'>{oldPrice} ₽</span>}
                        </div>
                    </div>
                    <div className="item__bottom-info">
                        <span className="item__rate">{rate}</span>
                        <button className="item__btn" onClick={() => addItem({ id, img, title, rate, price, oldPrice })}>
                            Купить
                        </button>
                    </div>
                </li>
            ))}
        </>
    );
};

export default Item;
