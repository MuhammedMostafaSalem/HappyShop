import React from 'react'
import '../Pagination/Pagination.css'
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Pagination = () => {
    const handlePageClick = () => { };

    return (
        <div>
            <ReactPaginate
            breakLabel="..."
            nextLabel={<FontAwesomeIcon icon={faChevronLeft} className='fs-4' />}
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={50}
            previousLabel={<FontAwesomeIcon icon={faChevronRight} className='fs-4' />}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link rounded-circle mx-1"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link rounded-circle"}
            nextLinkClassName={"page-link rounded-circle"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link rounded-circle"}
            activeClassName={"active"}
            containerClassName={"pagination justify-content-center p-3"}
            />
        </div>
    )
}

export default Pagination