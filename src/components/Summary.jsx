import { useState } from "react";

function Summary({ summary, setSummary }) {
  const [coupon, setCoupon] = useState(0);
  const handleChange = ({ target }) => {
    if (coupon > summary) {
      setCoupon(0);
    } else {
      setCoupon(Number(target.value));
    }
  };

  const handleBlur = () => {
    if (summary - coupon >= 0) {
      setSummary(summary - coupon);
    }
  };

  return (
    <div>
      <h1>Summary</h1>
      <div className="enter_coupon">
        <strong>ENTER COUPON CODE: </strong>
        <input
          type="number"
          name="coupon"
          min="0"
          max="100"
          id="coupon"
          className="input_coupon"
          value={coupon}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>
      <section className="container_total">
        <div>
          <p>SUBTOTAL</p>
          <p> {summary} </p>
        </div>
        <div>
          <p>SHIPPING</p>
          <p> FREE </p>
        </div>
        <div>
          <p>COUPON</p>
          <p> {coupon} </p>
        </div>
      </section>
      <div className="total_payable">
        <p className="text-total">TOTAL</p>
        <p> {summary} </p>
      </div>
    </div>
  );
}

export default Summary;
