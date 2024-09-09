import PaymentBtn from '../Shared/PaymentBtn';

const FormElement = ({ error, clientSecret }) => {
	const options = {
		style: {
			base: {
				fontSize: '16px',
				color: '#424770',
				'::placeholder': {
					color: '#aab7c4',
				},
			},
			invalid: {
				color: '#9e2146',
			},
		},
	};

	return (
		<div>
			<div className="mb-4">
				<label className="block font-medium mb-2">Card Number</label>
				{/* Simulate CardNumberElement */}
				<input className="input-style" placeholder="1234 1234 1234 1234" />
			</div>
			<div className="mb-4">
				<label className="block font-medium mb-2">Expiration Date</label>
				{/* Simulate CardExpiryElement */}
				<input className="input-style" placeholder="MM/YY" />
			</div>
			<div className="mb-4">
				<label className="block font-medium mb-2">CVC</label>
				{/* Simulate CardCvcElement */}
				<input className="input-style" placeholder="CVC" />
			</div>
			{error && <p className="text-red-600 mb-4">{error}</p>}

			<PaymentBtn clientSecret={clientSecret} btnText="Pay" wFull={true} />
		</div>
	);
};

export default FormElement;
