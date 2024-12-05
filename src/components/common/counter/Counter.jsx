import { useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <button onClick={restar}>menos</button>
      <h1>{contador}</h1>
      <button onClick={sumar}>mas </button>
    </div>
  );
};

export default Counter;
