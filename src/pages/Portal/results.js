import React from 'react'

export default function Results() {
  return (
    <div>
      <div class="flex items-end justify-between mb-12 mx-auto max-w-xl mt-12  header">
        <div class="title">
            <p class="mb-4 text-4xl font-bold text-gray-800">
                Dijitalleştirilmiş Hasta Sonuçları
            </p>
        </div>
        
        </div>
    <div className=' max-w-2xl mt-24 mx-auto'>
      <div class="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
  <table class="min-w-full divide-y divide-gray-200 text-sm">
    <thead class="bg-gray-100">
      <tr>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Hasta Adı
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Sonuç Tarihi
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Hastalık
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Durum
        </th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Hasta 34
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Hastalık 1</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Sonuçlandı</td>
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Hasta 35
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Hastalık 3</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">İptal Edildi</td>
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Hasta 36
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Hastalık 2</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Ertelendi</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
    </div>
  )
}
