import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import "./App.css";
import { CartContext } from "./context/CartContext";
import Cart from "./components/Cart/Cart"

function App() {
  return (
    <CartContext.Provider value={[]}>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/details/:id" element={<ItemDetailContainer />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
    
  );
}

export default App;
