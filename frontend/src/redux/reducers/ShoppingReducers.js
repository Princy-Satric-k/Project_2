import * as ShoppingConstants from "../../redux/constants/ShoppingConstants";
const initState = {
  loading: false,
  productList: null,
  cartData: [],
  makePayment: [],
  // wishList: [],
};
const ShoppingReducer = (state = initState, { type, response }) => {
  switch (type) {
    case ShoppingConstants.FETCH_SHOPPING_INIT:
    case ShoppingConstants.ADD_CART_INIT:
    case ShoppingConstants.MAKE_PAYMENT_INIT:
      // case ShoppingConstants.WISH_LIST_INIT:
      return {
        ...state,
        loading: true,
      };
    case ShoppingConstants.FETCH_SHOPPING_SUCCESS:
      return {
        ...state,
        loading: false,
        productList: response,
      };
    case ShoppingConstants.ADD_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartData: response,
      };
    case ShoppingConstants.MAKE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        makePayment: response,
      };
    // case ShoppingConstants.WISH_LIST_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     wishList: state.wishList + 1,
    //   };
    case ShoppingConstants.FETCH_SHOPPING_FAILED:
    case ShoppingConstants.ADD_CART_FAILED:
    case ShoppingConstants.MAKE_PAYMENT_FAILED:
      // case ShoppingConstants.WISH_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: response,
      };
    default:
      return state;
  }
};
export default ShoppingReducer;
