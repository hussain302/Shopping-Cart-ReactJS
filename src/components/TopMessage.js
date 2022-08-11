import React from 'react'

export default function TopMessage() {
    return (
        <div className='container-fluid'>
            <div className="alert alert-danger alert-dismissible fade show text-center" role="alert">
                <strong>Note:</strong> Deliveries can't be delivered on local and international holidays
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}
