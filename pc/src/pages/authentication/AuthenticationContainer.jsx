import { connect } from 'react-redux';

import Authentication from './Authentication'
import { setLoginAuthUserData, setRegistrationAuthUserData } from '../../redux/actions/actions'



const mapState = state => {
	return {
		isAuth: state.checkAuthReducer.isAuth
	}
}

const mapDispatch = {
	setLoginAuthUserData,
	setRegistrationAuthUserData
}


export default connect(mapState, mapDispatch)(Authentication);