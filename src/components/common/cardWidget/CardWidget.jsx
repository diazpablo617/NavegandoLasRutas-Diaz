import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CardWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  return (
    <div>
      <Link to="/Cart">
        <FaShoppingCart />
        <h3>{getTotalItems()}</h3>
      </Link>
    </div>
  );
};

export default CardWidget;
