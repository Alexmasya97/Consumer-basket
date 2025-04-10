import Basket from "./components/basket/basket.js";
import Footer from "./components/footer/footer.tsx";
import Header from "./components/header/header.tsx";
import ItemList from "./components/item-list/item-list.js";
import TotalPrice from "./components/total-price/total-price.js";

function App() {
  return (
    <div className="root"> 
      <Header />
      {/* <div className="basket-page">
      <Basket />
      <TotalPrice />
      </div> */}
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
