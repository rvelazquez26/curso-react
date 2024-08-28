import Footer from "./Components/Footer/Footer.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx"
import ProductCard from "./Components/ProductCard/ProductCard.jsx";
import CardWidget from "./Components/CardWidget/CardWidget.jsx";

function App() {
  return (
    <div>
      <Navbar/>
      <CardWidget/>
      <ItemListContainer/>
      <ProductCard title="Producto 1" price={10} isRed={true}/>
      <ProductCard title="Producto 2" price={25} isRed={false}/>
      <ProductCard title="Producto 3" price={45} isRed={true}/>
      <Footer/>
    </div>
  );
}

export default App;
