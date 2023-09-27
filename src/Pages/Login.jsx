import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <main
            className='min-h-screen flex flex-col justify-center items-center' >
                <nav className='absolute top-1 right-10 ' >
                    <ul>
                        <Link  
                        className='cursor-pointer hover:text-gray-600'
                        to={'/'}>Inicio</Link>
                    </ul>
                </nav>
            <h1 className='p-8 text-[1.5rem] font-bold '>Login</h1>
            <div className='flex bg-black p-2 rounded-md '>
            <section className='bg-black/20 h-auto  
            pt-10 p-6 mx-2 rounded-3xl grid m-auto items-center'>

                <form
                    className='grid justify-center border-2 rounded-xl'
                    action="">
                    <div className=''>
                        {/* <label htmlFor="">Name</label> */}
                        <input
                            className='bg-black/80 border-2 text-white text-center m-2 rounded-md
                        outline-none'
                            type="text"
                            placeholder='Name' />
                    </div>

                    <div className=''>
                        {/* <label htmlFor="">Email Addres</label> */}
                        <input
                            className='outline-none border-2 bg-black/80 text-white text-center m-2 rounded-md '
                            type="email"
                            placeholder='Email' />
                    </div>

                    <div className=''>
                        {/* <label htmlFor="">Password</label> */}
                        <input
                            className='outline-none border-2 bg-black/80 text-white text-center m-2 rounded-md '
                            type="password"
                            placeholder='Password'/>
                    </div>
                
                    <button className='block mx-auto my-4 py-2 px-4 bg-blue-200
                    w-[150px]
                    rounded-xl hover:bg-black hover:text-white transition duration-1000' >Login</button>
                </form>
                <hr className='my-6' />
                <div>
                    <h3 className='text-xs py-3 px-5 text-white '>Don't have a account?
                        <Link to={'/register'}
                            className='hover:text-white cursor-pointer' >Register Here</Link>
                    </h3>
                </div>
            </section>

            <section className='hidden sm:block' >
                <img src="/images/login.webp" alt="Register" />
            </section>
            
            </div>
        </main>
    )
}

export default Login