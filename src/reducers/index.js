const initialState = {
	insurance: {
		loading: false,
		success: false
	}
}
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOADING":
			return {...state, insurance: {...state.insurance, loading: true}};
		case "SUCCESS":
			return {...state, insurance: {success: true, loading: false}}
		default:
			return state;
	}
};

export default rootReducer;