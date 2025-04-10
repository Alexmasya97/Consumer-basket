import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Basket from '../components/basket/basket'
import TotalPrice from '../components/total-price/total-price'


export default function BasketPage() {
    return (
        <main className="root">
            <Header />
            <div className="basket-page">
                <Basket />
                <TotalPrice />
            </div>
            <Footer />
        </main>

    )
}