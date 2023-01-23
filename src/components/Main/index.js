import { Link } from 'react-router-dom';
import React from 'react'

export default function Main() {
  return (
     <section className="bg-gray-50">
      <div
        className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
      >
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Patolojide Yeni Döenm
            <strong className="font-extrabold text-red-700 sm:block">
              Merkeziyetsiz Dijital Patoloji
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl sm:leading-relaxed">
            Bir Web3 dApp'i, merkeziyetsiz olan <strong>Dijital Patoloji Portalı</strong> doktorların çalışmalarını dijitalleştirerek kolaylaştırıyor.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"  to="/portal/dashboard">Portala Giriş Yap</Link>
            <Link className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"  to="/docs">Daha Fazla Bilgi</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
