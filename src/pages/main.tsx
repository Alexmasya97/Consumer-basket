import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ItemList from '../components/item-list/item-list';


export default function Main() {
  return (
    <main className="root"> 
      <Header />
      <ItemList />
      <Footer />
    </main>
  );}
