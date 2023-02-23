import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";

import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";

const App = () => {
  const { cartIems, isLoading } = useSelector((store)=>store.cart);
  const { isOpen } = useSelector((store)=>store.modal);
  const dispatch = useDispatch();

 useEffect(()=>{
  dispatch(calculateTotals());
 },[{cartIems}])

 useEffect(()=>{
  dispatch(getCartItems());
 },[])

  if(isLoading){
    return <div className="loading">
      <h1>Loading ...</h1>
    </div>
  }

  return <main>
    { isOpen && <Modal /> }
 
    <Navbar />
    <CartContainer />
  </main>;
}
export default App;