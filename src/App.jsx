import { Navbar } from "./components/layout/navbar/Navbar";
import Cart from "./components/pages/Cart/Cart";
import ItemDetail from "./components/pages/ItemDatail/ItemDetail";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Detail/:id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
