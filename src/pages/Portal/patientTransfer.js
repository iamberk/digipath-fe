import React from 'react'
import { Link } from 'react-router-dom'

export default function PatientTransfer() {
  return (
    <div>
      


<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg text-center">
    <h1 class="text-2xl font-bold sm:text-3xl">Hasta Transferi Gerçekleştir</h1>

    <p class="mt-4 text-gray-500">
      Hasta transferi gerçekleştirmek için hastanızın ID'sine ve hastanızın yeni doktorunun Ethereum Adresine ihtiyacınız var. <i><Link className='text-gray-500'>Detaylı bilgi alın</Link></i>
    </p>
  </div>

  <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
    <div>
      <label for="patient-id" class="sr-only">Hasta ID:</label>

      <div class="relative">
        <input
          type="patient-id"
          class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          placeholder="Hasta ID'si giriniz"
        />

        
      </div>
    </div>

    <div>
      <label for="new-doctor-address" class="sr-only">Yeni Doktorun Ethereum Adresini giriniz</label>
      <div class="relative">
        <input
          type="text"
          class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          placeholder="Enter Yeni Doktorun  Adresini giriniz"
        />

        
      </div>
    </div>

    <div class="flex items-center justify-between">
      <p class="text-sm text-gray-500">
        Hasta ID'si bulamıyor musunuz?
        <br></br>
        <a class="underline" href="">Hasta Havuzunuzu kontrol edin</a>
      </p>

      <button
        type="submit"
        class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      >
        Onayla
      </button>
    </div>
  </form>
</div>

<h1 class="text-2xl font-bold sm:text-3xl m-4">Geçmiş Transferler</h1>

<div class="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
  <table class="min-w-full divide-y divide-gray-200 text-sm">
    <thead class="bg-gray-100">
      <tr>
        <th class="sticky inset-y-0 left-0 bg-gray-100 px-4 py-2 text-left">
          <label class="sr-only" for="SelectAll">Select All</label>

          <input
            class="h-5 w-5 rounded border-gray-200"
            type="checkbox"
            id="SelectAll"
          />
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          <div class="flex items-center gap-2">
           Hasta ID

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          <div class="flex items-center gap-2">
            Hasta İsmi
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          <div class="flex items-center gap-2">
            Tarih

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          <div class="flex items-center gap-2">
            Yeni Doktor Adresi

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </th>
       
        <th class="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="sticky inset-y-0 left-0 bg-white px-4 py-2">
          <label class="sr-only" for="Row1">Row 1</label>

          <input
            class="h-5 w-5 rounded border-gray-200"
            type="checkbox"
            id="Row1"
          />
        </td>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          #00001
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
          Hasta 1
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24 Aralık 2022</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">0x52681A49b0759526801cC760efFC3338178EA4E8</td>
       
        <td class="whitespace-nowrap px-4 py-2">
          <a href="#" class="text-sm font-medium text-blue-600 hover:underline">
            Detaylar
          </a>
        </td>
      </tr>

      <tr>
        <td class="sticky inset-y-0 left-0 bg-white px-4 py-2">
          <label class="sr-only" for="Row2">Row 2</label>

          <input
            class="h-5 w-5 rounded border-gray-200"
            type="checkbox"
            id="Row2"
          />
        </td>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          #00002
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
          Hasta 2
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
          25 Aralık 2022
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
        0x52681A49b0759526801cC760efFC3338178EA4E8
        </td>
       
        <td class="whitespace-nowrap px-4 py-2">
          <a href="#" class="text-sm font-medium text-blue-600 hover:underline">
            Detaylar
          </a>
        </td>
      </tr>

      <tr>
        <td class="sticky inset-y-0 left-0 bg-white px-4 py-2">
          <label class="sr-only" for="Row3">Row 3</label>

          <input
            class="h-5 w-5 rounded border-gray-200"
            type="checkbox"
            id="Row3"
          />
        </td>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          #00003
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
          Hasta 3
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
          26 Aralık 2022
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
        0x52681A49b0759526801cC760efFC3338178EA4E8
        </td>
        
        <td class="whitespace-nowrap px-4 py-2">
          <a href="#" class="text-sm font-medium text-blue-600 hover:underline">
          Detaylar
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>


    </div>
  )
}
