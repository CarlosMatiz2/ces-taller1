function Summary({ summary }) {
  return (
    <div>
      <h1>Summary</h1>
      <p>Subtotal: {summary}</p>
      <p>Shipping: FREE</p>
      <p>Coupon: </p>
      <input type="number" name="coupon" id="coupon" min="0" max="100" />
    </div>
  );
}

export default Summary;
