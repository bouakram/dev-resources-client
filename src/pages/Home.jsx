import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import axios from 'axios'
import { API_BASE, TOKEN_KEY } from '../utils/constants'
import ThemeToggle from '../components/ThemeToggle'

function Home() {
    const [categories, setCategories] = useState(null)
    const [loading, setLoaidng] = useState(true)
    const [error, setError] = useState(null)

    const getCategories = async () => {
        try {
            const res = await axios.get(API_BASE + "/categories", {
                headers: {
                    authorization: `Bearer ${TOKEN_KEY}`
                }
            })
            const { data } = await res.data
            setCategories(data)
            setError(null)
            setLoaidng(false)
        } catch (error) {
            console.log(error.message)
            setError(error.message)
            setLoaidng(false)
        }
    }

    useEffect(() => {
        getCategories()
    }, [])
    return (
        <div className="bg-white dark:bg-gray-800 min-h-screen">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <ThemeToggle />
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] dark:from-[#a75477] to-[#9089fc] dark:to-[#5d58a1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>
                <div className="mx-auto max-w-2xl flex items-center justify-center flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl uppercase">Design Resources For Developers</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Welcome to 'Design Resources for Developers' – your go-to destination for a thoughtfully curated selection of design and user interface resources. Explore a diverse range of assets, from stock photos and web templates to CSS frameworks, UI libraries, and essential design tools, all handpicked to elevate your creative projects.</p>
                    </div>
                </div>
            </div>
            <section className='mt-28 mx-auto'>
                <h2 className='text-center font-semibold text-3xl text-gray-900 dark:text-gray-100 mb-16'>Categories</h2>
                <div className='flex flex-wrap gap-4 justify-center items-center'>
                    {
                        loading ? 'loading data ...' : error ? <>{error}</> :
                            categories?.map((catg, index) => (
                                <React.Fragment key={index}>
                                    <Categories {...catg} />
                                </React.Fragment>
                            ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Home