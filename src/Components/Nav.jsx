import React from 'react'

const Nav = () => {
  return (
    <>
        <div className='h-16 w-full px-20 bg-zinc-950 flex items-center justify-around'>
            <div className='font-bold text-xl w-[40%] text-white'><h1 className='text-l'>PORTFOLIO.</h1></div>
            <div className=' font-semibold text-white text-sm flex gap-14'>
               <h4>HOME</h4>
               <h4>ABOUT</h4>
               <h4>WORKS</h4>
               <h4>BLOG</h4>
               <h4>CONTACT</h4>
            </div>
        </div>
    </>
  )
}

export default Nav