import React from 'react'

const Header = () => {
    return (
        <section>
            <nav className='flex font-bold text-4xl justify-between p-2 ' >
                <section className='flex items-center gap-14'>
                    <h1 className='' >snap</h1>
                    <section className='hidden sm:block ' >
                        <ul className='sm:flex sm:gap-4 sm:text-xs sm:text-MediumGray cursor-pointer '>
                            <select className='cursor-pointer' name="" id="">
                                <option value="">Features</option>
                            </select>
                            <select className='cursor-pointer' name="" id="">
                                <option value="">Company</option>
                            </select>
                            <li>Careers</li>
                            <li>About</li>
                        </ul>
                    </section>
                </section>

                <section className='flex items-center gap-4 px-4' >
                    <i className='sm:hidden bx bx-menu cursor-pointer'></i>
                    <button className='hidden sm:block text-xs text-MediumGray 
                    font-normal '>Login</button>
                    <button className='hidden sm:block text-xs font-normal border border-gray-500 px-4 py-2 rounded-xl  text-MediumGray ' >Register</button>
                </section>
            </nav>
        </section>
    )
}

export default Header