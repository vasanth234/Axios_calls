import React from 'react'
import axios from 'axios'
import {useEffect} from 'react'
const App = () => {

  //we can also simplify the code url in the axios by below 
  let api=axios.create({
    baseURL:'https://fakestoreapi.com',
  })
  useEffect(
    ()=>{
      getproducts()
    }
  )
  
  
  async function getproducts(){
   
   //in axios no need of converting the data into json ,by default it takes 
   //in axios when we are sending the data no need of converting into string using stringigy directky we can send 
   //the object by using axios.post()
    let data=await api.get('/products');
    console.log(data)
    //let data=await axios.get('https://fakestoreapi.com/products');
   /*let data=await axios.post('https://fakestoreapi.com/products',{
    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
   });
    console.log(data)*/
    /*let data=await axios.put('https://fakestoreapi.com/products/10',{
    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
   });
    console.log(data)*/
   /* let data=await axios.delete('https://fakestoreapi.com/products/10',{
    
   });
    console.log(data)*/
  
  }
  return (
    <div>Axios library</div>
  )
}

export default App