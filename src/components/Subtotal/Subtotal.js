import React from 'react';
import './Subtotal.scss';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";


function Subtotal() {
  const [{basket}] = useStateValue();
  const newBasket = [...basket?.map(item => item.price)]
  const addedAmount = newBasket.reduce((a, b) => a + b, 0)

  console.log("logging from here", addedAmount)
  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong> ${addedAmount}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;