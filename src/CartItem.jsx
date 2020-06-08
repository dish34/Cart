import React, { Component } from "react";
class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Mobile Phone",
      qty: 1,
      img: "",
    };
  }
  increaseQuantity = () => {
    console.log(this);
  };
  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image}></img>
        </div>
        <div className="right-block">
          <div>{title}</div>
          <div>{price}</div>
          <div>{qty}</div>
          <div className="cart-items-actions" title="Icons">
            <img
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              alt="Increase"
              onClick={this.increaseQuantity}
            />
            <img
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/864/864373.svg"
              alt="Decrease"
            />
            <img
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1345/1345874.svg"
              alt="Delete"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
  },
};
