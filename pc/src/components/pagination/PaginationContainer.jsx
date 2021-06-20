import { connect } from "react-redux";


import Pages from "./Pages";
import { setDeviceData } from "../../redux/actions/actions";



const mapState = (state) => ({
	is200Code: state.deviceReducer.is200Code,
	count: state.deviceReducer.count
})

const mapDispatch = {
	setDeviceData
}

const PageContainer = connect(mapState, mapDispatch)(Pages);

export default PageContainer;