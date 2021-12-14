import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Data from "./Data";
import { signOut, auth } from "../config/Firebase/Firebase";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { SEND_ITEM_TO_CART } from "../config/Redux/Actions/actions";
import { useDispatch } from "react-redux";

const ItemCard = () => {
  const [items, setItems] = useState(Data);
  const [itemCount, setItemCount] = useState(0);

  const dispatch = useDispatch();

  const searchItem = (e) => {
    let a = e.target.value;
    const searchedItem = Data.filter((curElem) => {
      if (a.toLowerCase().trim() == "") {
        return curElem;
      } else if (curElem.name.toLowerCase().includes(a.toLowerCase().trim())) {
        return curElem;
      }
    });
    setItems(searchedItem);
  };

  const addToCart = (elem) => {
    setItemCount(itemCount + 1);
    dispatch(SEND_ITEM_TO_CART(elem))
  };

  return (
    <>
      <div className="menu">
        <Link to="/cart">
          <div className="cart">
            <p>{itemCount}</p>
            <ShoppingCartIcon className="cart-icon" />
          </div>
        </Link>
        <h1>Our Menu</h1>
        <Button variant="text" onClick={() => signOut(auth)}>
          Logout
        </Button>
      </div>
      <div className="data-items container-fluid mt-5">
        <div className="row">
          <div style={{ paddingLeft: "5%" }}>
            <TextField
              onChange={(e) => searchItem(e)}
              id="standard-basic"
              label="Serch an Item"
              variant="standard"
            />
          </div>
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem, index) => {
                const { id, name, image, category, price, description } = elem;
                return (
                  <div
                    key={index}
                    className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5"
                  >
                    <div className="row item-inside">
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src={image} alt={name} className="img-fluid" />
                      </div>

                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-tittle pt-4 pb-3">
                          <h2>{name}</h2>
                          <p>{description}</p>
                        </div>
                        <div className="price-and-add">
                          <div className="price-and-add-divide d-flex justify-content-between">
                            <h4>Price: Rs {price}</h4>
                            <button
                              onClick={() => addToCart(elem)}
                              className="add-btn btn btn-outline-success"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemCard;
