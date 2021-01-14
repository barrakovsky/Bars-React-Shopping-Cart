import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER, FETCH_ORDER } from "../types";

export const createOrder = (order) => (dispatch) => {
  fetch("/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: CREATE_ORDER, payload: data });
      dispatch({ type: CLEAR_CART });
    });
};

export const clearOrder = (cartItems) => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
  cartItems.length = 0;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const fetchOrders = () => (dispatch) => {
  fetch("/api/orders")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCH_ORDER, payload: data });
    });
};

/*
export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");
  console.log(res);
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};
*/