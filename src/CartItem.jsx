import React, { Component } from "react";
class CartItem extends Component {
  state = {};
  render() {
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image}></img>
        </div>
        <div className="right-block">
          <div>Phone</div>
          <div>Rs 999</div>
          <div>Qty: 1</div>
          <div className="cart-items-actions"></div>
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
