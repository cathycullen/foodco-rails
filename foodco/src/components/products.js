import React from 'react'

function Products(props) {
  return (
    <div>
      <h1>These products are from the API</h1>
      {props.products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.body}</p>
          </div>
        )
      })}
      </div>
  )
}

export default Products
