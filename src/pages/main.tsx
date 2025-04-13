import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ItemList from '../components/item-list/item-list';
import { Items } from '../types/item';
import { useState } from 'react';


type ItemsListProps = {
    items: Items;
}


export default function Main({ items }: ItemsListProps) {
  const [basketCount, setBasketCount] = useState(0);

  const handleAddToBasket = () => {
    setBasketCount(prevCount => {
        const newCount = prevCount + 1;
        sessionStorage.setItem('basketCount', String(newCount));
        return newCount;
    });
};

  return (
    <main className="root"> 
      <Header basketCount={basketCount} setBasketCount={setBasketCount}/>
      <ItemList 
      items={items}
      onAddToBasket={handleAddToBasket}
      />
      <Footer />
    </main>
  );}
