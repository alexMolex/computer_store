import React from 'react';

import SearchContainer from "../search/SearchContainer"
import CategoriesContainer from "../categories/CategoriesContainer"


const Sidebar = () => {

	return (
		<div className="well pt-3">
			<SearchContainer />
			<CategoriesContainer />
		</div>
	);
}

export default Sidebar;