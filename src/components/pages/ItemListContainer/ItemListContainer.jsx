import { useEffect, useState } from "react";
import { products } from "../../../products";
import { CardItem } from "../../common/cardItem/CardItem";
import { useParams } from "react-router-dom";
import { db } from "../../../context/firebaseConfig";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let referencia = productsCollection;
    if (name) {
      let unaParteDeLaColeccion = query(
        productsCollection,
        where("category", "==", name)
      );
      referencia = unaParteDeLaColeccion;
    }

    getDocs(referencia).then((res) => {
      let nuevoArray = res.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      });

      setItems(nuevoArray);
    });
  }, [name]);

  // const rellenar = () => {
  //   let refCollection = collection(db, "products");
  //   products.forEach((elemento) => {
  //     addDoc(refCollection, elemento);
  //   });
  // };

  return (
    <div>
      <>
        <h2>PRODUCTOS</h2>
        {items.map((elemento) => {
          return <CardItem key={elemento.id} elemento={elemento} />;
        })}
      </>
      {/* <button onClick={rellenar}>Rellenar base de datos</button> */}
    </div>
  );
};
