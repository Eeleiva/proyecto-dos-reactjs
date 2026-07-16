
import {useState} from "react";
import { useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import {useParams} from "react-router-dom";


export  const ItemListContainer = () => {


      const {category} = useParams();
      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true); 

    useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);


fetch("/data/products.json")
.then((res) => res.json)
.then((data) => setProducts(data))
.catch((error) => console.log("hay un error:", error))
.finally(() =>  setLoading(false));
     
}, [category]);

if (loading) return <p>Cargando...</p>;

return (
    <section>
        <ItemList products={products} />
    </section>
);
    };