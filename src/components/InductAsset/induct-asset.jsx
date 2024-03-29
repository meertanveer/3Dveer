import React, { useState } from 'react';
import { validateCapacity, validateYrofMake } from './induct-asset-validate';
import { useRecoilState } from 'recoil';
import { alert2 } from '../../recoil/atoms/myAtoms';

const InductAsset = () => {
  const [closeWindow2, setCloseWindow2] = useRecoilState(alert2);
  const [formData, setFormData] = useState({
    capacity: '',
    yearofmake: '',
  });

  const [formErrors, setFormErrors] = useState({
    capacity: null,
    yearofmake: null,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    switch (id) {
      case 'capacity':
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [id]: validateCapacity(value),
        }));
        break;
      case 'yearofmake':
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [id]: validateYrofMake(value),
        }));
        break;
      default:
        break;
    }

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = () => {
    // Check if all required fields are filled in formData and formErrors are empty
    return (
      Object.values(formData).every((value) => value.trim() !== '') &&
      Object.values(formErrors).every((error) => !error)
    );
  };

  const handleInductClick = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      // Handle form submission
      console.log('Form submitted successfully');
    } else {
      // Check if any field in formData is empty
      if (Object.values(formData).every((value) => value.trim() === '')) {
        alert('Please fill all fields');
      } else if (Object.values(formData).some((value) => value.trim() === '')) {
        alert('Some fields are empty. Please fill in all the required fields.');
      } else {
        alert('Please fix the highlighted errors before proceeding.');
      }
    }
  };
  const handleCloseWindow = () => {
    setCloseWindow2(false);
  };

  return (
    // flex items-center justify-center
    <div className='fixed top-0 left-0 bg-gray-800 bg-opacity-60 w-full h-screen'>
      <div className='fixed top-20 left-1/3 justify-center h-full sm:h-1/3 transform -translate-x-1/3'>
        {/* display as pop-up */}
        <div className='border border-gray-200 rounded-lg shadow-2xl px-8 pt-8 md:w-[450px] lg:w-[450px] 2xl:w-[500px] bg-white'>
          <div className='mb-5 grid grid-cols-1 gap-0 font-montserrat text-xl md:text-2xl lg:text-3xl 2xl:text-3xl font-semibold leading-tight tracking-tighter text-left'>
            Induct Asset Installed At Substation
          </div>
          <form>
            <div className='mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 gap-2'>
              <div className=''>
                <label
                  htmlFor='capacity'
                  className='block mb-2 text-xs md:text-sm lg:text-sm 2xl:text-sm font-medium text-gray-900  dark:text-black text-white'
                >
                  Enter Capacity (KVA){' '}
                </label>
                <input
                  type='text'
                  id='capacity'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-none focus:border-gray-4000 focus:outline-none w-full p-2 sm:p-3'
                  required
                  onChange={handleInputChange}
                  value={formData.capacity}
                />
                {formErrors.capacity && (
                  <span className='text-red-600 font-bold text-xs'>
                    {formErrors.capacity}
                  </span>
                )}
              </div>
              <div className=''>
                <label
                  htmlFor='yearofmake'
                  className='block mb-2 text-xs md:text-sm lg:text-sm 2xl:text-sm font-medium text-gray-900  dark:text-black text-white'
                >
                  Year of Make
                </label>
                <input
                  type='text'
                  maxLength='4'
                  id='yearofmake'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-none focus:border-gray-4000 focus:outline-none w-full p-2 sm:p-3'
                  required
                  onChange={handleInputChange}
                  value={formData.yearofmake}
                />
                {formErrors.yearofmake && (
                  <span className='text-red-600 font-bold text-xs'>
                    {formErrors.yearofmake}
                  </span>
                )}
              </div>
            </div>
            <div className='mb-5 grid grid-cols-1 gap-0'>
              <div className=''>
                <label
                  htmlFor='transformermake'
                  className='block mb-2 text-xs md:text-sm lg:text-sm 2xl:text-sm font-medium  text-gray-900 dark:text-black text-white'
                >
                  Transformer Make
                </label>
                <input
                  type='text'
                  id='transformermake'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-none focus:border-gray-4000 focus:outline-none w-full p-2 sm:p-3'
                  required
                />
              </div>
            </div>
            <div className='mb-0 h-[160px] sm:h-1/2 grid grid-cols-1 gap-0'>
              <label
                htmlFor='remark'
                className='block mb-2 text-xs md:text-sm lg:text-sm 2xl:text-sm font-medium text-gray-900  dark:text-black text-white'
              >
                Remark
              </label>
              <textarea
                id='remark'
                rows='8'
                className='resize-none h-1/2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-none focus:border-gray-4000 focus:outline-none w-full p-2 sm:p-3'
                required
              />
            </div>
            <div className='mb-2 grid grid-cols-1 gap-4 '>
              <div className='flex justify-end items-end '>
                <button
                  type='button'
                  onClick={handleCloseWindow}
                  className='focus:outline-none text-white bg-[#ADA9A9] focus:ring-0 font-semibold rounded-lg text-sm md:text-base lg:text-base xl:text-base  2xl:text-basee px-6 sm:px-0 md:px-8 lg:px-12 xl:px-12  2xl:px-12 py-2 md:py-2 lg:py-4 xl:py-4 2xl:py-2 mb-2 mr-2 sm:mr-6'
                >
                  Cancel
                </button>
                <button
                  type='button'
                  className='focus:outline-none text-white bg-[#7F56D8] focus:ring-0 font-semibold rounded-lg text-sm   md:text-base lg:text-base xl:-text-base 2xl:text-base px-4 sm:px-0 md:px-6 lg:px-8 xl:px-8 2xl:px-8 py-2 md:py-2 lg:py-4 xl:py-4 2xl:py-2 mb-2'
                  onClick={(e) => handleInductClick(e)}
                >
                  Induct Assets
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InductAsset;
