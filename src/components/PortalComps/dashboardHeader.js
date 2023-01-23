import React from 'react'

export default function DashboardHeader() {
  return (
    <div>
        
        <header aria-label="Page Header">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="text-center sm:text-left">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          Hoşgeldin, <span class="text-red-600">Dr. Lorem Ipsum</span>
        </h1>

        <p class="mt-1.5 text-sm text-gray-500">
        </p>
      </div>

      <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        
        <button
          class="block rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring"
          type="button"
        >
          Profilini Düzenle
        </button>
      </div>
    </div>
  </div>
</header>


    </div>
  )
}
