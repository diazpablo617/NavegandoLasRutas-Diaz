import "./Carditem.css";
import { Link } from "react-router-dom";

export const CardItem = ({ elemento }) => {
  return (
    <div className="estiloCard" key={elemento.id}>
      <img
        src={elemento.imagenUrl}
        style={{ width: "100px", height: "100px" }}
        alt=""
      />
      <h3>{elemento.title}</h3>
      <h4>{elemento.price}</h4>

      <Link to={`/detail/${elemento.id}`}>Ver Detalles</Link>
    </div>
  );
};

export default CardItem;
