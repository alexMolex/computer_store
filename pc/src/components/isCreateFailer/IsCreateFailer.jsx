import React from 'react';



const IsCreatFailerComp = ({ isCreateFailer, addType }) => {

	return (
		<div className="container-sm alert-z position-absolute pr-5 mt-2 ">
			{isCreateFailer &&
				<div className="alert alert-danger text-center w-70 alert-z" role="alert">
					{`При добавлении ${addType} произошла ошибка!`}
				</div>}
		</div>
	)
};

export default IsCreatFailerComp;