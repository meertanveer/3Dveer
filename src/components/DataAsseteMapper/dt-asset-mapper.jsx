import React from 'react';
import { PiWarningOctagon } from 'react-icons/pi';
import { FaRegEdit } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { FaRegFilePdf } from 'react-icons/fa6';

const assetmapper = [
  {
    assetcode: 'K000037',
    dtcode: 'SHK-10',
    dtname: 'DTR-010-VETERINARY 1ST 630',
    maker: 'JOHNSON ELECTRIC COMPANY BARODA-2',
    manufact: '1980',
    capacity: '400',
    location: 'MAIN ROAD IQBAL COLONY-II Indra Nagar',
    ispunched: 'yes',
    report: 'delete',
  },
  {
    assetcode: 'K000037',
    dtcode: 'SHK-10',
    dtname: 'DTR-010-VETERINARY 1ST 630',
    maker: 'JOHNSON ELECTRIC COMPANY BARODA-2',
    manufact: '1980',
    capacity: '400',
    location: 'MAIN ROAD IQBAL COLONY-II Indra Nagar',
    ispunched: 'yes',
    report: 'delete',
  },
  {
    assetcode: 'K000037',
    dtcode: 'SHK-10',
    dtname: 'DTR-010-VETERINARY 1ST 630',
    maker: 'JOHNSON ELECTRIC COMPANY BARODA-2',
    manufact: '1980',
    capacity: '400',
    location: 'MAIN ROAD IQBAL COLONY-II Indra Nagar',
    ispunched: 'yes',
    report: 'delete',
  },
  {
    assetcode: 'K000037',
    dtcode: 'SHK-10',
    dtname: 'DTR-010-VETERINARY 1ST 630',
    maker: 'JOHNSON ELECTRIC COMPANY BARODA-2',
    manufact: '1980',
    capacity: '400',
    location: 'MAIN ROAD IQBAL COLONY-II Indra Nagar',
    ispunched: 'yes',
    report: 'delete',
  },
];

