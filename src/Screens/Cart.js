import "../Css/cart.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItems from "../Components/cartItem";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const myState = useSelector((state) => state.sendDataToCart);
  const { obj } = myState;
  // console.log(myState)

  return (
    <>
      <div className="cart-main-container">
        <div className="header">
          <div className="back-arrow-div">
            <Link to="/" style={{ color: "black" }}>
              <ArrowBackIcon className="arrow-icon" />
            </Link>
            <h5>Continue Shopping</h5>
          </div>
          <div className="cart-icon-div">
            <ShoppingCartIcon className="cart-icon" />
          </div>
        </div>
        <hr />

        <div className="body-div">
          <div className="heading-div">
            <h3>Shopping Cart</h3>
            <p>
              You Have <span style={{ fontWeight: "600" }}>0</span> Items In
              Shopping Cart
            </p>
          </div>
        </div>

        <div className="items-div">
          <CartItems item={obj} />
        </div>
        <div className="end-div">
          <div className="amount-div">
            <h4>
              Cart Total : <span>$200300</span>
            </h4>
          </div>
          <div className="btns-div">
            <Button sx={{ margin: "5px" }} variant="contained" color="primary">
              Checkout
            </Button>
            <Button sx={{ margin: "5px" }} variant="contained" color="error">
              Clear Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
