import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CardWidget = () => {
  return (
    <Link to="/cart">
    <FaCartShopping color="red" size={20}/>
    </Link>
  )
}

export default CardWidget
