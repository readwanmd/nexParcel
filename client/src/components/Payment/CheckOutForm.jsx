import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import FormElement from './FormElement';

const CheckOutForm = ({ price }) => {
	const [error, setError] = useState('');
	const [clientSecret, setClientSecret] = useState('');
	const axiosSecure = useAxiosSecure();
	const { user } = useAuth();
	const { handleSubmit } = useForm();
	const navigate = useNavigate();

	useEffect(() => {
		if (price > 0) {
			// Simulate setting client secret
			setClientSecret('fake_client_secret');
		}
	}, [price]);

	const handlePayment = async () => {
		// Simulate a successful payment process
		console.log('Simulating payment method creation...');

		const paymentMethod = {
			id: 'fake_payment_method_id',
			type: 'card',
			billing_details: {
				email: user?.email || 'anonymous',
				name: user?.displayName || 'anonymous',
			},
		};

		console.log('Payment method:', paymentMethod);
		setError('');

		// Simulate confirming the payment
		console.log('Simulating payment confirmation...');

		const paymentIntent = {
			id: 'fake_payment_intent_id',
			status: 'succeeded',
		};

		if (paymentIntent.status === 'succeeded') {
			navigate('/dashboard/payment-success', {
				state: { transactionId: paymentIntent?.id },
			});
		} else {
			setError('Payment failed');
			toast.error('Payment failed');
		}
	};

	return (
		<div className="max-w-lg mx-auto p-8 shadow-md rounded-lg">
			<form onSubmit={handleSubmit(handlePayment)}>
				<h3 className="text-2xl font-medium mb-8">
					Payment Your Delivered Parcel
				</h3>
				<FormElement clientSecret={clientSecret} error={error} stripe={null} />
			</form>
		</div>
	);
};

export default CheckOutForm;
