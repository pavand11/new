
import { ActionTypes } from "../Constants/action-types";

const initialstate = {
  products: [],
};

export const productReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return {...state,products:payload};
    case ActionTypes.FETCH_PRODUCTS:
      return {...state,products:payload};
    default:
      return state;
  }
};
export const selectProductReducer=(state={},{type,payload}) =>{
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {...state,...payload};
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
    default:
      return state;
  }
}