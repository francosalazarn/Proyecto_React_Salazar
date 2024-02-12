import React from 'react';

const Item = ({producto}) => {
  return (
    <div key={producto.id}>
        <h2>{producto.title}</h2>
        <h2>Precio: {producto.price}</h2>
        <h2>Stock: {producto.rating.count}</h2>
        <p>Descripcion: {producto.description}</p>
    </div>
  )
}

export default Item