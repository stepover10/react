import { combineReducers } from 'redux'

const reducers = (
	state = {}, 
	params = { 
		type: null
	}
) => {
		if ('USER_ACTION' === params.type) {	
		return {
			...state,
			status: 'CART',
			userNumber: 918929189
		}
	}

	return state;
}

const campaignStepApp = combineReducers({
	reducers
})

export default campaignStepApp