import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  const [products, setProducts]= useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading]= useState(false);
  const [search, setSearch] = useState("wood")

  useEffect( () => {
      (async () => {
        try {
          setError(false);
          setLoading(true);

          const response= await axios.get('/api/products');
          console.log(response.data);
          setProducts(response.data);
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      })()
  }, [])

  //cannot have async and await in a hook so we have to create a function and call it immediately (iife)
//we cannot have async and await in a hook because the hook itself is not asynchronous, it needs to return something immediately. If we make the hook asynchronous, it would return a promise instead of the expected value, which can lead to unexpected behavior in the component lifecycle. By creating an asynchronous function inside the hook and calling it immediately, we can perform asynchronous operations while still adhering to the synchronous nature of the hook.

if(error)
  return <h1>something went wrong</h1>

if(loading)
  return <h1>loading...</h1>

  return (
    <>
      <h1>chai aur api in react</h1>
      <h2>number of products are: {products.length}</h2>
    </>
  )
}

export default App
