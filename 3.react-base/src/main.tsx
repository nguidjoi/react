import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


async function getData (){

const API = 'http://dummyjson.com/products'
const QUERY = '?&select=title'
let products = await fetch(API+QUERY).then(res => res.json()).then( data => data.products)
products = products.map( p => (
  { 
    ...p, 
    get details(){
      fetch(API + '/' + this.id)
        .then( res => res.json())
        .then( data => this.data = data )
        .then(() => console.log(this))
      return 'updating'
    }
  }
))

window.products = products

}

getData()
