import { Item } from "./ListItem";

function List(props) {
  const {
    orders = [],
    handleBasket = Function.prototype,
    removeGood = Function.prototype,
    plusQuantity = Function.prototype,
    minusQuantity = Function.prototype,
  } = props;

  const price = orders.reduce((amount, item) => {
    return amount + item.price * item.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item grey darken-3 white-text">
        Коризна
        <span className="secondary-content">
          <i className="material-icons close" onClick={handleBasket}>
            close
          </i>
        </span>
      </li>
      {orders.length ? (
        orders.map((listItem) => (
          <Item
            key={listItem.id}
            {...listItem}
            removeGood={removeGood}
            plusQuantity={plusQuantity}
            minusQuantity={minusQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Коризна пуста</li>
      )}
      <li className="collection-item grey darken-3 white-text">
        Общая стоимость: {price} ₽{" "}
        <button className=" btn-small secondary-content grey darken-3 white-text">
          Перейти к оплате
        </button>
      </li>
    </ul>
  );
}

export { List };
