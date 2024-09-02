import {useState, useEffect} from 'react';
import { products } from '../../productsMock';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]) 

  useEffect(()=>{
      const productList = new Promise((resolve, reject)=>{
          resolve(products)
      })
  
      productList
      .then( (resp)=>{ setItems(resp)} )
      .catch( (error)=>{ console.log(error)} )
  },[])

  console.log(items);
  
  return (
  <div>
      <ItemList items={items}/>
  </div>
)
}

export default ItemListContainer