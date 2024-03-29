import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RiCalendar2Line } from 'react-icons/ri';

const transformers = [
  {
    damageID: '8960',
    damagedAsset: 'K000037',
    sdname: 'SHEIKH BAGH',
    substation: 'SHK-132 DTR-132-DARBAGH-2ND-400',
    updatedon: '2024-02-12',
    replacedAsset: 'K000017',
  },
  {
    damageID: '8960',
    damagedAsset: 'K000037',
    sdname: 'SHEIKH BAGH',
    substation: 'SHK-132 DTR-132-DARBAGH-2ND-400',
    updatedon: '2024-02-12',
    replacedAsset: 'K000017',
  },
  {
    damageID: '8960',
    damagedAsset: 'K000037',
    sdname: 'SHEIKH BAGH',
    substation: 'SHK-132 DTR-132-DARBAGH-2ND-400',
    updatedon: '2024-02-12',
    replacedAsset: 'K000017',
  },
  {
    damageID: '8960',
    damagedAsset: 'K000037',
    sdname: 'SHEIKH BAGH',
    substation: 'SHK-132 DTR-132-DARBAGH-2ND-400',
    updatedon: '2024-02-12',
    replacedAsset: 'K000017',
  },
  {
    damageID: '8960',
    damagedAsset: 'K000037',
    sdname: 'SHEIKH BAGH',
    substation: 'SHK-132 DTR-132-DARBAGH-2ND-400',
    updatedon: '2024-02-12',
    replacedAsset: 'K000017',
  },
];
const TransformDmg = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className='flex flex-col sm:flex-row gap-2 mx-2 my-4 justify-items-stretch content-center items-center align-center '>
        <div className='grow h-14 pr-2 pl-6 flex justify-start content-center items-center font-semibold text-sm md:text-lg lg:text-3xl xl:text-3xl 2xl:text-3xl'>
          Damaged Assets awaiting replacement
        </div>
        <div className='grow h-14 flex justify-center content-center items-center px-2 '>
          <div className='grow-0 h-14 bg-[#D9D9D9] flex justify-center content-center items-center mx-2 rounded-md px-8'>
            <button className='bg-[rgba(127, 86, 216, 0.1)] text-[#7F56D8] font-semibold mx-2 py-2'>
              CSV
            </button>
          </div>
          <div className='grow-0 h-14 bg-[#D9D9D9] flex justify-center content-center items-center mx-2 rounded-md px-8'>
            <button className='bg-[rgba(127, 86, 216, 0.1)] text-[#7F56D8] font-semibold mx-2 py-2'>
              Excel
            </button>
          </div>
          <div className='grow-0 h-14 bg-[#D9D9D9] flex justify-center content-center items-center mx-2 rounded-md px-8'>
            <button className='bg-[rgba(127, 86, 216, 0.1)] text-[#7F56D8] font-semibold mx-2 py-2'>
              Print
            </button>
          </div>
        </div>
        <div className='flex flex-row justify-center content-center items-center grow h-14 pr-4'>
          <button
            type='submit'
            className='h-14 p-4 shadow rounded-l-lg bg-white'
          >
            <BsSearch size='1em' color='#2B3674' />
          </button>
          <input
            type='text'
            name='q'
            className='w-full h-14 shadow p-4 rounded-r-lg bg-white focus:ring-none focus:outline-none focus:border-0'
            placeholder='Search'
          />
        </div>
      </div>
      {/* table */}
      <div className='bg-white mx-2 rounded-md'>
        <section className='mx-auto w-full max-w-9xl px-4 py-4 bg-white mt-4'>
          <div className='mt-6 flex flex-col'>
            <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                <div className='overflow-hidden border border-gray-200 md:rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-[#7F56D8] text-white font-semibold text-md'>
                      <tr>
                        <th scope='col' className='px-4 py-3.5 text-center'>
                          <span>Damage ID</span>
                        </th>
                        <th scope='col' className='px-4 py-3.5 text-center'>
                          Damaged Asset
                        </th>
                        <th scope='col' className='px-4 py-3.5 text-center'>
                          SD Name
                        </th>
                        <th scope='col' className='px-4 py-3.5 text-center'>
                          Substation
                        </th>
                        <th scope='col' className='px-4 py-3.5 text-center'>
                          Updated On
                        </th>
                        <th scope='col' className='px-4 py-3.5 text-center'>
                          Replaced Asset
                        </th>
                        <th
                          scope='col'
                          className='px-4 py-3.5 text-center'
                        ></th>
                        <th
                          scope='col'
                          className='px-4 py-3.5 text-center'
                        ></th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white text-center'>
                      {transformers.map((transformer) => (
                        <tr key={transformer.damageID}>
                          <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700'>
                            {transformer.damageID}
                          </td>
                          <td className='whitespace-nowrap py-4 text-sm text-white px-12'>
                            <div className='bg-[#7F56D8] font-semibold rounded-md text-wrap px-2 md:px-2 lg:px-0 xl:px-0 2xl:px-0'>
                              {transformer.damagedAsset}
                            </div>
                          </td>
                          <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700 text-wrap'>
                            {transformer.sdname}
                          </td>
                          <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700 text-wrap'>
                            {transformer.substation}
                          </td>
                          <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700 text-wrap'>
                            {transformer.updatedon}
                          </td>
                          <td className='whitespace-nowrap py-4 text-sm text-white px-12'>
                            <div className='bg-[#7F56D8] font-semibold rounded-md text-wrap px-2 md:px-2 lg:px-0 xl:px-0 2xl:px-0'>
                              {transformer.replacedAsset}
                            </div>
                          </td>

                          <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700 flex justify-center content-center align-center items-center'>
                            <div className='relative'>
                              <DatePicker
                                selected={selectedDate}
                                onChange={handleChange}
                                className='w-full px-4 py-2 pr-12 border border-r-0 rounded-l-md border-gray-400 focus:outline-none focus:border-gray-400 hover:cursor-pointer'
                              />
                              <div className='text-center absolute inset-y-0 right-0 rounded-r-md flex items-center px-2 pointer-events-none border border-l-0 border-gray-400'>
                                <RiCalendar2Line
                                  size='1.5em'
                                  className='text-black'
                                />
                              </div>
                            </div>
                          </td>

                          <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700'>
                            <div className='flex justify-center content-center align-middle text-center text-wrap bg-[#7F56D8] text-white py-2 rounded-md font-semibold px-2 md:px-2 lg:px-0 xl:px-0 2xl:px-0 hover:cursor-pointer'>
                              Recieve Replacement
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Page navigation */}
          <div className='flex items-center justify-center pt-6'>
            <a
              href='#'
              className='mx-1 cursor-not-allowed text-sm font-semibold text-gray-900'
            >
              <span className='hidden lg:block'>&larr; Previous</span>
              <span className='block lg:hidden'>&larr;</span>
            </a>
            <a
              href='#'
              className='mx-1 flex items-center rounded-md border border-[#7F56D8] px-3 py-1 text-[#7F56D8] hover:scale-105'
            >
              1
            </a>
            <a
              href='#'
              className='mx-1 flex items-center rounded-md border border-[#7F56D8] px-3 py-1 text-[#7F56D8] hover:scale-105'
            >
              2
            </a>
            <a
              href='#'
              className='mx-1 flex items-center rounded-md border border-[#7F56D8] px-3 py-1 text-[#7F56D8] hover:scale-105'
            >
              3
            </a>
            <a
              href='#'
              className='mx-1 flex items-center rounded-md border border-[#7F56D8] px-3 py-1 text-[#7F56D8] hover:scale-105'
            >
              4
            </a>
            <a href='#' className='mx-2 text-sm font-semibold text-gray-900'>
              <span className='hidden lg:block'>Next &rarr;</span>
              <span className='block lg:hidden'>&rarr;</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default TransformDmg;
