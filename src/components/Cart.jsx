function Cart(props) {
  const { quantity = 0, handleBasket = Function.prototype } = props;

  return (
    <div className="cart grey darken-3 white-text" onClick={handleBasket}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? (
        <span className="quantity">{quantity}</span>
      ) : (
        <span className="quantity">0</span>
      )}
    </div>
  );
}

export { Cart };
