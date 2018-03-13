const initialState = {
	insurance: {}
}
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_INFO":
			return {...state, insurance: {...action.payload}};
		default:
			return state;
	}
};

export default rootReducer;