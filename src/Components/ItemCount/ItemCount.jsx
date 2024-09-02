import {useState, useEffect} from 'react'

const ItemCount = () => {

    const [userName, setUserName] = useState("") 

    useEffect(()=>{
        const productList = new Promise((resolve, reject)=>{
            resolve()
        })
    
        productList
        .then( (resp)=>{
            console.log("se ejecuta porque la promesa se resolvio"); setUserName(resp)  
        })
        .catch( (error)=>{ console.log(error)} )
    },[])
  
    return (
    <div>
        <h1>Item Count</h1>
    </div>
  )
}

export default ItemCount