import {
	FETCH_COMPUTER_CASE_SUCCESS
} from "../actions/actionTypes/index"


const initialState = {
	isComputerCasesLoading: false,
}

const computerCase = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COMPUTER_CASE_SUCCESS:
			return {
				...state,
				data: [...action.payload],
				isComputerCasesLoading: true,
			}
		default:
			return state
	}
}



export default computerCase;