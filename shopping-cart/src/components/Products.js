import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    const productItems = this.props.products.map(product => (
      <div className="col-md-4">
        <a href={`#${product.id}`} onClick={this.props.handleAddToCard}>
          <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
          <p>
            {product.title}
          </p>
        </a>
      </div>
    ))
    return (
      <div className="row">
        {productItems}
      </div>
    )
  }
}

