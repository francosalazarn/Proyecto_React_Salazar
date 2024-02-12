import React, {useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([]);

    useEffect(()=>{

        const fetchData = async () => {
            try {
                fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>setProductos(json))
            }catch(error){
                console.log("Error en el fetch "+error)
            }
        }

        fetchData()

    },[])


  return (
    <div>

        <h1>{greeting}</h1>

        {productos.length == 0 
        ? 
        <h1>CARGANDO..</h1> 
        : 
        <ItemList productos={productos}/>
        }


    </div>
  )
}

export default ItemListContainer