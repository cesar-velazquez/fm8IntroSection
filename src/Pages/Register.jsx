import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <main
            className='min-h-screen bg-blue-300/70 flex flex-col justify-center items-center' >
            <nav className='absolute top-1 right-10 ' >
                <ul>
                    <Link
                        className='cursor-pointer hover:text-gray-600'
                        to={'/'}>Inicio</Link>
                </ul>
            </nav>
            
            <h1 className='p-8 text-[1.5rem] font-bold '>Create Account</h1>
            <div className='flex gap-0 bg-black p-2 rounded-2xl '>
                <section className='h-auto  
            pt-10 p-6 mx-2 rounded-3xl grid m-auto items-center'>

                    <form
                        className='grid justify-center border-2 py-4 rounded-3xl '
                        action="">
                        <div className=''>
                            {/* <label htmlFor="">Name</label> */}
                            <input
                                className='bg-black/80 text-white text-center m-2 rounded-md
                        outline-none'
                                type="text"
                                placeholder='Name' />
                        </div>

                        <div className=''>
                            {/* <label htmlFor="">Email Addres</label> */}
                            <input
                                className='outline-none bg-black/80 
                        text-white text-center m-2 rounded-md border-2 '
                                type="email"
                                placeholder='Email' />
                        </div>

                        <div className=''>
                            {/* <label htmlFor="">Password</label> */}
                            <input
                                className='outline-none bg-black/80 
                        text-white text-center m-2 rounded-md border-2  '
                                type="password"
                                placeholder='Password' />
                        </div>

                        <div className=''>
                            {/* <label htmlFor="">Password</label> */}
                            <input
                                className='outline-none bg-black/80 
                        text-white text-center m-2 rounded-md
                        border-2'
                                type="password"
                                placeholder='Repeat Password'
                            />
                        </div>
                        <button className='block mx-auto my-2 p-4 bg-blue-200
                    rounded-xl hover:bg-black hover:text-white transition duration-1000' >Create Account</button>
                    </form>
                    <hr className='my-6' />
                    <div>
                        <h3 className='text-xs py-3 px-5 text-white '>Do you have a account?
                            <Link to={'/login'}
                                className='hover:text-white cursor-pointer' >Login Here</Link>
                        </h3>
                    </div>
                </section>
                <section className='hidden sm:block' >
                    <img src="/images/register.webp" alt="Register" />
                </section>
            </div>
        </main>
    )
}

export default Register