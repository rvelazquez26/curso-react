import CardWidget from "../CardWidget/CardWidget";
import style from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <div className={ style.containerNavbar }>
      <img src="https://res.cloudinary.com/dgcyvw24o/image/upload/v1724682192/jimhdbyn6wrjvtsyzvck.jpg" 
      alt="" 
      style={{width:"10%", objectFit:"cover"}}
      />
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
