import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';




const CreateBrand = ({ show, onHide, setCreateDeviceBrand, setDeviceBrandData }) => {

	const [value, setValue] = useState('')

	function handleSubmit(event) {
		event.preventDefault()
		setCreateDeviceBrand({ name: value })
			.then(data => {
				setDeviceBrandData()
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
						placeholder={'Введите название бренда'}
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


export default CreateBrand;