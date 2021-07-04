import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';


import Order from './modals/Order';



const OrderProcessing = ({
	basketId,
	createOrderProcessingData,
	price,
	orderName,
	buttonName,
	processorId,
	videocardId,
}) => {

	const [orderVisible, setOrderVisible] = useState(false)

	return (
		<div >
			<Container className="d-flex flex-column" >
				<Button
					variant={'outline-dark'}
					className="mt-2 pt-2"
					onClick={() => setOrderVisible(true)}
				>
					{buttonName}
				</Button>

				<Order
					basketId={basketId}
					createOrderProcessingData={createOrderProcessingData}
					price={price}
					orderName={orderName}
					processorId={processorId}
					videocardId={videocardId}
					show={orderVisible}
					onHide={() => setOrderVisible(false)}
				/>

			</Container>
		</div>
	);
};

export default OrderProcessing;