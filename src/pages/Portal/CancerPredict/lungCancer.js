import React from 'react'

export default function LungCancer() {
  return (
    <div>
       <div class="flex items-end justify-between mb-12 header">
        <div class="title">
            <p class="mb-4 text-4xl font-bold text-gray-800">
                Akciğer Kanseri Derin Öğrenme Modeli
            </p>
            <p class="text-2xl font-light text-gray-400">
                %95'e varan doğruluk oranı
            </p>
        </div>
        </div>

        <p class="mb-4 text-xl font-bold text-gray-800">
                Modeli test veri seti ile test/kontrol et
            </p>
        <fieldset class="flex flex-wrap gap-3">
  <legend class="sr-only">Color</legend>
  
  <div>
    <input
      type="radio"
      name="ColorOptionn"
      value="ColorBlackk"
      id="ColorBlackk"
      class="peer hidden [&:checked_+_label_svg]:block"
      checked
    />

    <label
      for="ColorBlackk"
      class="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
    >
      <svg
        class="hidden h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>

      <p class="text-sm font-medium">RandomForrest</p>
    </label>
  </div>

  
  <a href="#" class="text-sm m-2 font-medium text-blue-600 hover:underline">
            Sonucu Al
          </a>

</fieldset>


<p class="mb-4 text-xl font-bold text-gray-800">
                Modeli yeni veri ile test/kontrol et
            </p>
        <fieldset class="flex flex-wrap gap-3">
  <legend class="sr-only">Color</legend>
  
  <div>
    <input
      type="radio"
      name="ColorOption"
      value="ColorBlack"
      id="ColorBlack"
      class="peer hidden [&:checked_+_label_svg]:block"
      checked
    />

    <label
      for="ColorBlack"
      class="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
    >
      <svg
        class="hidden h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>

      <p class="text-sm font-medium">RandomForrest</p>
    </label>
  </div>

  
  <a href="#" class="text-sm m-2 font-medium text-blue-600 hover:underline">
            Veri girişine git
          </a>

</fieldset>

    </div>
  )
}
