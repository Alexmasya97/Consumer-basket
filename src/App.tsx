import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { AppRoute } from './const';
import Main from './pages/main';
import BasketPage from './pages/basket-page';
import NotFound from './pages/not-found';
import Layout from './components/layout/layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Basket} element={<BasketPage />} />
          <Route path="*" element={
            <Fragment>
              <NotFound />
              {/* <Link to="/">Go to the main page</Link> */}
            </Fragment>
          } />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
