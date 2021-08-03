import React from 'react'
import Product from './Product'

function App() {
  return (
    <div>
      <h1>Wellcome to Shop!!</h1>

      <Product 
      name='Amazon Echo' 
      description='Your AI Assistant' 
      price={59.99} />

      <Product 
      name='Google Home' 
      description='Your AI Assistant' 
      price={99.99} />

      <Product 
      name='Iphone 12 Pro max' 
      description='The best Iphone yet' 
      price={1200} />

      {/* Product name,description,price */}
      {/* Product name,description,price */}
      {/* Product name,description,price */}
      {/* Product name,description,price */}
    </div>
  );
}

export default App

