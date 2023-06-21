import * as ShoppingConstants from "../../redux/constants/ShoppingConstants";
import ShoppingServices from "../services/ShoppingServices";
import { call, put, takeLatest } from "redux-saga/effects";
export function* FetcShoppingProducts() {
  try {
    const response = yield call(ShoppingServices.FetchProducts);
    yield put({
      type: ShoppingConstants.FETCH_SHOPPING_SUCCESS,
      response,
    });
  } catch (error) {
    yield put({
      type: ShoppingConstants.FETCH_SHOPPING_FAILED,
      error,
    });
  }
}
export function* AddtoCart(req) {
  try {
    const response = yield call(ShoppingServices.AddProduct, req.id);
    yield put({
      type: ShoppingConstants.ADD_CART_SUCCESS,
      response,
    });
  } catch (error) {
    yield put({
      type: ShoppingConstants.ADD_CART_FAILED,
      error,
    });
  }
}
export function* MakePayments(req) {
  try {
    const response = yield call(ShoppingServices.MakesPayment, req.id);
    yield put({
      type: ShoppingConstants.MAKE_PAYMENT_SUCCESS,
      response,
    });
  } catch (error) {
    yield put({
      type: ShoppingConstants.MAKE_PAYMENT_FAILED,
      error,
    });
  }
}
// export function* WhishLists(req) {
//   try {
//     const response = yield call(ShoppingServices.WishLists, req.productId);
//     yield put({
//       type: ShoppingConstants.WISH_LIST_SUCCESS,
//       response,
//     });
//   } catch (error) {
//     yield put({
//       type: ShoppingConstants.WISH_LIST_FAILED,
//       error,
//     });
//   }
// }

export default function* ShoppingSagas() {
  yield takeLatest(ShoppingConstants.FETCH_SHOPPING_INIT, FetcShoppingProducts);
  yield takeLatest(ShoppingConstants.ADD_CART_INIT, AddtoCart);
  yield takeLatest(ShoppingConstants.MAKE_PAYMENT_INIT, MakePayments);
  // yield takeLatest(ShoppingConstants.WISH_LIST_INIT, WhishLists);
}
