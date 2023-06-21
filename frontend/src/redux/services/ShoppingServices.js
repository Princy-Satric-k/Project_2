import Axioss from "../../helpers/Axioss";
const ShoppingServices = {};
ShoppingServices.FetchProducts = function () {
  return Axioss({
    url: `/product`,
    method: "get",
  });
};
ShoppingServices.AddProduct = function (id) {
  return Axioss({
    url: `/product/${id}`,
    method: "get",
  });
};
ShoppingServices.MakesPayment = function (id) {
  return Axioss({
    url: `/product/${id}`,
    method: "get",
  });
};
// ShoppingServices.WishLists = function (productId) {
//   return Axioss({
//     url: `/product`,
//     method: "get",
//     data: productId,
//   });
// };
export default ShoppingServices;
