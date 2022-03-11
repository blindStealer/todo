import React from 'react'
import { getPagesArray } from '../../../utils/pages'

export const Pagination = ({ totalPages, changePage, page }) => {

    let pagesArray = getPagesArray(totalPages)


    return (
        <div className='page__wrapper'>
            {pagesArray.map((item) => {
                return <span
                    className={item === page ? 'page current__page' : 'page'}
                    onClick={() => changePage(item)}
                    key={item}
                >
                    {item}
                </span>
            })}
        </div>
    )
}
