import React, { useEffect, useRef, useState } from 'react'
import { Calendar, Planing, Reminder, TodoList } from '../shared/Icons'


const Header = () => {
    const [isopen, setIsopen] = useState(false)
    const [isCompany, setIsCompany] = useState(false)

    const menuRef = useRef(null)
    const menuRefCompany = useRef(null)
    

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsopen(false)             
        }        
    }
    const handleClickOutCompany = (e) => {
        if (menuRefCompany.current && !menuRefCompany.current.contains(e.target)) {
            setIsCompany(false)
        }
    }
    

    const handleOpen = () => {
        setIsopen((prevState) => !prevState)        
    }

    const handleOpenCompany = () => {
        setIsCompany(!isCompany)
    }

    useEffect( () => {
        if (isopen || isCompany ) {
            document.addEventListener("mousedown", handleClickOutside)            
            document.addEventListener("mousedown", handleClickOutCompany)            
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("mousedown", handleClickOutCompany)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)  
            document.removeEventListener("mousedown", handleClickOutCompany)            
        }
    }, [isopen, isCompany])
    return (
        <section>
            <nav className='flex font-bold text-4xl justify-between p-2 ' >
                <section className='flex items-center gap-14'>
                    <h1 className='' >snap</h1>
                    <section className='hidden sm:block ' >
                        <ul className='sm:flex sm:gap-4 sm:text-xs md:text-[16px] sm:text-MediumGray cursor-pointer 
                        '>

                            <div className='relative'>
                                <div className='' 
                                onClick={handleOpen}
                                ref={menuRef} >
                                    <span>Features</span>
                                    <i className='bx bx-chevron-down '></i>
                                </div>
                                {
                                    isopen ? 
                                    <div                                     
                                    className='absolute 
                                    sm:top-6 sm:left-[-95px] sm:grid sm:gap-2
                                    md:top-8 md:left-[-80px]
                                    shadow-lg shadow-black py-4 px-5 rounded-lg bg-[#ffffff] 
                                    '>
                                    <div className='hover:border hover:border-black rounded-xl m-2 p-2 flex items-center w-[120px] justify-start gap-2'>
                                        <TodoList />
                                        <a href='#' className=" ">Todo List</a>                                        
                                    </div>
                                    <div className='hover:border hover:border-black rounded-xl m-2 p-2 flex items-center w-[120px] justify-start gap-2'>
                                        <Calendar />
                                        <a href='#' className="">Calendar</a>                                        
                                    </div>
                                    <div className='hover:border hover:border-black rounded-xl m-2 p-2 flex items-center w-[120px] justify-start gap-2'>
                                        <Reminder />
                                        <a href='#' className="">Reminders</a>                                        
                                    </div>
                                    <div className='hover:border hover:border-black rounded-xl m-2 p-2 flex items-center w-[120px] justify-start gap-2'>
                                        <Planing />
                                        <a href='#' className="">Planning</a>                                        
                                    </div>                                    
                                    </div>
                                    : 
                                    <div className=''></div>
                                }                               
                            </div>

                            <div>
                                <div 
                                ref={menuRefCompany}
                                onClick={handleOpenCompany}
                                >
                                    <span>Company</span>
                                    <i className='bx bx-chevron-down'></i>
                                </div>
                                {
                                    isCompany ? 
                                    <div                                     
                                    className='absolute py-4 px-5 rounded-lg 
                                    shadow-black shadow-md bg-[#ffffff]
                                    grid gap-3'>
                                    <div className='hover:border hover:border-black m-1 p-2 rounded-2xl'>
                                        <span className="">History</span>
                                    </div>
                                    <div className='hover:border hover:border-black m-1 p-2 rounded-2xl'>
                                        <span className="">Our Team</span>
                                    </div>
                                    <div className='hover:border hover:border-black m-1 p-2 rounded-2xl'>
                                        <span className="">Blog</span>
                                    </div>
                                </div>
                                :
                                <div></div>
                                }
                            </div>

                            <li>Careers</li>
                            <li>About</li>
                        </ul>

                    </section>
                </section>

                <section className='flex items-center gap-4 px-4' >
                    <i className='sm:hidden bx bx-menu cursor-pointer'></i>
                    <button className='hidden sm:block text-xs sm:text-[16px] text-MediumGray 
                    font-normal '>Login</button>
                    <button className='hidden sm:block text-xs font-normal border border-gray-500 
                    px-4 py-2 rounded-xl  text-MediumGray sm:text-[16px] ' >Register</button>
                </section>
            </nav>
        </section>
    )
}

export default Header