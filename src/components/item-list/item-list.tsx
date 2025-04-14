// import React, { useState } from 'react';
// import { Item as ItemType } from '../../types/item';
// import Item from '../item/item';

// type ItemsListProps = {
//     items: ItemType[];
//     onAddToBasket: (newCount: number) => void;
// };

// export default function ItemList({ items, onAddToBasket }: ItemsListProps) {
//     const wiredItems = items.filter(item => !item.wireless);  
//     const wirelessItems = items.filter(item => item.wireless);

//     return (
//         <section className='main'>
//             <div>
//                 <h2 className='item-list__title'>Наушники</h2>
//                 <ul className="item-list">
//                     <Item items={wiredItems} />
//                 </ul>
//             </div>

//             <div>
//                 <h2 className='item-list__title'>Беспроводные наушники</h2>
//                 <ul className="item-list">
//                     <Item items={wirelessItems} />
//                 </ul>
//             </div>
//         </section>
//     );
// }
