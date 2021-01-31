import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { List } from "./List";
import { Alert } from "./Alert";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [doesBasketShow, setBasketShow] = useState(false);
  const [alertShow, setAlertShow] = useState("");

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  function orderGood(item) {
    const orderIndex = order.findIndex((items) => items.id === item.id);

    if (orderIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newItems = order.map((item, index) => {
        if (index === orderIndex) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      setOrder(newItems);
    }
    setAlertShow(item.name);
  }

  function removeGood(itemId) {
    const newOrder = order.filter((goods) => goods.id !== itemId);
    setOrder(newOrder);
  }

  function plusQuantity(item) {
    const orderIndex = order.findIndex((items) => items.id === item.id);
    const newItems = order.map((item, index) => {
      if (index === orderIndex) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setOrder(newItems);
  }

  function minusQuantity(item) {
    const orderIndex = order.findIndex((items) => items.id === item.id);
    const newItems = order.map((item, index) => {
      if (index === orderIndex) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity >= 1 ? item.quantity - 1 : 1,
        };
      } else {
        return item;
      }
    });
    setOrder(newItems);
  }

  function handleBasket() {
    setBasketShow(!doesBasketShow);
  }

  function closeAlert() {
    setAlertShow("");
  }

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasket={handleBasket} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} orderGood={orderGood} />
      )}
      {doesBasketShow && (
        <List
          orders={order}
          handleBasket={handleBasket}
          removeGood={removeGood}
          plusQuantity={plusQuantity}
          minusQuantity={minusQuantity}
        />
      )}
      {alertShow && <Alert name={alertShow} closeAlert={closeAlert} />}
    </main>
  );
}

export { Shop };
