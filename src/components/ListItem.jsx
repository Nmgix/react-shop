function Item(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeGood = Function.prototype,
    plusQuantity = Function.prototype,
    minusQuantity = Function.prototype,
  } = props;
  return (
    <li className="collection-item" id={id}>
      {name}{" "}
      <button
        className="btn grey darken-3"
        onClick={() => plusQuantity({ id })}
      >
        {" "}
        +
      </button>{" "}
      <button
        className="btn grey darken-3"
        onClick={() => minusQuantity({ id })}
      >
        -{" "}
      </button>{" "}
      x{quantity} = {price * quantity} ₽
      <span className="secondary-content">
        <i className="material-icons delete" onClick={() => removeGood(id)}>
          delete
        </i>
      </span>
    </li>
  );
}
export { Item };
