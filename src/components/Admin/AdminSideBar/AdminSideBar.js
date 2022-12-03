import React from 'react'
import { Link } from 'react-router-dom'
import '../AdminSideBar/AdminSideBar.css'

const AdminSideBar = () => {
    return (
        <div className="sidebar pt-3 pb-4 px-2">
            <div className="d-flex flex-column">
                <Link to="/admin/allorders" className='admin-link nav-link text-decoration-none'>
                    <div className="admin-side-text p-2 mx-auto text-center">
                        اداره الطلبات
                    </div>
                </Link>
                <Link to="/admin/allproducts" className='admin-link nav-link text-decoration-none'>
                    <div className="admin-side-text mt-1 p-2 mx-auto text-center">
                        اداره المنتجات
                    </div>
                </Link>
                <Link to="/admin/addbrand" className='admin-link nav-link text-decoration-none'>
                    <div className="admin-side-text mt-1 p-2 mx-auto text-center">
                        اضف ماركه
                    </div>
                </Link>

                <Link to="/admin/addcategory" className='admin-link nav-link text-decoration-none'>
                    <div className="admin-side-text mt-1 p-2 mx-auto text-center">
                        اضف تصنيف
                    </div>
                </Link>

                <Link to="/admin/addsubcategory" className='admin-link nav-link text-decoration-none'>
                    <div className="admin-side-text mt-1 p-2 mx-auto text-center">
                        اضف تصنيف فرعي
                    </div>
                </Link>
                <Link to="/admin/addproduct" className='admin-link nav-link text-decoration-none'>
                    <div className="admin-side-text mt-1 p-2 mx-auto text-center">
                        اضف منتج
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default AdminSideBar