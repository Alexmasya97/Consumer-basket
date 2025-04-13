
import React, { useEffect, useState } from 'react';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Basket from '../components/basket/basket'
import TotalPrice from '../components/total-price/total-price'



export default function BasketPage() {
    const [basketCount, setBasketCount] = useState(() => {
        const savedCount = sessionStorage.getItem('basketCount');
        return savedCount ? Number(savedCount) : 0;
    });

    const handleAddToBasket = () => {
        setBasketCount(prevCount => {
            const newCount = prevCount + 1;
            sessionStorage.setItem('basketCount', String(newCount));
            return newCount;
        });
    };

    useEffect(() => {

        const handleStorageChange = () => {
            const savedCount = sessionStorage.getItem('basketCount');
            if (savedCount) {
                setBasketCount(Number(savedCount));
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    return (
        <main className="root">
            <Header basketCount={basketCount} setBasketCount={setBasketCount} />
            <div className="basket-page">
                <Basket />
                <TotalPrice />
            </div>
            <Footer />
        </main>

    )
}