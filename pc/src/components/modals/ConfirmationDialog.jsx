import React from "react"
import { Button, Modal } from 'react-bootstrap';


const ConfirmModal = ({

	show,
	setVisible,
	confirm,

	headerText,
	confirmText,
	unConfirmText,

}) => {







	return show && (
		<Modal
			show={show}
			onHide={() => setVisible(false)}
			// size="lg"
			centered
		>

			<Modal.Body >
				<div>
					<h3 className="text-center pt-1 mb-3">{headerText}</h3>
					<hr />
					<div className="text-center pt-2 mb-3">
						<Button
							variant={"outline-success"}
							className="mr-2"

							onClick={() => confirm()}
						>
							<h5>{confirmText}</h5>
						</Button>
						<Button
							className="ml-2"
							variant={"outline-danger"}
							onClick={() => setVisible(false)}
						>
							<h5>{unConfirmText}</h5>
						</Button>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	)
}

export default ConfirmModal