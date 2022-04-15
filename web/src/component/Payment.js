import { useState } from 'react';
import StripeContainer from './StripeContainer';

function Payment({price}) {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='payment'>
		
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>Total price for payment {price} som</h3>
					{/* <img src={spatula} alt='Spatula' /> */}
					<button className="btn pay-btn" onClick={() => setShowItem(true)}>Purchase </button>
				</>
			)}
		</div>
	);
}

export default Payment;
