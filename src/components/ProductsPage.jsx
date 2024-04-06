import React from "react";
import { changeOrderByPrice, getPriceColor } from "./productUtils";

export default class ProductsPage extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: "Chachopo",
        price: 30,
      },
      {
        id: 3,
        name: "Navajas",
        price: 25,
      },
      {
        id: 2,
        name: "Chorizo a la sidra",
        price: 15,
      },
    ],
  };

  handleOrderByPrice = () => {
    const sortedProducts = changeOrderByPrice(this.state.products);
    this.setState({ products: sortedProducts });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOrderByPrice}>Order by Price</button>
        <ul>
          {this.state.products.map((product) => (
            <li
              key={product.id}
              style={{ color: getPriceColor(product.price) }}
            >
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Filter by name"
          value={this.state.filterName}
          onChange={this.handleFilterByName}
        />
        <button onClick={this.handleOrderByPrice}>Order by Price</button>
      </div>
    );
  }
}
