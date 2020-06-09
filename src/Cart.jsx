import React, { Component } from "react";
import CartItem from "./CartItem";

class Cart extends Component {
  state = {
    products: [
      {
        price: 999,
        title: "Mobile Phone",
        qty: 1,
        img: "",
        id: 1,
      },
      {
        price: 99,
        title: "Shirt",
        qty: 1,
        img: "",
        id: 2,
      },
      {
        price: 1000,
        title: "Tablet",
        qty: 5,
        img: "",
        id: 3,
      },
    ],
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem product={product} key={product.id}></CartItem>;
        })}
      </div>
    );
  }
}
export default Cart;
