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
  increaseQuantity = (product) => {
    console.log("increase this", product);
    const { products } = this.state;
    var index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };
  decreaseQuantity = (product) => {
    console.log("my product", product);
    const { products } = this.state;

    var index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState(products);
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id != id);
    this.setState({
      products: items,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              increaseQuantity={this.increaseQuantity}
              decreaseQuantity={this.decreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            ></CartItem>
          );
        })}
      </div>
    );
  }
}
export default Cart;
