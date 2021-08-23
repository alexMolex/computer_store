import React from "react"
import { Button, Image, Modal } from 'react-bootstrap';

import OrderDeviceCard from "../orderDeviceCard/OrderDeviceCardContainer";

const UserOrdersPopup = ({
	show,
	setVisible,
	isOrdersListLoading,
	ordersData,
	isAdminPage,
}) => {


	return (
		<Modal
			show={show}
			onHide={() => setVisible(false)}
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title>
					{ordersData.length === 0 ? "Список заказов пуст" : "Заказы"}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<OrderDeviceCard
					isOrdersListLoading={isOrdersListLoading}
					ordersData={ordersData}
					isAdminPage={isAdminPage}
				/>
				<Button
					className="float-right mt-2 pb-0"
					variant={"outline-dark"}
					onClick={() => setVisible(false)}
				>
					<h5>Закрыть</h5>
				</Button>
			</Modal.Body>

		</Modal>
	)
}

export default UserOrdersPopup