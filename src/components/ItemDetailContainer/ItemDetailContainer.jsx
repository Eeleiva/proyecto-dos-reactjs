import { useParams} from 'react-router-dom';
import { useState, useEffect} from "react";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getProductById } from '../../services/productsService';

export const ItemDetailContainer = () => {

    const {id} = useParams();

    const [itemDetail,setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        getProductById(id)
       .then((data) => setItemDetail(data))
       .catch((error) => console.log("hay un error:", error))
       .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

   if (loading) return <p> Cargando....</p>;
   if (!itemDetail) return <p>Producto no encontrado</p>;
   
   return (
    <section>
        <h1>Detalles del producto</h1>
        <div className = "products-container">
            <ItemDetail item={itemDetail} />
        </div>
    </section>
   );
};