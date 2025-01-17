import { combineReducers } from 'redux';
import {
  GET_ALL_PRODUCT,
  GET_NUMBER_CART,
  ADD_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
} from '../actions';

const initProduct = {
  numberCart: 0,
  Carts: [],
  _products: [],
};

function todoProduct(state = initProduct, action) {
  switch (action.type) {
    case GET_NUMBER_CART:
      return {
        ...state,
      };
    case ADD_CART:
      if (state.numberCart == 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          tennha: action.payload.tennha,
          anh: action.payload.anh,
          mucgia: action.payload.mucgia,
          mota: action.payload.mota,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        /*
        state.Carts.map((item, key) => {
          if (item.id == action.payload.id) {
            state.Carts[key].quantity++;
            check = true;
          }
        });
        */
        for (var i = 0; i < state.Carts.length; i++) {
          if (state.Carts[i].id == action.payload.id) {
            state.Carts[i].quantity++;
            check = true;
            break;
          }
        }
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            tennha: action.payload.tennha,
            anh: action.payload.anh,
            mucgia: action.payload.mucgia,
            mota: action.payload.mota,
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case INCREASE_QUANTITY:
      state.numberCart++;
      state.Carts[action.payload].quantity++;

      return {
        ...state,
      };
    case DECREASE_QUANTITY:
      let quantity = state.Carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.Carts[action.payload].quantity--;
      }

      return {
        ...state,
      };
    case DELETE_CART:
      let quantity_ = state.Carts[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter((item) => {
          return item.id != state.Carts[action.payload].id;
        }),
      };
    default:
      return state;
  }
}
const ShopApp = combineReducers({
  _todoProduct: todoProduct,
});
export default ShopApp;
