import CardWidget from "../CardWidget/CardWidget";
import style from "./Navbar.module.css"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className={ style.containerNavbar }>
      <Link to="/">
      <h3 style={{paddingLeft:50}}>logo</h3>
      </Link>
      <ul className={ style.list}>
        <Link to="/">Todas</Link>
        <Link to="/category/urbanas">Urbanas</Link>
        <Link to="/category/deportivas">Deportivas</Link>
      </ul>
      <h3>
      </h3>
        <CardWidget/>
    </div>
  );
};  
