import React from 'react'
import { Link } from 'react-router-dom'
import DashboardHeader from '../../components/PortalComps/dashboardHeader'

export default function Dashboard() {
  return (
    <div  >

        <DashboardHeader></DashboardHeader>
        
      <div className='grid grid-cols-2'>
      
<Link
  class="relative block rounded-xl border border-gray-100 p-8 m-4 shadow-xl"
  to="/portal/patient-pool"
>
  

  <div class="mt-4 text-gray-500 sm:pr-8">
    <svg
      class="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      ></path>
    </svg>

    <h3 class="mt-4 text-xl font-bold text-gray-900">Hasta Yönetimi</h3>

    <p class="mt-2 hidden text-sm sm:block">
      Hasta Yöentimi bölümünde, aktif hastalarınızı ve geçmiş hastalarınızı görüntüleyebilirsiniz. Aynı zamanda diğer doktorlara hastanızı transfer edebilirsiniz.
    </p>
  </div>
</Link>
<Link
  class="relative block rounded-xl border border-gray-100 p-8 m-4 shadow-xl"
  to="/portal/consultation"
>
  

  <div class="mt-4 text-gray-500 sm:pr-8">
    <svg
      class="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      ></path>
    </svg>

    <h3 class="mt-4 text-xl font-bold text-gray-900">Konsultasyon Merkezi</h3>

    <p class="mt-2 hidden text-sm sm:block">
      Konsultasyon merkezi bölümünde, diğer doktorlar ile hastalarınız hakkında görüşme yapabilirsiniz.
    </p>
  </div>
</Link>
<Link
  class="relative block rounded-xl border border-gray-100 p-8 m-4 shadow-xl"
  to="/portal/digitalized"
>
  

  <div class="mt-4 text-gray-500 sm:pr-8">
    <svg
      class="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      ></path>
    </svg>

    <h3 class="mt-4 text-xl font-bold text-gray-900">Dijitalleştirilmiş Veriler</h3>

    <p class="mt-2 hidden text-sm sm:block">
      Dijitalleştirilmiş veriler bölümünde, hastalarınızın dijitalleştirilmiş verilerini ve sonuçlarını görüntüleyebilirsiniz.
    </p>
  </div>
</Link>
<Link
  class="relative block rounded-xl border border-gray-100 p-8 m-4 shadow-xl"
  to="/portal/ai-tools"
>
  

  <div class="mt-4 text-gray-500 sm:pr-8">
    <svg
      class="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      ></path>
    </svg>

    <h3 class="mt-4 text-xl font-bold text-gray-900">Yapay Zeka Uygulamaları</h3>

    <p class="mt-2 hidden text-sm sm:block">
      Yapay zeka uygulamaları bölümünde, sunulan yapay zeka araçlarını kullanabilirsiniz.
    </p>
  </div>
</Link>

      </div>


    </div>
  )
}
