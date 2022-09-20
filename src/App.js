import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import "./App.css";
import { CartProvider } from "./context/CartProvider";
import Cart from "./components/Cart/Cart"

function App() {
  return (
    <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/details/:id" element={<ItemDetailContainer />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
