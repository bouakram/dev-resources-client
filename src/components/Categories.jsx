import React from 'react'
import { Link } from 'react-router-dom'

function Categories({ attributes }) {
    return (
        <Link to={`category/${attributes.category}`} className='p-8 text-center text-gray-900 dark:text-gray-100 text-lg font-medium border border-black/20 dark:border-white/80 rounded-3xl w-1/2 sm:w-1/3 lg:w-1/4 cursor-pointer shadow-sm hover:shadow-md bg-gray-50 dark:hover:shadow-white/20 dark:bg-gray-700 transition'>
            {attributes.category}
        </Link>
    )
}

export default Categories