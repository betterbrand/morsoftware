'use client';

import { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { classNames } from '../../helpers';

export default function PlaygroundPage() {
  const [inputValue, setInputValue] = useState({ weight: '', price: '' });
  const [tableData, setTableData] = useState([]);

  const handleSubmit = (e) => {
    // do something and put it in tableData
  }

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex justify-center text-3xl mb-4">Code Weights</div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mb-8"
        >
          <label className="mb-1" htmlFor="weight">
            Input User Weights
          </label>
          <input
            className="mb-2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="weight"
            type="number"
            value={inputValue.weight}
            onChange={(e) =>
              setInputValue({ ...inputValue, weight: e.target.value })
            }
          />

          <label className="mb-1" htmlFor="price">
            MOR Price
          </label>
          <input
            className="mb-2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="price"
            type="number"
            value={inputValue.price}
            onChange={(e) =>
              setInputValue({ ...inputValue, price: e.target.value })
            }
          />

          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Submit
          </button>
        </form>
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th>Month</th>
              <th>MOR Emissions to Code</th>
              <th>Cumulative Weights</th>
              <th>User Weights</th>
              <th>Monthly User MOR</th>
              <th>MOR Price</th>
              <th>Monthly User Value</th>
              <th>Cumulative Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">104,773</td>
              <td className="text-center">12,500</td>
              <td className="text-center">1</td>
              <td className="text-center">8.38</td>
              <td className="text-center">$10</td>
              <td className="text-center">$84</td>
              <td className="text-center">$84</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
