import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";
import BasketCard from '../components/basket-card/basket-card';
import { Item } from '../types/item';

export default function BasketPage() {
    const { isEmpty, items, cartTotal } = useCart();

    const cartItems: Item[] = items as Item[];

    if (isEmpty) return <h2 className='add-to-basket'><Link to="/">Добавьте товары в корзину</Link></h2>;

    return (
        <div className="basket">
            <h2 className="basket__title">Корзина</h2>
            <div className='basket-page'>
                <ul className="basket__list">
                    {
                        cartItems.map(item => (
                            <BasketCard key={item.id} product={item} />
                        ))
                    }
                </ul>
                {
                    !isEmpty &&
                    <div className="cart-total">
                        <div className="cart-total__info">
                            <h2 className="cart-total__title">Итого</h2>
                            <div className="cart-total__sum">₽ {cartTotal} </div>
                        </div>
                        <button type="submit" className="cart-total__submit">Перейти к оформлению</button>
                    </div>
                }
            </div>
        </div>
    );
}
