import axios from 'axios'
import React, { useEffect, useState } from 'react'


   
  
const Product =() =>{
   const [productos,setProductos] =useState([]);                                                                                                                                                                                                                                                                                                
     const[pagina,setPagina] = useState(1);



    useEffect(() =>{
     axios.get('https://peticiones.online/api/products?page=' + pagina)
      .then(response => setProductos(response.data.data))
       .catch(error =>console.log(error));
     }, [pagina]);
      const lanzaPeticion = async ()=>{
          const body ={
            
                "name": "Producto de prueba",
                "description": "Uno de los mejores productos del mercado",
                "price": "66",
                "category": "niño",
                "image": "https://peticiones.online/images/products/noexiste.png",
                "active": true
            
          }
       
            const response = await axios.post('https://peticiones.online/api/products',body);
            console.log(response);
      }

     return <div>
         <button onClick={lanzaPeticion }>post</button>
         <button onClick={() => setPagina(pagina -1)}>Anterior </button>
         <button onClick={() => setPagina(pagina +1)}>Siguiente </button>
         <p>Pagina:{pagina}</p>

        <div className="productos">
                    {productos.map(producto =>(
                <div className="producto" key={producto.id}>
                         <h5>{producto.name}</h5>
                        <img src={producto.image}alt=""/>
                     <p>{producto.price}</p>
                </div>
                ))}
            </div>
        </div>;
    }  
    export default Product;