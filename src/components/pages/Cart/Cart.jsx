import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, resetCart, deleteById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id} style={{ border: "2px solid black" }}>
            <h1>Nombre: {elemento.title}</h1>
            <h2>Precio: {elemento.price}</h2>
            <h3>Cantidad: {elemento.quantity}</h3>
            <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
          </div>
        );
      })}
      <h2>El total a pagar es {total}</h2>
      <button onClick={resetCart}>Limpiar Carrito</button>
      <Link to="/checkout">Finalizar Compra</Link>
    </div>
  );
};

export default Cart;
