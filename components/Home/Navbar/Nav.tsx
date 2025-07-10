import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { LuNetwork } from 'react-icons/lu'

const Nav = () => {
  return (
    <div className='transition-all duration-300 h-[12vh] z-[10000] fixed w-full'>
      <div className='flex items-center h-full justify-between w-[92%] mx-auto'>
        <div className='flex items-center sm:space-x-20'>

          {/* logo */}
          <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-cyan-800 rounded-full flex items-center justify-center flex-col'>
              <LuNetwork className='w-5 h-5 text-white' />
            </div>
            <h1 className='text-xl hidden sm:block md:text-2xl text-cyan-800 font-bold'>DevHire</h1>
          </div>
          {/* NAVLINKS */}
          <div className='hidden lg:flex items-center space-x-10'>
            {NavLinks.map((link) => {
              return (
                <Link key={link.id}
                  href={link.url}
                  className='text-base hover:text-cyan-700 font-medium transition-all duration-200'>
                  <p>{link.label}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav