import React from 'react';
import { useCart } from "react-use-cart";
import { Item } from '../../types/item';

type ItemProps = {
    product: Item;
};

const BasketCard: React.FC<ItemProps> = ({ product }) => {
    const { updateItemQuantity, removeItem } = useCart();

    return (
        <li key={product.id} className="basket__item">
            <div className="basket-item__left-info">
                <img
                    className="basket-item__image"
                    src={product.img}
                    alt={product.title}
                    width="220"
                    height="237"
                />
                <div className="basket-item__counter">
                    <div
                        onClick={() => updateItemQuantity(product.id, product.quantity - 1)}
                        className="basket-item__dec-btn"
                    >
                        <span className="visually-hidden">-</span>
                    </div>
                    <span className="basket-item__sum">{product.price}</span>
                    <div
                        onClick={() => updateItemQuantity(product.id, product.quantity + 1)}
                        className="basket-item__inc-btn"
                    >
                        <span className="visually-hidden">+</span>
                    </div>
                </div>
            </div>

            <div className="basket-item__central-info">
                <h3 className="basket-item__title">
                    <a href="#">{product.title}</a>
                </h3>
                <p className="basket-item__price">{product.price} ₽</p>
            </div>

            <div className="basket-item__right-info">
                <button
                    className="basket-item__delete"
                    onClick={() => removeItem(product.id)}
                >
                    <svg width="19.927734" height="17.000000" viewBox="0 0 19.9277 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M14.94 3.39L19.92 3.39L19.92 5.1L17.93 5.1L17.93 16.15C17.93 16.37 17.83 16.59 17.64 16.75C17.45 16.91 17.2 17 16.93 17L2.98 17C2.72 17 2.47 16.91 2.28 16.75C2.09 16.59 1.99 16.37 1.99 16.15L1.99 5.1L0 5.1L0 3.39L4.98 3.39L4.98 0.85C4.98 0.62 5.08 0.4 5.27 0.24C5.46 0.08 5.71 0 5.97 0L13.94 0C14.21 0 14.46 0.08 14.65 0.24C14.84 0.4 14.94 0.62 14.94 0.85L14.94 3.39ZM15.94 5.1L3.98 5.1L3.98 15.3L15.94 15.3L15.94 5.1ZM11.37 10.2L13.13 11.7L11.72 12.9L9.96 11.4L8.2 12.9L6.79 11.7L8.55 10.2L6.79 8.69L8.2 7.49L9.96 8.99L11.72 7.49L13.13 8.69L11.37 10.2ZM6.97 1.7L6.97 3.39L12.95 3.39L12.95 1.7L6.97 1.7Z" fill="#DF6464" fill-opacity="1.000000" fill-rule="nonzero" />
                    </svg>
                    <span className="visually-hidden">Удалить</span>
                </button>
                <p className="basket-item__total-price">{product.price} ₽</p>
            </div>
        </li>
    );
}

export default BasketCard;
