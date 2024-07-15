import React from 'react'

function About() {
    return (
        <div className='max-w-7xl mx-auto py-10 px-5 mb-10'>
            <h1 className='lg:text-6xl text-4xl font-bold text-center mt-10'>About Us</h1>

            {/* <p className='my-10 text-center text-xl opacity-75 leading-8'>Go Ridw has been in business for 40+ years managed by level 3 Tennis Professional Andrew Hill. Andrew has provided guidance, equiptment and facilities Australia wide for tennis, table tennis and modified sports.</p> */}

            {/* <div className='mt-5'>
                <img src='/aboutimg.png' className='mx-auto w-full' />
            </div> */}

            <div className='grid grid-cols-2 gap-5 p-5 mt-16'>
                {/* <div className='text-4xl w-3/4 font-semibold p-4'>We are here to help the customers to get their success.</div> */}
                {/* <div className='grid gap-5 text-lg text-gray-500 p-3'>
                    <p>goride has been in business for 40+ years managed by level 3 Tennis Professional Andrew Hill. Andrew has provided guidance, equiptment and facilities Australia wide for tennis, table tennis and modified sports.</p>
                    <p>Based in Ryde, goride has been working in schools and local tennis centers using the STARS Program to keep kids healthy, active and energised around Australia.</p>
                </div> */}
            </div>
        </div>
    )
}

export default About