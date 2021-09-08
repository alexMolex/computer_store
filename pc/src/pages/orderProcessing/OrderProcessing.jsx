import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';


import Order from '../../components/modals/Order';


const OrderProcessing = ({
	basketId,
	createOrderProcessingData,
	price,
	orderName,
	buttonName,
	processorId,
	videocardId,
	computerCaseId,
	RAM,
	overclocking,
	storageVolume,
	ssd,
	computerCase,
	videocard,
	processor,
	userContactData,

}) => {

	const [orderVisible, setOrderVisible] = useState(false)



	return (
		<div >
			<Container className="d-flex flex-column" >
				<Button

					className="mt-1 mb-2 btn btn-success"
					onClick={() => setOrderVisible(true)}
				>
					{
						buttonName.length > 20 ?
							<h6>{buttonName}</h6> :
							<h5>{buttonName}</h5>
					}

				</Button>

				<Order
					basketId={basketId}
					createOrderProcessingData={createOrderProcessingData}
					price={price}
					orderName={orderName}
					processorId={processorId}
					videocardId={videocardId}
					show={orderVisible}
					computerCaseId={computerCaseId}
					onHide={() => setOrderVisible(false)}
					RAM={RAM}
					orderOverclocking={overclocking}
					orderStorageVolume={storageVolume}
					orderSsd={ssd}
					computerCase={computerCase || 0}
					videocard={videocard || 0}
					processor={processor || 0}
					userContactData={userContactData || ""}

				/>

			</Container>
		</div>
	);
};

export default OrderProcessing;