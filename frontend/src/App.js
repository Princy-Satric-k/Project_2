import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";

const Home = lazy(() => import("./pages/home"));
const Account = lazy(() => import("./pages/account/account"));
const Cart = lazy(() => import("./pages/cart/cart"));
const Categories = lazy(() => import("./pages/categories/categories"));
const Deals = lazy(() => import("./pages/deals/deals"));
const Delivery = lazy(() => import("./pages/delivery/delivery"));
const Whatsnew = lazy(() => import("./pages/whatsnew/whatsnew"));
const AddCart = lazy(() => import("./compound/AddCart"));
const MakePayment = lazy(() => import("./compound/MakePayment"));
const WishList = lazy(() => import("./compound/WishList"));
const Login = lazy(() => import("./compound/Login"));
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="account" element={<Account />} />
            <Route path="cart" element={<Cart />} />
            <Route path="categories" element={<Categories />} />
            <Route path="deals" element={<Deals />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="whatsnew" element={<Whatsnew />} />
            <Route path="addcart" element={<AddCart />} />
            <Route path="makepayment" element={<MakePayment />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
