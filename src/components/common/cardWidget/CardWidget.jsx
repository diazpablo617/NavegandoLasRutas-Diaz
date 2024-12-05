import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CardWidget = () => {
  return (
    <div>
      <Link to="/Cart">
        <FaShoppingCart />
        <h3>0</h3>{" "}
      </Link>
    </div>
  );
};

export default CardWidget;
