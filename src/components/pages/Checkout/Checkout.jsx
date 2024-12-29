import { useContext, useState } from "react";
import { db } from "../../../context/firebaseConfig";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState(null);

  const envioDeFormulario = (evento) => {
    evento.preventDefault();

    let total = getTotalAmount();
    let order = {
      buyer: userInfo,
      items: cart,
      total,
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    });
    let productsColection = collection(db, "products");
    order.items.forEach((elemento) => {
      let refDoc = doc(productsColection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });
  };

  const capturaDatos = (e) => {
    const { target } = e;
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      {orderId ? (
        <h2>gracias tu codigo de compra es : {orderId} </h2>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="nombre..."
            name="nombre"
            onChange={capturaDatos}
          />
          <input
            type="text"
            placeholder="email..."
            name="email"
            onChange={capturaDatos}
          />
          <input
            type="text"
            placeholder="telefono..."
            name="telefono"
            onChange={capturaDatos}
          />
          <button>comprar</button>
          <button type="button">cancelar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
