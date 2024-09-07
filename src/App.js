import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
      {/* Ruta raiz */}
      <Route path="/" element={<ItemListContainer/>}/>      
      <Route path="/category/:categoryName" element={<ItemListContainer/>}/>      
      <Route path="/cart" element={<Cart/>}/>     
      <Route path="/login" element={<Login/>}/>     
      <Route path="/itemDetail/:id" element={<ItemDetailContainer/>}/>     
       
      {/* Ruta que no existe */}
      <Route path="*" element={ <h1>Not Found</h1>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
