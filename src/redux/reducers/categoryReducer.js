import { GET_ALL_CATEGORY, GET_ERROR } from './../type';

const inital = {
    category: [],
    loading: true
}

const categoryReducer = (state= inital, action) => {
    if(action.type === GET_ALL_CATEGORY) {
        return{
            ...state,
            category: action.payload,
            loading: false
        }
    }
    else if(action.type === GET_ERROR) {
        return{
            ...state,
            category: action.payload,
            loading: true
        }
    }
    else {
        return state
    }
}

export default categoryReducer