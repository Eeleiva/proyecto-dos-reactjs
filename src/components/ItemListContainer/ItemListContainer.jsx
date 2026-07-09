
import {useState} from "react";
import { useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import { getByCategory} from "../../services/productsService";

export  const ItemListContainer = () => {


      const {category} = useParams();
      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true); 

useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);

    getByCategory(category)

.then((data) => setProducts(data))
.catch((error) => console.log("hay un error:", error))
.finally(() => { setLoading(false);
     });
}, [category]);

if (loading) return <p>Cargando...</p>;

return (
    <section>
        <ItemList products={products} />
    </section>
)
    };