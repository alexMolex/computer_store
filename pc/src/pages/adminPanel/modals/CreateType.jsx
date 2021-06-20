import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';






const CreateType = ({ show, onHide, setCreateDeviceType, setDeviceTypeData }) => {

	const [value, setValue] = useState('')


	function handleSubmit(event) {
		event.preventDefault()
		setCreateDeviceType({ name: value })
			.then(data => {
				setDeviceTypeData()
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
					Добавить тип
        </Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						value={value}
						onChange={event => setValue(event.target.value)}
						placeholder={'Введите название типа'}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button
					variant="outline-success"
					onClick={handleSubmit}
				>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
}


export default CreateType;