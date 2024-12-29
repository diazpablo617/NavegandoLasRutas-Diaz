import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const Counter = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < product.stock) {
      setContador(contador + 1);
    } else {
      alert("stock maximo");
    }
  };
  const restar = () => {
    setContador(contador - 1);
  };

  const onAdd = () => {
    let objetoParaElCarrito = { ...product, quantity: contador };
    addToCart(objetoParaElCarrito);
  };

  return (
    <div>
      <button onClick={restar}>menos</button>
      <h1>{contador}</h1>
      <button onClick={sumar}>mas </button>
      <button onClick={onAdd}>Agregar al Carrito</button>
    </div>
  );
};

export default Counter;