const Mapper = () => {
  return (
    <>
      <div className='flex flex-row mx-2 my-4 justify-items-stretch content-center items-center align-center'>
        <div className='grow h-14 pr-2 pl-6 flex justify-start content-center items-center font-semibold text-sm md:text-lg lg:text-3xl xl:text-3xl 2xl:text-3xl'>
          List of Distribution Transformers
        </div>
        <div className='grow-0 h-14 bg-[#D9D9D9] flex justify-center content-center items-center mx-2 rounded-md px-2'>
          <button className='bg-[#D9D9D9] mx-2 py-2'>Download</button>
          <FaRegFilePdf color='red' />
        </div>
        <div className='grow h-14 mr-2 bg-[#7F56D8] rounded-md flex justify-center content-center text-center items-center text-white font-semibold text-xs py-4 md:text-sm lg:text-md xl:text-lg 2xl:text-lg text-wrap'>
          Can’t find asset code? Check Reported Asset Archive here
        </div>
        <div className='flex flex-row justify-center content-center items-center grow h-14'>
          <button
            type='submit'
            className='h-14 p-4 shadow rounded-l-lg bg-white'
          >
            <BsSearch size='1em' color='#2B3674' />
          </button>
          <input
            type='text'
            name='q'
            className='w-full h-14 shadow p-4 rounded-r-lg bg-white'
            placeholder='Search'
          />
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-6 gap-2 mx-2 bg-white px-4 py-4 rounded-md mt-6'>
        <div className='bg-[#7F56D8] border rounded-md h-[80px] grid grid-rows-2 gap-4'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex justify-start items-center pt-0 mt-0 ml-2 text-white text-md font-semibold pl-2'>
              Total
            </div>
            <div className='flex justify-center items-center mt-2 mr-2'></div>
          </div>
          <div className='flex justify-center text-center text-3xl font-bold pb-2 text-white'>
            281
          </div>
        </div>
        <div className='bg-[#7F56D8] border rounded-md h-[80px] grid grid-rows-2 gap-4'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex justify-start items-center pt-0 mt-0 ml-2 text-white text-md font-semibold pl-2'>
              Reported
            </div>
            <div className='flex justify-end items-center mr-2'>
              <div className='text-[#7F56D8] font-normal text-sm px-4 py-1 bg-white rounded-md'>
                39.15%
              </div>
            </div>
          </div>
          <div className='flex justify-center text-center text-3xl font-bold pb-2 text-white'>
            281
          </div>
        </div>
        <div className='bg-[#7F56D8] border rounded-md h-[80px] grid grid-rows-2 gap-4'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex justify-start items-center pt-0 mt-0 ml-2 text-white text-md font-semibold pl-2'>
              Mapped
            </div>
            <div className='flex justify-end items-center mr-2'>
              <div className='text-[#7F56D8] font-normal text-sm px-4 py-1 bg-white rounded-md'>
                39.15%
              </div>
            </div>
          </div>
          <div className='flex justify-center text-center text-3xl font-bold pb-2 text-white'>
            281
          </div>
        </div>
        <div className='bg-[#7F56D8] border rounded-md h-[80px] grid grid-rows-2 gap-4'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex justify-start items-center pt-0 mt-0 ml-2 text-white text-md font-semibold pl-2'>
              Not Mapped
            </div>
            <div className='flex justify-end items-center mr-2'>
              <div className='text-[#7F56D8] font-normal text-sm px-4 py-1 bg-white rounded-md'>
                39.15%
              </div>
            </div>
          </div>
          <div className='flex justify-center text-center text-3xl font-bold pb-2 text-white'>
            281
          </div>
        </div>
        <div className='bg-[#7F56D8] border rounded-md h-[80px] grid grid-rows-2 gap-4'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex justify-start items-center pt-0 mt-0 ml-2 text-white text-md font-semibold pl-2'>
              Punched
            </div>
            <div className='flex justify-end items-center mr-2'>
              <div className='text-[#7F56D8] font-normal text-sm px-4 py-1 bg-white rounded-md'>
                39.15%
              </div>
            </div>
          </div>
          <div className='flex justify-center text-center text-3xl font-bold pb-2 text-white'>
            281
          </div>
        </div>
        <div className='bg-[#7F56D8] border rounded-md h-[80px] grid grid-rows-2 gap-4'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex justify-start items-center pt-0 mt-0 ml-2 text-white text-md font-semibold pl-2'>
              Not Punched
            </div>
            <div className='flex justify-end items-center mr-2'>
              <div className='text-[#7F56D8] font-normal text-sm px-4 py-1 bg-white rounded-md'>
                39.15%
              </div>
            </div>
          </div>
          <div className='flex justify-center text-center text-3xl font-bold pb-2 text-white'>
            281
          </div>
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
                          <span>Asset Code</span>
                        </th>
                        <th scope='col' className='px-4 py-3.5 text-center'>
                          DT Code
                        </th>
                        <th scope='col' className='px-4 py-3.5 text-center'>
                          DT Name
                        </th>
                        <th scope='col' className='px-4 py-3.5 text-center'>
                          Make
                        </th>
                        <th scope='col' className='px-4 py-3.5 text-center'>
                          Manufacturing Year
                        </th>
                        <th scope='col' className='px-4 py-3.5 text-center'>
                          Capacity
                        </th>
                        <th scope='col' className='px-4 py-3.5 text-center'>
                          Location
                        </th>
                        <th scope='col' className='px-4 py-3.5 text-center'>
                          Is Punched
                        </th>
                        <th scope='col' className='px-4 py-3.5 text-center'>
                          Report
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white text-center'>
                      {assetmapper.map((dt) => (
                        <tr key={dt.assetcode}>
                          <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700'>
                            {dt.assetcode}
                          </td>
                          <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700'>
                            {dt.dtcode}
                          </td>
                          <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700'>
                            {dt.dtname}
                          </td>
                          <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700'>
                            {dt.maker}
                          </td>
                          <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700'>
                            {dt.manufact}
                          </td>
                          <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700'>
                            {dt.capacity}
                          </td>
                          <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700'>
                            {dt.location}
                          </td>
                          <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700'>
                            <div className=''>
                              <label className='text-white'>
                                <input
                                  className='transition-all duration-500 ease-in-out w-4 h-4 accent-[#7F56D8]'
                                  type='checkbox'
                                />
                              </label>
                            </div>
                          </td>
                          <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700'>
                            <div className='grid grid-cols-2 gap-1'>
                              <div>
                                <FaRegEdit size='1.5em' />
                              </div>
                              <div>
                                <PiWarningOctagon size='1.5em' />
                              </div>
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

export default Mapper;
