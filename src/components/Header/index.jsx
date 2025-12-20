import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo1.png';

const Header = () => {
  return (
    <header>
      <div className="top-strip w-full py-2 border-y border-[#d1d5db]">
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="col1 w-[50%]">
                    <p className="text-[12px] font-[500]">Free Shipping Over $100 & Free Returns</p> 
                </div>

                <div className="flex items-center col2 justify-end">
                    <nav aria-label="Header utility navigation">
                        <ul className='flex items-center gap-[40px]'>
                            <li className="list-none">
                                <Link to="/help-center" 
                                className='text-[13px] font-[500] link transition'>Help Center</Link>
                            </li>
                            <li className="list-none">
                                <Link to="/order-tracking" 
                                className='text-[13px] font-[500] link transition'>Order Tracking</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
      </div>

      <div className="header-main py-4">
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="logo">
                  <Link to="/">
                    <img 
                      src={Logo} 
                      alt="Madaan Electro Logo"
                      className="h-[60px] w-auto"
                    />
                  </Link>
                </div>  
                <div className="search-bar w-[80%]">
                    <form action="#" className='w-full'>
                        <input type="text" placeholder='Search Product Here...' 
                        className='w-full border border-[#d1d5db] py-2 px-4 rounded-md focus:outline-none focus:border-primary transition'/>
                    </form>
                </div>  
                <div className="header-icons flex items-center gap-6">
                    <Link to="/wishlist" className='text-[20px] font-[500]'>♡</Link>
                    <Link to="/cart" className='text-[20px] font-[500]'>🛒</Link>
                </div>  
            </div>
        </div>
      </div>


    </header>

  )
}

export default Header;