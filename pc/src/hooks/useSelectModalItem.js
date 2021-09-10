import { useState } from 'react';



const useSelectModalItem = () => {

	const [selectedItem, setSelectedItem] = useState({ id: 1, name: '', img: '', device: { name: "1" } });
	const [isModalVisible, setIsModalVisible] = useState(false);

	const expandModal = (item) => {
		setSelectedItem(item);
		setIsModalVisible(true);
	}



	return [[isModalVisible, setIsModalVisible], selectedItem, expandModal]
}

export default useSelectModalItem;