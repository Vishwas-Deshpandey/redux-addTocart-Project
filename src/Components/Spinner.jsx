import React from 'react'

const Spinner = () => {
    return (
        <div className='d-flex align-items-center justify-content-center w-100 gap-4' style={{ height: "100vh" }}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h4 className='text-secondary'>Please Wait We Are Fetching Products....</h4>
        </div>

    )
}

export default Spinner