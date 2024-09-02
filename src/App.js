import Footer from "./Components/Footer/Footer.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx"
import ProductCard from "./Components/ProductCard/ProductCard.jsx";
import CardWidget from "./Components/CardWidget/CardWidget.jsx";
import ItemCount from "./Components/ItemCount/ItemCount.jsx";

function App() {

  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
