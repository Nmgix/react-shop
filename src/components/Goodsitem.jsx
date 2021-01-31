function Good(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,
    orderGood = Function.prototype,
  } = props;
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} draggable="false" />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <span className="card-span">{description}</span>
      </div>
      <div className="card-action">
        <span className="price">{price + " ₽"}</span>
        <button
          className="btn grey darken-3"
          onClick={() => {
            orderGood({ name, id, price });
          }}
        >
          Купить
        </button>
      </div>
    </div>
  );
}

export { Good };
