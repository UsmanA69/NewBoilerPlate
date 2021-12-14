import "../Css/cartitem.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const CartItems = (props) => {
  // const [cartItem, setCartItem] = useState([]);
  const { item } = props;
  // setCartItem(props);
  // console.log(cartItem);
  const { image, name, description, price } = item;

  return (
    <>
      <>
        {/* {cartItem.map((elem) => {
          const { image, name, description, price } = elem;
          return (
            <>
              
            </>
          );
        })} */}
        <div className="items-info">
          <div className="product-img">
            <img src={image} alt="image" />
          </div>

          <div className="title">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>

          <div className="add-minus-quantity">
            <RemoveIcon className="fa-minus minus" />
            <input type="text" placeholder="0" disabled />
            <AddIcon className="fa-plus add" />
          </div>

          <div className="price">
            <h3>Rs.{price}</h3>
          </div>

          <div className="remove-item">
            <DeleteIcon className="fa-trash-alt remove" />
          </div>
        </div>
        <hr />
      </>
    </>
  );
};

export default CartItems;
