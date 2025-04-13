import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { AppRoute } from './const';
import Main from './pages/main';
import BasketPage from './pages/basket-page';
import NotFound from './pages/not-found';
import { Items } from './types/item';

type AppProps = {
  items: Items;
}

function App({ items }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>

        <Route path={AppRoute.Main} element={<Main items={items} />} />

        <Route path="*" element={
          <Fragment>
            <NotFound />
            <Link to="/">Go to the main page</Link>
          </Fragment>
        }

        />
        <Route path={AppRoute.Basket} element={<BasketPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
