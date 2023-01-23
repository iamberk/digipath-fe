import React from 'react'

export default function Digitalized() {
  return (
    <div>

<div class="w-full p-12 bg-white">
    <div class="flex items-end justify-between mb-12 header">
        <div class="title">
            <p class="mb-4 text-4xl font-bold text-gray-800">
                Larenks ve Hipofarenks Kanseri 
            </p>
            <p class="text-2xl font-light text-gray-400">
                Dijitalleştirilmiş Doku İnceleme
            </p>
        </div>
        
        </div>
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
            <a href="#" class="group relative block bg-black">
  <img
    alt="Developer"
    src={require('./13.jpeg')}    
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-medium uppercase tracking-widest bg-black inline p-2 text-pink-500">
      Larenks
    </p>

    <p class="text-2xl font-bold text-white">8 Görüntü</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a>
<a href="#" class="group relative block bg-black">
  <img
    alt="Developer"
    src={require('./15.jpeg')}    
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-medium uppercase tracking-widest bg-black inline p-2 text-pink-500">
      Hipofarenks
    </p>

    <p class="text-2xl font-bold text-white">7 Görüntü</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a>

        </div>
    </div>

    </div>
  )
}
