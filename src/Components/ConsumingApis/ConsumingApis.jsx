import {useEffect, useState} from 'react'

const ConsumingApis = () => {

    const [ data, setData] = useState([])

    useEffect(()=>{
        const postData = fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({            
                title: "este es un post",
                userId: 1,
                body:"Este es el body del post que se envia al back"
                })           
            })

        postData
        .then( resp=> console.log(resp)
        )

        
    }, [])
    
    console.log(data);  
    return (
    <div>ConsumingApis</div>
  )
}

export default ConsumingApis