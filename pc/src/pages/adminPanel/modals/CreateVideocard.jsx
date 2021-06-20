import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';




const CreateVideocard = ({ show, onHide, setCreateDeviceVideocard, setDeviceVideocardData }) => {

	const [value, setValue] = useState('')

	function handleSubmit(event) {
		event.preventDefault()
		setCreateDeviceVideocard({ name: value })
			.then(data => {
				setDeviceVideocardData()
				setValue('')
				onHide()
			})
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Добавить бренд
        </Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						value={value}
						onChange={event => setValue(event.target.value)}
						placeholder={'Введите название видеокарты'}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success" onClick={handleSubmit}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
}


export default CreateVideocard;