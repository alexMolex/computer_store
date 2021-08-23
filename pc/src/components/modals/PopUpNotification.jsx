import React from "react"
import { Button, Modal } from 'react-bootstrap';


const PopUpNotification = ({
	show,
	setVisible,
	headerText,
	confirmText,
}) => {




	return show && (
		<Modal
			show={show}
			onHide={() => setVisible(false)}
			centered
		>
			<Modal.Body >
				<div>
					<h3 className="text-center pt-1 mb-3">{headerText}</h3>
					<hr />
					<div className="text-center pt-2 mb-3">
						<Button
							className="ml-2"
							variant={"outline-success"}
							onClick={() => setVisible(false)}
						>
							<h5>{confirmText}</h5>
						</Button>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	)
}

export default PopUpNotification