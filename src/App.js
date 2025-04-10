import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { AppRoute } from './const.ts';

import Main from './pages/main';
import BasketPage from './pages/basket-page';
import NotFound from './pages/not-found';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path={AppRoute.Main} element={<Main />} />

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
