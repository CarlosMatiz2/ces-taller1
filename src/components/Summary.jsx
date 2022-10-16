import { useState } from "react";

function Summary({ summary, setSummary}) {
  const [coupon, setCoupon] = useState(0);
  const handleChange = ({target}) => {
    if(coupon > summary){
      setCoupon(0);
    }else{
      setCoupon(Number(target.value));
    }
    handleBlur();
  }

  const handleBlur = () => {
    if(summary - coupon >= 0){
      setSummary(summary - coupon);
    }
  }

  return (
    <div>
      <h1>Summary</h1>
      <p>Subtotal: {summary}</p>
      <p>Shipping: FREE</p>
      <p>Coupon: </p>
      <input type="number" name="coupon" min="0" max="100" id="coupon" value={coupon} onBlur={handleBlur} onChange={handleChange} />
    </div>
  );
}

export default Summary;
