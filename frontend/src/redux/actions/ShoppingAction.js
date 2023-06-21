import * as ShoppingConstants from "../../redux/constants/ShoppingConstants";
export const ShoppingAction = {
  FetchProducts: () => ({
    type: ShoppingConstants.FETCH_SHOPPING_INIT,
  }),
  AddCart: (id) => ({
    type: ShoppingConstants.ADD_CART_INIT,
    id,
  }),
  MakePayment: (id) => ({
    type: ShoppingConstants.MAKE_PAYMENT_INIT,
    id,
  }),
  // WishList: (productId) => ({
  //   type: ShoppingAction.WISH_LIST_INIT,
  //   productId,
  // }),
};
