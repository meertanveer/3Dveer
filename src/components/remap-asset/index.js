import React, { useRef } from 'react';
import { useState } from 'react';
import CustomAlert from '../customAlert';
import { useRecoilState } from 'recoil';
import { alert1 } from '../../recoil/atoms/myAtoms';
import '../../App.css';
const AssetForm = () => {
  // Define your state and event handlers here
  const [asset, setAsset] = React.useState('');
  const [remarks, setRemarks] = React.useState('');
  const [mapDT, setmapDT] = React.useState('');
  const [closeWindow1, setCloseWindow1] = useRecoilState(alert1);
  const mappingDT = {
    Jammu: 'Jam123',
    Kathua: 'Kat123',
    Samba: 'Sam123',
    Poonch: 'Poo123',
    Rajouri: 'Raj123',
    Udhampur: 'Udh123',
    Reasi: 'Rea123',
    Ramban: 'Ram123',
    Doda: 'Dod123',
    Kishtwar: 'Kis123',
    Srinagar: 'Sri123',
    Anantnag: 'Ana123',
    Pulwama: 'Pul123',
    Kupwara: 'Kup123',
    Shopian: 'Sho123',
    Ganderbal: 'Gan123',
    Bandipora: 'Ban123',
    Baramulla: 'Bar123',
    Budgam: 'Bud123',
    Kulgam: 'Kul123',
  };

  const handleAssetChange = (e) => {
    setAsset(e.target.value);
  };

  const handleRemarksChange = (e) => {
    setRemarks(e.target.value);
  };
  function mapValues(asset) {
    // Check if the value exists in the mapping object
    if (mappingDT.hasOwnProperty(asset)) {
      setmapDT(mappingDT[asset]);
    } else {
      // If the value is not found in the mapping, you can handle it accordingly
      return 'Unknown';
    }
  }

  const handleValidateClick = () => {
    setmapDT(asset);
    mapValues(asset);
  };

  const handleCancelClick = () => {
    // setShowAlert(false);
    setCloseWindow1(false);
  };

  const handleMapClick = () => {
    // Map the asset to SHK-1 here
    remarks ? console.log(remarks) : alert('Enter remarks');
  };
  //custom alert box
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className='fixed top-0 left-0 bg-gray-800 bg-opacity-60 w-full h-screen'>
      <div className='fixed top-20 left-1/3 w-1/3 justify-center  transform -translate-x-1/2  p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/2  pl-20 '>
        <div className='flex justify-center w-full bg-white border rounded shadow-2xl'>
          <div className='container mx-auto  p-4'>
            <h1 className='text-sm sm:text-base font-bold mb-4 title-sm'>
              Re-Map Asset installed at substation
            </h1>
            <div className=' mb-2 w-full flex flex-col '>
              <label htmlFor='asset' className='mr-2 font-sm'>
                Enter Correct Asset
              </label>
              <br></br>
              <div className='flex justify-between flex-col sm:flex-row md:flex-col lg:flex-row gap-2 '>
                <input
                  type='text'
                  id='asset'
                  name='asset'
                  value={asset}
                  onChange={handleAssetChange}
                  className='border border-gray-300 outline-none  rounded px-2 py-1'
                />
                <div>
                  <button
                    className='bg-[#7F56D8] text-white px-4 w-full py-2 rounded font-sm'
                    onClick={() => {
                      handleShowAlert();
                      handleValidateClick();
                    }}
                  >
                    Validate Asset Code
                  </button>
                  {showAlert && (
                    <CustomAlert
                      message={asset ? 'Done' : 'Empty'}
                      onClose={handleCloseAlert}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className='mb-4'>
              <label htmlFor='remarks' className='mr-2 font-sm'>
                Remarks
              </label>
              <br></br>
              <textarea
                id='remarks'
                name='remarks'
                value={remarks}
                onChange={handleRemarksChange}
                className='border border-gray-300 outline-none rounded px-2 py-1 w-full h-40'
              />
            </div>
            <div className='flex justify-end w-full flex-col sm:flex-row gap-2 md:flex-col lg:flex-row '>
              <button
                onClick={handleCancelClick}
                className='bg-gray-300 text-black px-4 py-2 w-full sm:w-1/3  rounded font-sm'
              >
                Cancel
              </button>

              <div>
                <button
                  className='bg-[#7F56D8] text-white px-4 py-2 w-full  rounded font-sm'
                  onClick={handleShowAlert}
                >
                  Map to {mapDT ? mapDT : 'DT'}
                </button>
                {showAlert && (
                  <CustomAlert
                    message={remarks ? 'Done' : 'Empty'}
                    onClose={handleCloseAlert}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetForm;
