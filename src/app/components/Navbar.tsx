"use client"
import Image from 'next/image'
import React from 'react'
import { BsCake2 } from 'react-icons/bs';
import { GiHamburger, GiSlicedBread, GiWrappedSweet } from 'react-icons/gi';
import { IoHomeOutline, IoInformationCircleOutline } from "react-icons/io5";
import { RiContactsLine } from 'react-icons/ri';
import { TbCategoryPlus } from "react-icons/tb";
import Theme from './Theme';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex w-full">
      <div className='flex sticky top-0 z-10'>
        <div className="navbar bg-base-100 shadow-sm fixed">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><Link href="/"><IoHomeOutline />Home</Link></li>
                <li>
                  <details>
                    <summary><TbCategoryPlus />Categories</summary>
                    <ul className="p-2">
                      <li><Link href="/bakery" onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')} className="flex items-center space-x-2"><GiSlicedBread />Bakery Items</Link></li>
                      <li><Link href="/pastries" onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}><BsCake2 />Pastries & Desserts</Link></li>
                      <li><Link href="/fastfood" onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}><GiHamburger />Fast Food</Link></li>
                      <li><Link href="/sweets" onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}><GiWrappedSweet />Sweets & Treats</Link></li>
                    </ul>
                  </details>
                </li>
                <li><Link href="/about"><IoInformationCircleOutline />About Us</Link></li>
                <li><Link href="/contact"><RiContactsLine />Contact Us</Link></li>
              </ul>
            </div>
            <Link href='/' className="btn btn-ghost text-xl">Bliss Bites</Link>
          </div>
          <div className="navbar-center hidden lg:flex z-50">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/"><IoHomeOutline />Home</Link></li>
              <li>
                <details>
                  <summary><TbCategoryPlus />Categories</summary>
                  <ul className="p-2 w-48">
                    <li><Link href="/bakery" onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')} className="flex items-center space-x-2"><GiSlicedBread />Bakery Items</Link></li>
                    <li><Link href="/pastries" onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}><BsCake2 />Pastries & Desserts</Link></li>
                    <li><Link href="/fastfood" onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}><GiHamburger />Fast Food</Link></li>
                    <li><Link href="/sweets" onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}><GiWrappedSweet />Sweets & Treats</Link></li>
                  </ul>
                </details>
              </li>
              <li><Link href="/about"><IoInformationCircleOutline size={16} />About Us</Link></li>
              <li><Link href="/contact"><RiContactsLine />Contact Us</Link></li>
            </ul>
          </div>
          <div className="navbar-end">
            <Theme />
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="/img/bliss_bites.jpeg"
                  width={100}
                  height={100}
                  alt="Logo of the bliss bites"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar