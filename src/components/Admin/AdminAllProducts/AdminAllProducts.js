import React from 'react'
import { Row } from 'react-bootstrap'
import '../AdminAllProducts/AdminAllProducts.css'
import AdminAllProductsCard from './../AdminAllProductsCard/AdminAllProductsCard';

const AdminAllProducts = () => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع المنتجات</div>
            <Row className='justify-content-start'>
                <AdminAllProductsCard/>
                <AdminAllProductsCard/>
                <AdminAllProductsCard/>
                <AdminAllProductsCard/>
                <AdminAllProductsCard/>
                <AdminAllProductsCard/>
            </Row>
        </div>
    )
}

export default AdminAllProducts