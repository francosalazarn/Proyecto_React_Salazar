import React from 'react';
import './Item.css'

const Item = ({producto}) => {


  return (

    <Link to={`/detalle/${producto.id}`}>

      <div key={producto.id} className='container'>
          <h2>{producto.nombre}</h2>
          <img src={producto.img} alt={producto.nombre} />
      </div> 

    </Link>
    
  )
}

export default Item;