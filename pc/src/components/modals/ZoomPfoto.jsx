import React from "react"
import { Modal, Image } from 'react-bootstrap';


const ZoomPfoto = ({
	show,
	setVisible,
	photo,
}) => {


	return show && (
		<Modal
			show={show}
			onHide={() => setVisible(false)}
			centered

		>
			<Modal.Body >
				<Image
					width={500}
					height={500}
					src={process.env.REACT_APP_API_URL + photo.img}
					alt={photo.name}
					className="img-thumbnail"
					onClick={() => setVisible(false)}
				/>
			</Modal.Body>
		</Modal>
	)
}

export default ZoomPfoto