import React from 'react'
import { Link } from 'react-router-dom'
import '../UserSideBar/UserSideBar.css'

const UserSideBar = () => {
    return (
        <div className="sidebar pt-3 pb-4 px-2">
            <div className="d-flex flex-column">
                <Link to="/user/allorders" className='admin-link nav-link text-decoration-none'>
                    <div className="admin-side-text p-2 mx-auto text-center">
                        اداره الطلبات
                    </div>
                </Link>
                <Link to="/user/favoriteproducts" className='admin-link nav-link text-decoration-none'>
                    <div className="admin-side-text mt-1 p-2 mx-auto text-center">
                        المنتجات المفضلة
                    </div>
                </Link>
                <Link to="/user/addresses" className='admin-link nav-link text-decoration-none'>
                    <div className="admin-side-text mt-1 p-2 mx-auto text-center">
                        العناوين الشخصية
                    </div>
                </Link>

                <Link to="/user/profile" className='admin-link nav-link text-decoration-none'>
                    <div className="admin-side-text mt-1 p-2 mx-auto text-center">
                        الملف الشخصي
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default UserSideBar