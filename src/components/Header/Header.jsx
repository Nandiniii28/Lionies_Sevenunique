import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Top Bar */}
      <div className="hidden md:flex items-center justify-between px-4 py-2 bg-white border-b border-gray-100 text-xs text-gray-600">
        <div className="flex items-center space-x-4">
          <span>Free Shipping</span>
          <span>|</span>
          <span>Return & Exchange</span>
          <span>|</span>
          <span>Gift Card</span>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="#" className="hover:text-black">Download App</Link>
          <Link href="#" className="hover:text-black">Store Finder</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 py-3 md:py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
            LIONIES 
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden lg:block">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full px-4 py-3 pr-12 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                🔍
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link href="/wishlist" className="relative p-2 text-gray-600 hover:text-gray-900">
              💝
              <span className="absolute -top-2 -right-1 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-gray-900">
              🛒
              <span className="absolute -top-2 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link href="/profile" className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium hover:bg-gray-300">
              👤
            </Link>
            <Link href="/menu" className="p-2 text-gray-600 hover:text-gray-900 md:hidden">
              ☰
            </Link>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-center mt-4 pt-4 border-t border-gray-100 md:hidden">
          <Link href="/polo" className="mx-2 text-sm font-medium text-gray-700 hover:text-gray-900">Polo</Link>
          <Link href="/shop" className="mx-2 text-sm font-medium text-gray-700 hover:text-gray-900">Shop</Link>
          <Link href="/women" className="mx-2 text-sm font-medium text-gray-700 hover:text-gray-900">Women</Link>
          <Link href="/men" className="mx-2 text-sm font-medium text-gray-700 hover:text-gray-900">Men</Link>
          <Link href="/kids" className="mx-2 text-sm font-medium text-gray-700 hover:text-gray-900">Kids</Link>
          <Link href="/sport" className="mx-2 text-sm font-medium text-gray-700 hover:text-gray-900">Sport</Link>
        </div>

        {/* Desktop Bottom Navigation */}
        <div className="hidden md:flex items-center justify-center mt-6 space-x-8">
          <Link href="/polo" className="text-sm font-medium text-gray-700 hover:text-gray-900 pb-2 border-b-2 border-transparent hover:border-gray-300">
            Polo
          </Link>
          <Link href="/shop" className="text-sm font-medium text-gray-700 hover:text-gray-900 pb-2 border-b-2 border-transparent hover:border-gray-300">
            Shop
          </Link>
          <Link href="/women" className="text-sm font-medium text-gray-700 hover:text-gray-900 pb-2 border-b-2 border-transparent hover:border-gray-300">
            Women
          </Link>
          <Link href="/men" className="text-sm font-medium text-gray-700 hover:text-gray-900 pb-2 border-b-2 border-transparent hover:border-gray-300">
            Men
          </Link>
          <Link href="/kids" className="text-sm font-medium text-gray-700 hover:text-gray-900 pb-2 border-b-2 border-transparent hover:border-gray-300">
            Kids
          </Link>
          <Link href="/sport" className="text-sm font-medium text-gray-700 hover:text-gray-900 pb-2 border-b-2 border-transparent hover:border-gray-300">
            Sport
          </Link>
        </div>

        {/* Mobile Bottom Bar */}
        <div className="md:hidden flex items-center justify-between mt-4 pt-4 border-t border-gray-100 text-xs">
          <div className="flex items-center space-x-4 text-gray-600">
            <span>0800 309 553</span>
            <span>|</span>
            <span>MAX (0800 629)</span>
            <span>|</span>
            <span>Free shipping all orders</span>
          </div>
          <div className="text-sm font-semibold text-gray-900">
            Stores
          </div>
        </div>
      </div>
    </header>
  )
}
