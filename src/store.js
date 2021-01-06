import {createStore, applyMiddleware, combineReducers, compose} from 'redux'; 
import thunk from 'redux-thunk';
import { orderReducer } from './reducers/orderReducers';
import { cartReducer } from './reducers/cartReducers';
import { productsReducer } from './reducers/productReducers';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    products: productsReducer,
    order: orderReducer,
    cart: cartReducer,
}),
initialState, 
composeEnhancer(applyMiddleware(thunk))
);

export default store; 