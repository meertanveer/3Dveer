import React from 'react';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center  ml-10 '>
      <div className='bg-white w-3/4  flex flex-col p-8 rounded-md shadow-md '>
        <p className='text-gray-800'>{message}</p>
        <button
          className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default CustomAlert;
