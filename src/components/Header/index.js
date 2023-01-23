import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react'

export default function Header() {

    

  return (
    <div>
      <header aria-label="Site Header" className="shadow-sm">
        <div className="mx-auto max-w-screen-xl p-4">
          <div className="flex items-center justify-between gap-4 lg:gap-10">
            <nav
              aria-label="Site Nav"
              className="hidden gap-8 text-sm font-medium md:flex"
            >
              <Link className="text-gray-500" to="/">Anasayfa</Link>
              <Link className="text-gray-500" to="/docs">Dokümantasyon</Link>
              <Link className="text-gray-500" to="/faq">S.S.S</Link>
            </nav>

            <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">

              {useSelector(state => state.user)? (
                <Link className="block  rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 " to="/">Çıkış Yap</Link>
              ) : (
              <Link className="block  rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 " to="/login">Oturum Aç</Link>
              )
              
              }
              
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
