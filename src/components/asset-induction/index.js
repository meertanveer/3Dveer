import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const AssetInduction = () => {
  const [subdivision, setSubdivision] = useState('');
  const [year, setYear] = useState('');
  const [maker, setMaker] = useState('');
  const [remarks, setRemarks] = useState('');
  const [capac, setCapac] = useState('');

  const subDivisions = [
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
  const makeYear = [
    { id: 1, year: 1990 },
    { id: 2, year: 1991 },
    { id: 3, year: 1992 },
    { id: 4, year: 1993 },
    { id: 5, year: 1994 },
    { id: 6, year: 1995 },
    { id: 7, year: 1996 },
    { id: 8, year: 1997 },
    { id: 9, year: 1998 },
    { id: 10, year: 1999 },
    { id: 11, year: 2000 },
    { id: 12, year: 2001 },
    { id: 13, year: 2002 },
    { id: 14, year: 2003 },
    { id: 15, year: 2004 },
    { id: 16, year: 2005 },
    { id: 17, year: 2006 },
    { id: 18, year: 2007 },
    { id: 19, year: 2008 },
    { id: 20, year: 2009 },
  ];
  const make = [
    { id: 1, company: 'Macroplast Transformers' },
    { id: 2, company: 'ABB India Limited' },
    { id: 3, company: 'Kirloskar Electric Company Ltd.' },
    { id: 4, company: 'Siemens Limited' },
    { id: 5, company: 'Bharat Heavy Electricals Limited' },
    { id: 6, company: 'Transformers & Rectifiers India Limited' },
    { id: 7, company: 'Gujarat Transformers Private Limited' },
    { id: 8, company: 'Kotsons Private Limited' },
  ];
  const capacity = [
    { id: 1, capacity: 16 },
    { id: 2, capacity: 25 },
    { id: 3, capacity: 63 },
    { id: 4, capacity: 100 },
    { id: 5, capacity: 160 },
    { id: 6, capacity: 200 },
    { id: 7, capacity: 250 },
    { id: 8, capacity: 315 },
    { id: 9, capacity: 400 },
    { id: 10, capacity: 500 },
    { id: 11, capacity: 630 },
    { id: 12, capacity: 1000 },
    { id: 13, capacity: 1250 },
    { id: 14, capacity: 1600 },
    { id: 15, capacity: 2000 },
    { id: 16, capacity: 2500 },
  ];
  const handleSDOChange = (e) => {
    setSubdivision(e.target.value);
  };
  const handleCapacityChange = (e) => {
    setCapac(e.target.value);
  };
  const handleYearMake = (e) => {
    setYear(e.target.value);
  };
  const handleTransfomerMake = (e) => {
    setMaker(e.target.value);
  };
  const addToRepository = () => {
    console.log(subdivision, year, maker, capac, remarks);
  };
  const viewRepository = () => {
    alert('view...');
  };
  return (
    <div className='p-4 '>
      <div className='flex justify-between'>
        <h1 className='text-xl font-bold'>Asset Induction</h1>
        <div className='flex justify-between'>
          <div>
            <p>Sub Division</p>
            <select
              onChange={handleSDOChange}
              className='border rounded-md w-60 h-10 outline-none pl-4 pr-6 text-sm'
            >
              {subDivisions.map((s) => {
                return <option id={s.id}>{s.title}</option>;
              })}
            </select>
          </div>
        </div>
      </div>

      {/* Form */}
      <form className='mt-4 m-10 border rounded-md border-gray-300 shadow-lg p-10 sm:text-base text-sm'>
        <div className='flex align-center justify-end'>
          <p className='bg-[#7F56D8] h-6  text-white px-4  ml-4 rounded font-sm'>
            Asset Count : {Math.floor(Math.random() * 900) + 100}
          </p>
          <button
            type='submit'
            className='bg-[#7F56D8] h-6  text-white px-4  ml-4 rounded font-sm'
            onClick={viewRepository}
          >
            View Repository
          </button>
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            className='text-purple-600 underline font-sm mt-4'
            onClick={viewRepository}
          >
            Add New Make
          </button>
        </div>
        {/* Dropdowns */}
        <div className='flex justify-between  flex-col sm:flex-row  gap-4 mb-4'>
          <div className='w-full  '>
            <p>Enter Capacity (KVA)</p>
            <select
              onChange={handleCapacityChange}
              className='border rounded-md p-2 col-span-1 w-full focus:outline-none'
            >
              {capacity.map((v) => {
                return <option id={v.id}>{v.capacity}</option>;
              })}
            </select>
          </div>
          <div className='w-full'>
            <p>Year of Make</p>
            <select
              onChange={handleYearMake}
              className='border rounded-md p-2 col-span-1 w-full focus:outline-none'
            >
              {makeYear.map((v) => {
                return <option id={v.id}>{v.year}</option>;
              })}
            </select>
          </div>
          <div className='w-full'>
            <p>Transformer Make</p>
            <select
              onChange={handleTransfomerMake}
              className='border rounded-md p-2 col-span-1 w-full focus:outline-none'
            >
              {make.map((v) => {
                return <option id={v.id}>{v.company}</option>;
              })}
            </select>
          </div>
        </div>

        {/* Textarea for Remarks */}
        <textarea
          placeholder='Remarks'
          rows='5'
          cols='50'
          className='p-2 w-full border outline-none'
          onChange={(e) => setRemarks(e.target.value)}
        ></textarea>

        {/* Button */}
        <div className='flex align-center justify-center mt-6'>
          <button
            type='submit'
            className='bg-[#7F56D8] text-white px-4 py-2 ml-4 rounded font-sm'
            onClick={addToRepository}
          >
            Add to Repository
          </button>
        </div>
      </form>

      {/* Asset Count and View Repository Link */}
      {/* Add relevant content here */}
    </div>
  );
};

export default AssetInduction;
