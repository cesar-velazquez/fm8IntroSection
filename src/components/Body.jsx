import React from 'react'
import { AudioPhile, Databiz, Maker, Meet } from '../shared/Icons'

const Body = () => {
    return (
        <section className='  sm:p-4 min-h-screen grid grid-rows-[1fr_auto]  ' >
            <section className=' sm:flex sm:flex-row-reverse sm:pt-8
            '>
                <div className='pt-4' >
                    <img className='sm:hidden ' src="/images/image-hero-mobile.png" alt="User" />
                    <img className='sm:block hidden' src="/images/image-hero-desktop.png" alt="User" />
                </div>
                <article className='px-4 sm:h-[300px] sm:m-auto  ' >
                    <div className='flex gap-1 justify-center py-8 sm:p-8 sm:grid sm:justify-start sm:px-4'>
                        <h1 className='text-center text-3xl font-bold
                sm:text-4xl sm:flex 
                lg:text-7xl' >Make</h1>
                        <h1 className='text-center text-3xl font-bold                 
                sm:text-4xl 
                lg:text-6xl ' >remote work</h1>
                    </div>
                    <p className='px-2 mx-0.5 text-gray-500 font-normal text-center
                sm:mx-1 sm:py-4 sm:text-xs  sm:w-[80%]
                lg:w-[50%] lg:text-[.8rem] ' >Get your team in sync, no matter your location. Streamline processes,
                        create team rituals, and watch productivity soar.</p>
                    <button className='bg-black text-AlmostWhite font-bold px-4 py-2 text-center block my-4 mx-auto rounded-xl ' >Learn More</button>
                </article>
            </section>

            <section 
            className='flex justify-center items-center gap-4 px-4 pb-4
            sm:w-[50%] '>
                <Databiz />
                <AudioPhile />
                <Meet />
                <Maker />
            </section>

        </section>
    )
}

export default Body