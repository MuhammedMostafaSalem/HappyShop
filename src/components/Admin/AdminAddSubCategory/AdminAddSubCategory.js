import React from 'react'
import '../AdminAddSubCategory/AdminAddSubCategory.css'
import { Col, Row } from 'react-bootstrap'

const AdminAddSubCategory = () => {
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافة تصنيف فرعى جديد</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف الفرعي"
                    />
                    <select name="languages" id="lang" className="select mt-3 p-2 input-form-area">
                        <option value="val">التصنيف الاول</option>
                        <option value="val2">التصنيف الثاني</option>
                        <option value="val2">التصنيف الثالث</option>
                        <option value="val2">التصنيف الرابع</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn btn-dark mt-2">حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddSubCategory