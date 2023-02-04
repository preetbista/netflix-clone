import React from 'react'

const Signup = () => {
    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/a0782279-9331-4137-9074-421345e67888/NP-en-20230130-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt='' />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen' >
                    <div className='fixed w-full px-4 py-24 z-50' >
                        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white ' >
                            <div className='max-w-[320px] mx-auto py-16' >
                                <h1 className='text-3xl font-bold' >Sign Up</h1>
                                <form>
                                    <input type="email" placeholder='email' autoComplete='email' />
                                    <input type="password" placeholder='Password' autoComplete='current-password' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup