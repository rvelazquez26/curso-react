import CardWidget from "../CardWidget/CardWidget";
import style from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <div className={ style.containerNavbar }>
      <h3 style={{paddingLeft:50}}>logo</h3>
      <ul className={ style.list}>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <h3>
      </h3>
        <CardWidget/>
    </div>
  );
};
