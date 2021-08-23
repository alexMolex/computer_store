import { connect } from "react-redux";

import OrderProcessing from "./OrderProcessing";


const mapState = state => ({
	userContactData: state.orderProcessing.userContactData,
})


const mapDispatch = {}

const ConfiguratorContainer = connect(mapState, mapDispatch)(OrderProcessing);

export default ConfiguratorContainer;