import React, { useEffect } from 'react'
import CategoryContainer from './../../components/Category/CategoryContainer';
import Pagination from './../../components/Utility/Pagination/Pagination';
import {useSelector, useDispatch} from 'react-redux'
import { getAllCategory } from './../../redux/actions/categoryAction';
const AllCategoryPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory())
    }, [dispatch])
    
    const data =useSelector(state => state.allCategory.category)
    const loading =useSelector(state => state.allCategory.loading)
    console.log(data)
    console.log(loading)

    return (
        <div style={{minHeight: '505px'}}>
            <CategoryContainer/>
            <Pagination/>
        </div>
    )
}

export default AllCategoryPage