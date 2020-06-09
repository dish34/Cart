import React, { Component } from "react";
class CartItem extends Component {
  render() {
    const { price, title, qty } = this.props.product;
    const { onDeleteProduct } = this.props;
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
              onClick={() => this.props.increaseQuantity(this.props.product)}
            />
            <img
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/864/864373.svg"
              alt="Decrease"
              onClick={() => this.props.decreaseQuantity(this.props.product)}
            />
            <img
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1345/1345874.svg"
              alt="Delete"
              onClick={() => onDeleteProduct(this.props.product.id)}
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
