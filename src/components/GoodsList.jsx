import { Good } from "./Goodsitem";
import { Preloader } from "./Preloader";

function GoodsList(props) {
  const { goods = [], orderGood = Function.prototype } = props;

  if (!goods.length) {
    return (
      <>
        <Preloader />
        <p>Nothing did load :(</p>
      </>
    );
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <Good key={item.id} {...item} orderGood={orderGood} />
      ))}
    </div>
  );
}
export { GoodsList };
