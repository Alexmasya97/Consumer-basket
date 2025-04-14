import React from 'react';
import Item from '../components/item/item';
import { mockGoods } from '../mocks/items';


export default function Main() {

  const wiredItems = mockGoods.filter(item => !item.wireless);
  const wirelessItems = mockGoods.filter(item => item.wireless);

  return (
    <section className='main'>
      <div>
        <h2 className='item-list__title'>Наушники</h2>
        <ul className="item-list">
          <Item items={wiredItems} />
        </ul>
      </div>

      <div>
        <h2 className='item-list__title'>Беспроводные наушники</h2>
        <ul className="item-list">
          <Item items={wirelessItems} />
        </ul>
      </div>
    </section>
  );
}
