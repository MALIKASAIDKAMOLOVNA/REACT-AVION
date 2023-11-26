import { useEffect, useState } from "react";
import "./shopping.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Shopping = ({ setProductId, productId }) => {
  const [total, setTotal] = useState(0);

  const handlePrice = () => {
    let rate = 0;
    productId.forEach((item) => {
      rate += item.quantity * item.price;
    });
    setTotal(rate);
  };

  useEffect(() => {
    handlePrice();
  }, [productId]);

  const handleChange = (item, d) => {
    let ind = 1;

    productId.forEach((data, index) => {
      if (data.id == item) {
        ind = index;
      }
    });

    const tempArr = productId;
    tempArr[ind].quantity += d;

    if (tempArr[ind].quantity === 0) {
      tempArr[ind].quantity = 1;
    } else {
      setProductId([...tempArr]);
    }

    handlePrice();
  };

  const removeItem = (id) => {
    const updateCard = productId.filter((item) => item.id !== id);
    setProductId(updateCard);
    handlePrice();
  };

  return (
    <div className="Cart">
      <main>
        <h1>Your shopping cart</h1>
        <div className="cart_box">
          <div className="top_title">
            <p>Product</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <div className="product_section">
            {productId &&
              productId.map((item, i) => {
                return (
                  <div className="box" key={item.id}>
                    <div className="img_part">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="info_part">
                      <div className="left_part">
                        <h2 className="name">{item.name}</h2>
                        <p className="description">
                          A timeless ceramic vase with a tri color grey glaze.
                        </p>
                        <p className="price">${item.price}</p>
                      </div>
                      <div className="right_part">
                        <div className="quantity_box">
                          <div
                            onClick={() => handleChange(item.id, -1)}
                            className="minus"
                          >
                            -
                          </div>
                          <p className="quantity">{item.quantity}</p>
                          <div
                            onClick={() => handleChange(item.id, +1)}
                            className="plus"
                          >
                            +
                          </div>
                        </div>
                        <p className="totalProductPrice">
                          ${item.price * item.quantity}
                        <FontAwesomeIcon
                          onClick={() => removeItem(item.id)}
                          className="trash"
                          icon={faTrash}
                        />
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div className="bottom">
              <div className="subtotal">
                <h1>Subtotal</h1>
                <p className="totalPrice">${total}</p>
              </div>
              <p className="taxes">
                Taxes and shipping are calculated at checkout
              </p>
              <button>Go to checkout</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shopping;
