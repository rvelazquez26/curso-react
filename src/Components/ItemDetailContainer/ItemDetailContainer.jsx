import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../productsMock'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetailContainer = () => {
  
  const {id} = useParams()
  const productSelect = products.find((element)=> element.id === Number(id))

  console.log(productSelect.stock);

  const onAdd = (cantidad) => {
    console.log(`Se agregaron al carrito ${cantidad} productos`);
    
  }
  
    return (
    <div>
        <h1>{productSelect.title}</h1>
        <h3>{productSelect.description}</h3>
        <ItemCount stock={productSelect.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetailContainer