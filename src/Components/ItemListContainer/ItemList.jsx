import React from 'react'
import CardItems from './CardItems'

const ItemList = ({items}) => {
  return (
    <div style={{
      display: "flex",
      width: "100%",
      minHeight: "100vh",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexWrap: "wrap"

    }}>
        {
            items.map((elemento)=>{
                return <CardItems key={elemento.id} item={elemento}/>
            })
        }
    </div>
  )
}

export default ItemList