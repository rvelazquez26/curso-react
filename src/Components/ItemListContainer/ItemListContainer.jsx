import {useState, useEffect} from 'react';
import { products } from '../../productsMock';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const {categoryName} = useParams() 

  const [items, setItems] = useState([]) 

  const filter = products.filter((element)=> element.category === categoryName)  

  useEffect(()=>{
    console.log(categoryName);
    
      const productList = new Promise((resolve, reject)=>{
          resolve(categoryName ? filter : products)
      })
  
      productList
      .then( (resp)=>{ setItems(resp)} )
      .catch( (error)=>{ console.log(error)} )
  },[categoryName])

  return (
  <div>
      <ItemList items={items}/>
  </div>
)
}

export default ItemListContainer