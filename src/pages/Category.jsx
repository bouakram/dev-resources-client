import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_BASE, API_BASE_MEDIA, TOKEN_KEY } from '../utils/constants'
import axios from 'axios'
import ThemeToggle from '../components/ThemeToggle'

function Category() {
    const { category } = useParams()
    const [resources, setResources] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const getResource = async () => {
        try {
            const res = await axios.get(API_BASE + "/resources?[filters][category][category][$eq]=" + category + "&populate=*", {
                headers: {
                    Authorization: `Bearer ${TOKEN_KEY}`
                }
            })
            const { data } = await res.data
            setError(null)
            setLoading(false)
            setResources(data)
        } catch (error) {
            console.log(error.message)
            setError(error.message)
            setLoading(false)
        }
    }
    useEffect(() => {
        getResource()
    }, [])
    return (
        <div className='bg-white isolate dark:bg-gray-800'>
            <ThemeToggle />
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] dark:from-[#a75477] to-[#9089fc] dark:to-[#5d58a1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
            </div>
            <div className='min-h-screen mx-auto'>
                <h2 className='text-center font-semibold text-3xl text-gray-900 dark:text-gray-100 py-16'>{category}</h2>
                <div className='flex ic justify-center flex-wrap gap-4'>
                    {
                        loading ? "loading data ..." : error ? <>{error}</> :
                            resources?.map((resource, index) => (
                                <div key={index} className='flex flex-col gap-2 w-full mx-6 sm:mx-0 sm:w-1/3 lg:w-1/4 p-2 border border-black/20 dark:border-white/80 rounded-3xl shadow-sm hover:shadow-md bg-gray-50 dark:hover:shadow-white/20 dark:bg-gray-700 transition'>
                                    <div className='flex items-center gap-2'>
                                        <img src={`${API_BASE_MEDIA}${resource.attributes.image.data.attributes.url}`} alt={resource.attributes.image.data.attributes.name} height={50} width={50} className='border-2 border-white rounded-full w-[2.5rem] h-[2.5rem]' />
                                        <h3 className='font-semibold text-gray-900 dark:text-gray-100'>{resource.attributes.website}</h3>
                                    </div>
                                    <p className='text-clip text-gray-600 dark:text-gray-300'>{resource.attributes.description}</p>
                                    <Link className='py-2 px-3 mt-auto w-[max-content] text-gray-100 dark:hover:text-gray-900 font-semibold bg-gray-700 dark:bg-gray-200/20 dark:hover:bg-gray-200 rounded-3xl hover:bg-gray-950 transition' to={resource.attributes.url} target="_blank">Open Website</Link>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Category