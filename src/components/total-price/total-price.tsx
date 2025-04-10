import React from 'react'


export default function TotalPrice() {
    return (
        <section className="cart-total">
            <div className="cart-total__info">
                <h2 className="cart-total__title">Итого</h2>
                <div className="cart-total__sum">₽ 2927 </div>
            </div>
            <button type="submit" className="cart-total__submit">Перейти к оформлению</button>
        </section>
    )
}