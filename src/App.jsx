
import { Routes, Route } from 'react-router-dom'
import './App.css';
//*import { Count } from "./components/Count/Count";//
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/Cart/CartView';
import { ProductSuccess } from "./components/adminComponent/ProductSuccess";
import { ProductFormContainer } from "./components/adminComponent/ProductFormContainer";



function App() {

 return (
    <>
   <Header />
   <main>
    <Routes>

     
      <Route path= "/" element={<ItemListContainer /> } />
     <Route path= "/product/:id" element={<ItemDetailContainer /> } />
      <Route path= "/carrito" element={<CartView />} />
      <Route path ="/admin" element = {<ProductFormContainer />} />
      <Route path="/success/:id" element = {<ProductSuccess />}  />
      
       
       </Routes>
       </main>
       <Footer />


    </>
  );
}

export default App;
