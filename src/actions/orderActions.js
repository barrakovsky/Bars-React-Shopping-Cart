import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER } from "../types";

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