import { GET_ALL_CATEGORY, GET_ERROR } from './../type';
import useGetData from './../../Hooks/useGetData';

export const getAllCategory= (limit) => async (dispatch)=> {
    try {
        //const res = await BaseUrl.get('/api/v1/categories')
        
        const response = await useGetData

        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response.data
        })
    }
    catch(e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e
        })
    }
}