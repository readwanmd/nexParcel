const PaymentBtn = ({ clientSecret, btnText, wFull }) => {
	return (
		<button type="submit" className={`btn ${wFull ? 'w-full' : ''}`}>
			{btnText}
		</button>
	);
};

export default PaymentBtn;
