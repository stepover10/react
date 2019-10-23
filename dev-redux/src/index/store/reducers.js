import { combineReducers } from 'redux'

const reduxDataProps = (state=[], action) =>{
    if( 'USER_DATA' === action.action ){
        return Object.assign({}, state, {
            userStatus: action.type
        })
    }

    if( 'USER_ACTION' === action.action ){
        return Object.assign({}, state, {
            userAction: action.type
        });
    }

    return state
}

const campaignStepApp = combineReducers({ reduxDataProps })
export default campaignStepApp