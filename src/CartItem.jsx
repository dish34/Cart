import React, { Component } from "react";
class CartItem extends Component {
  handleClick = () => {
    this.setState(
      (prevState) => {
        return {
          number: prevState.number + 2,
        };
      },
      () => {
        console.log(this.state.number);
      }
    );

    this.setState(
      (prevState) => {
        return {
          number: prevState.number + 3,
        };
      },
      () => {
        console.log(this.state.number);
      }
    );
  };

  increaseQuantity = () => {
    console.log(this);
    this.setState({
      qty: this.state.qty + 1,
    });
  };
  decreaseQuantity = () => {
    // this.setState({
    //   qty: this.state.qty - 1,
    // });
    const { qty } = this.state;
    if (qty === 0) {
      return;
    }
    this.setState(
      (prevState) => {
        return {
          qty: prevState.qty - 1,
        };
      },
      () => {
        console.log(this.state.qty);
      }
    );
  };
  render() {
    const { price, title, qty } = this.props.product;
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
              onClick={this.handleClick}
            />
            <img
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/864/864373.svg"
              alt="Decrease"
              onClick={this.decreaseQuantity}
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
