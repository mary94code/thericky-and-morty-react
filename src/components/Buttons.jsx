import React from 'react'

export default function Buttons({page, setPage, totalPages}) {
    return (

        <div className='page__buttons'>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
            {page}
            <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
        </div>

    )
}
