import React, { useState } from 'react';

const DamageEntryPage = () => {
  const [eventDate, setEventDate] = useState('');
  const [kCode, setKCode] = useState('');
  const [status, setStatus] = useState('');
  const [showAssetHistory, setShowAssetHistory] = useState(false);
  const selectStatus = [
    { id: 1, title: 'Jammu' },
    { id: 2, title: 'Kathua' },
    { id: 3, title: 'Samba' },
    { id: 4, title: 'Poonch' },
    { id: 5, title: 'Rajouri' },
    { id: 6, title: 'Udhampur' },
    { id: 7, title: 'Reasi' },
    { id: 8, title: 'Ramban' },
    { id: 9, title: 'Doda' },
    { id: 10, title: 'Kishtwar' },
    { id: 11, title: 'Srinagar' },
    { id: 12, title: 'Anantnag' },
    { id: 13, title: 'Pulwama' },
    { id: 14, title: 'Kupwara' },
    { id: 15, title: 'Shopian' },
    { id: 16, title: 'Ganderbal' },
    { id: 17, title: 'Bandipora' },
    { id: 18, title: 'Baramulla' },
    { id: 19, title: 'Budgam' },
    { id: 20, title: 'Kulgam' },
  ];
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const handleDateChange = (e) => {
    setEventDate(e.target.value);
  };
  const handleKCode = (e) => {
    setKCode(e.target.value);
  };
  const updateStatusFunction = () => {
    console.log(eventDate, kCode, status);
    setShowAssetHistory(true);
  };
  return (
    <div className='bg-gray-200 min-h-screen p-10 text-sm sm:text-base '>
      <div className='flex flex-col flex-wrap justify-between  p-6 bg-white border rounded '>
        <div className='flex flex-col sm:flex-row justify-between'>
          <div className='flex flex-col mb-4 w-full md:w-auto md:mr-4'>
            <label
              htmlFor='asset'
              className='text-gray-700 mb-2 font-medium mr-2'
            >
              Select K-Code of the DT
            </label>
            <input
              type='text'
              id='asset'
              name='asset'
              value={kCode}
              onChange={handleKCode}
              className='border border-gray-300 outline-none w-full rounded px-2 py-1'
            />
          </div>
          <div className='flex flex-col mb-4 w-full md:w-auto md:mr-4'>
            <label
              htmlFor='subdivision'
              className='text-gray-700 mb-2 font-medium mr-2'
            >
              Select Status
            </label>
            <select
              id='subdivision'
              className='border border-gray-300 outline-none rounded px-2 py-1'
              onChange={handleStatusChange}
            >
              {selectStatus.map((status) => (
                <option key={status.id} value={status.title}>
                  {status.title}
                </option>
              ))}
            </select>
          </div>
          <div className='flex flex-col mb-4 w-full md:w-auto md:mr-4'>
            <label
              htmlFor='eventDate'
              className='text-gray-700 mb-2 font-medium mr-2'
            >
              Event Date
            </label>
            <input
              type='date'
              id='eventDate'
              name='eventDate'
              value={eventDate}
              onChange={handleDateChange}
              className='border border-gray-300 outline-none w-full rounded px-2 py-1'
            />
          </div>
          <div className='flex flex-col w-full md:w-auto'>
            <label
              htmlFor='updateStatus'
              className='text-gray-700 mb-2 font-medium mr-2'
            >
              Update Status
            </label>
            <button
              onClick={updateStatusFunction}
              className='bg-[#7F56D8] text-white px-4 py-2 rounded font-sm'
            >
              Update Status
            </button>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='bg-gray-100 rounded-lg mt-6 p-4 w-1/2'>
            <div className='flex justify-between items-center gap-1'>
              <p className='bg-[#7F56D8] text-small font-small pl-2 pr-2 rounded text-white'>
                K090002
              </p>
              <span className='text-sm font-medium text-white bg-green-400 px-2 sm:px-4 py-1 rounded'>
                LIVE
              </span>
            </div>
            <div className='mt-4 '>
              <p className='sm:text-smfont-semibold text-white bg-[#7F56D8] px-2 py-1 rounded'>
                Asset Details
              </p>
              <div className='gap-2 p-2'>
                <div className='flex justify-between w-1/2'>
                  <span className='text-gray-600 text-sm'>Make</span>
                  <span className='text-gray-900 text-md'>Test</span>
                </div>
                <div className='flex justify-between w-1/2'>
                  <span className='text-gray-600 text-sm'>Capacity</span>
                  <span className='text-gray-900 text-md'>12</span>
                </div>
                <div className='flex justify-between w-1/2'>
                  <span className='text-gray-600 text-sm'>
                    Manufacturing Year
                  </span>
                  <span className='text-gray-900 text-md'>2024</span>
                </div>
              </div>
            </div>
            <div className='mt-4 '>
              <p className='sm:text-sm  text-white bg-[#7F56D8] px-2 py-1 rounded '>
                Substation Details
              </p>
              <div className='gap-2 p-2'>
                <div className='flex justify-between w-1/2'>
                  <span className='text-gray-600 text-sm'>Code</span>
                  <span className='text-gray-900 text-md'>
                    {kCode ? kCode : '--'}
                  </span>
                </div>
                <div className='flex justify-between w-1/2'>
                  <span className='text-gray-600 text-sm'>Name</span>
                  <span className='text-gray-900 text-md'>
                    {status ? status : '--'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gray-100 mt-6 w-1/2 ml-10 rounded h-40'>
            <div className='flex flex-col w-full md:w-auto'>
              <p className='bg-[#7F56D8] text-white px-4 py-2 rounded font-sm'>
                Asset History
              </p>
            </div>
            {showAssetHistory ? (
              <div className='flex justify-between mt-6 pl-8 pr-8'>
                <p className='font-bold '>Mapped Asset Successfully</p>
                <p>{eventDate}</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DamageEntryPage;
