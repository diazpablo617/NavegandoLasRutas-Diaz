import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "../../common/counter/counter";
import { db } from "../../../context/firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productsColection = collection(db, "products");
    let refDoc = doc(productsColection, id);

    getDoc(refDoc).then((res) => {
      setProduct({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <div>
      <h2>{product.title}</h2>
      <Counter product={product} />
    </div>
  );
};

export default ItemDetail;
