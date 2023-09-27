import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Planing, Reminder, TodoList } from '../shared/Icons';
import { Link } from 'react-router-dom';
import Login from '../Pages/Login';

const Header = () => {
    const [isopen, setIsopen] = useState(false);
    const [isCompany, setIsCompany] = useState(false);
    const [isOpenMobile, setIsOpenMobile] = useState(false);
    const [isopenFeatures, setIsopenFeatures] = useState(false);
    const [isOpenCompany, setIsOpenCompany] = useState(false)

    const menuRef = useRef(null);
    const menuRefCompany = useRef(null);
    const menuMobileRef = useRef(null);

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsopen(false);
        }
    };

    const handleClickOutCompany = (e) => {
        if (menuRefCompany.current && !menuRefCompany.current.contains(e.target)) {
            setIsCompany(false);
        }
    };

    const handleOpen = () => {
        setIsopen((prevState) => !prevState);
    };

    const handleOpenCompany = () => {
        setIsCompany(!isCompany);
    };

    const handleOpenFeatures = () => {
        setIsopenFeatures(!isopenFeatures);
    };

    const handleOpenCompanyMobile = () => {
        setIsOpenCompany(!isOpenCompany)
    }

    const handleMobileMenuClick = () => {
        setIsOpenMobile(!isOpenMobile)
    }

    const handleClickInsideMobileMenu = (e) => {
        if (menuMobileRef.current && menuMobileRef.current.contains(e.target)) {
            return;
        }
        setIsOpenMobile(false);
    };

    useEffect(() => {
        if (isopen || isCompany) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('mousedown', handleClickOutCompany);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('mousedown', handleClickOutCompany);
        }


        if (isOpenMobile) {
            document.addEventListener('mousedown', handleClickInsideMobileMenu);
        } else {
            document.removeEventListener('mousedown', handleClickInsideMobileMenu);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('mousedown', handleClickOutCompany);

        };
    }, [isopen, isCompany]);

    return (
        <section className="">
            <nav className="flex font-bold text-4xl justify-between p-2">
                <section className="flex items-center gap-14">
                    <h1 className="">snap</h1>
                    <section className="hidden sm:block">
                        <ul className="sm:flex sm:items-center sm:gap-4 sm:text-xs md:text-[16px] sm:text-MediumGray cursor-pointer">
                            <div className="relative">
                                <div onClick={handleOpen} ref={menuRef}>
                                    <span className="hover:text-black hover:font-bold">Features</span>
                                    <i className={`bx ${isopen ? 'bx-chevron-up' : 'bx-chevron-down'}  `}></i>
                                </div>
                                {isopen ? (
                                    <div className="absolute sm:top-6 sm:left-[-95px] sm:grid sm:gap-2 md:top-8 md:left-[-80px] shadow-lg shadow-black py-4 px-5 rounded-lg bg-[#ffffff]">
                                        <div className="hover:border hover:border-black rounded-xl m-2 p-2 flex items-center w-[120px] justify-start gap-2">
                                            <TodoList />
                                            <a href="#" className=" ">
                                                Todo List
                                            </a>
                                        </div>
                                        <div className="hover:border hover:border-black rounded-xl m-2 p-2 flex items-center w-[120px] justify-start gap-2">
                                            <Calendar />
                                            <a href="#" className="">
                                                Calendar
                                            </a>
                                        </div>
                                        <div className="hover:border hover:border-black rounded-xl m-2 p-2 flex items-center w-[120px] justify-start gap-2">
                                            <Reminder />
                                            <a href="#" className="">
                                                Reminders
                                            </a>
                                        </div>
                                        <div className="hover:border hover:border-black rounded-xl m-2 p-2 flex items-center w-[120px] justify-start gap-2">
                                            <Planing />
                                            <a href="#" className="">
                                                Planning
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <div className=""></div>
                                )}
                            </div>

                            <div>
                                <div ref={menuRefCompany} onClick={handleOpenCompany}>
                                    <span className="hover:text-black hover:font-bold">Company</span>
                                    <i className={` bx ${isCompany ? 'bx-chevron-up' : 'bx-chevron-down'} `}></i>
                                </div>
                                {isCompany ? (
                                    <div className="absolute py-4 px-5 rounded-lg shadow-black shadow-md bg-[#ffffff] grid gap-3">
                                        <div className="hover:border hover:border-black m-1 p-2 rounded-2xl">
                                            <span className="">History</span>
                                        </div>
                                        <div className="hover:border hover:border-black m-1 p-2 rounded-2xl">
                                            <span className="">Our Team</span>
                                        </div>
                                        <div className="hover:border hover:border-black m-1 p-2 rounded-2xl">
                                            <span className="">Blog</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </div>

                            <li className="hover:text-black hover:font-bold">Careers</li>
                            <li className="hover:text-black hover:font-bold">About</li>
                        </ul>
                    </section>
                </section>



                <div
                    id="sectionMobile"
                    ref={menuMobileRef}
                    className="sm:flex sm:items-center sm:gap-4 sm:px-4">
                    <i onClick={handleMobileMenuClick} 
                    className={`sm:hidden relative z-20
                    bx ${isOpenMobile ? 'bx-x bx-spin' : 'bx-menu'} cursor-pointer`}></i>
                    {isOpenMobile ? (
                        <div className="z-10 absolute top-0 bottom-0 right-0 w-[210px] h-[117%]
                        transition duration-1000 shadow-black shadow-2xl 
                        bg-white pt-16 flex flex-col gap-2 sm:hidden ">
                            <div>
                                <div onClick={handleOpenFeatures} className="flex items-center justify-start px-4">
                                    <span className="text-[17px] grid justify-center">Features</span>
                                    <i className={`bx  ${isopenFeatures ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
                                </div>
                                {isopenFeatures && (
                                    <section className="text-[16px] p-4">
                                        <div className="flex items-center justify-center gap-2 ">
                                            <TodoList />
                                            <a href="#" className=" ">
                                                Todo List
                                            </a>
                                        </div>

                                        <div className="flex items-center justify-center gap-2 ">
                                            <Calendar />
                                            <a href="#" className="">
                                                Calendar
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 ">
                                            <Reminder />
                                            <a href="#" className="">
                                                Reminders
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 ">
                                            <Planing />
                                            <a href="#" className="">
                                                Planning
                                            </a>
                                        </div>
                                    </section>
                                )}
                            </div>

                            <div onClick={handleOpenCompanyMobile}
                                className="flex items-center justify-start px-4 ">
                                <span className="text-[17px] ">Company</span>
                                <i className={` bx ${isOpenCompany ? 'bx-chevron-up' : 'bx-chevron-down'} `}></i>
                            </div>
                            {
                                isOpenCompany &&
                                (<section className='text-[16px] px-4 grid justify-center '>

                                    <div className="">
                                        <span className="">History</span>
                                    </div>
                                    <div className="">
                                        <span className="">Our Team</span>
                                    </div>
                                    <div className="">
                                        <span className="">Blog</span>
                                    </div>
                                </section>)
                            }
                            <section>
                                <div
                                    className="flex items-center justify-start px-4 ">
                                    <span className="text-[17px] ">Careers</span>
                                </div>

                                <div
                                    className="flex items-center justify-start px-4 ">
                                    <span className="text-[17px] ">About</span>
                                </div>

                                <div className='grid justify-center text-[17px] gap-4 '>
                                    <Link to={'login'}>Login</Link>
                                </div>

                                <div className='text-[17px] flex justify-center mx-4 ' >
                                    <Link to={'register'} className='w-[100%] flex justify-center border-2 border-MediumGray rounded-3xl ' >Register</Link>
                                </div>
                            </section>
                        </div>
                    ) : (
                        <div className=""></div>
                    )
                    }
                    <Link to={'Login'} className="hidden sm:block text-xs sm:text-[16px] text-MediumGray font-normal hover:text-black hover:font-bold">Login</Link>
                    <Link to={'register'} className="hidden sm:block text-xs font-normal border border-gray-500 px-4 py-2 rounded-xl text-MediumGray sm:text-[16px] hover:text-black hover:font-bold">Register</Link>
                </div>
            </nav>
        </section>
    );
};

export default Header;