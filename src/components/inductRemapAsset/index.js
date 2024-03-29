import React, { useState } from 'react';
import AssetForm from '../remap-asset';
import { useRecoilState } from 'recoil';
import { alert1, alert2 } from '../../recoil/atoms/myAtoms';
import InductAsset from '../InductAsset/induct-asset';

function InductRemapAsset() {
  const keys = ['SHK1', 'SHK2', 'SHK3', 'SHK4'];

  const [selectedKey, setSelectedKey] = useState('');
  const [closeWindow1, setCloseWindow1] = useRecoilState(alert1);
  const [closeWindow2, setCloseWindow2] = useRecoilState(alert2);

  const substationCodes = {
    SHK1: {
      code: '0023',
      name: 'DTR-001-EXCHANGE MAIN-315',
      location: 'BSNL Exchange',
      assetCode: 'K900017',
      make: 'Reliance',
      capacity: '11',
      manufacturingValue: '2021',
    },
    SHK2: {
      code: '1456',
      name: 'DTR-001-EXCHANGE MAIN-205',
      location: 'Airtel Road',
      assetCode: 'K100033',
      make: 'Techno',
      capacity: '22',
      manufacturingValue: '2022',
    },
    SHK3: {
      code: '7089',
      name: 'DTR-001-EXCHANGE MAIN-515',
      location: 'Pulwama',
      assetCode: 'K800022',
      make: 'Tata',
      capacity: '55',
      manufacturingValue: '2023',
    },
    SHK4: {
      code: '1011',
      name: 'DTR-001-EXCHANGE MAIN-320',
      location: 'Dalgate',
      assetCode: 'K000011',
      make: 'Anvil',
      capacity: '43',
      manufacturingValue: '2024',
    },
  };

  const handleWrongAsset = () => {
    alert('working...');
  };
  const handleRemapAsset = () => {
    setCloseWindow1(true);
  };
  const handleInductAsset = () => {
    setCloseWindow2(true);
  };
  const handleSubdivisionChange = (event) => {
    setSelectedKey(event.target.value);
  };
  return (
    <div
      className='pt-10 lg:pl-20 lg:pr-20 mx-auto px-4 text-sm sm:text-base w-full'
      style={{ backgroundColor: '#ECF2F5' }}
    >
      <div className='w-full h-screen'>
        <div className='py-8 '>
          <h5 className='text-2xl text-sm md:text-2xl  font-bold text-gray-900'>
            Induct new asset to substation / Remap asset
          </h5>
          <div className='flex lg:flex-row lg:p-10  items-center justify-center lg:justify-between sm:items-start sm:justify-start mt-4 border bg-white border-gray-300 shadow-md p-4 rounded flex-col '>
            <div className='w-full sm:w-full mr-4 lg:w-1/2 '>
              <label
                htmlFor='substation-code'
                className='text-gray-700 font-medium mr-2'
              >
                Select Substation Code
              </label>
              <select
                id='substation-code'
                className='border border-gray-300 outline-none rounded px-2 py-1 w-full'
                value={selectedKey}
                onChange={handleSubdivisionChange}
              >
                <option value=''>Select an option</option>
                {keys.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>

              {selectedKey && (
                <div className='mt-6'>
                  <h2 className='text-md h-8 bg-[#7F56D8] flex items-center pl-4 rounded font-bold text-white'>
                    Substation Details
                  </h2>
                  <div className='flex flex-col'>
                    <div className='flex items-center '>
                      <span className='text-gray-700 w-1/2 font-medium'>
                        Code:
                      </span>
                      <span className='text-gray-900 text-sm font-bold'>
                        {substationCodes[selectedKey].code}
                      </span>
                    </div>
                    <div className='flex items-center'>
                      <span className='text-gray-700 w-1/2 font-medium'>
                        Name:
                      </span>
                      <span className='text-gray-900 text-sm font-bold'>
                        {substationCodes[selectedKey].name}
                      </span>
                    </div>
                    <div className='flex items-center '>
                      <span className='text-gray-700 w-1/2 font-medium'>
                        Location:
                      </span>
                      <span className='text-gray-900 text-sm font-bold'>
                        {substationCodes[selectedKey].location}
                      </span>
                    </div>
                  </div>
                  <div className='text-md h-8 bg-[#7F56D8] flex items-center pl-4 rounded font-bold text-white'>
                    <h2>Asset Details</h2>
                  </div>
                  <div className='flex items-center '>
                    <span className='text-gray-700 w-1/2 font-medium'>
                      Asset Code
                    </span>
                    <span className='text-gray-900 text-sm font-bold'>
                      {substationCodes[selectedKey].assetCode}
                    </span>
                  </div>
                  <div className='flex items-center '>
                    <span className='text-gray-700 w-1/2 font-medium'>
                      Make:
                    </span>
                    <span className='text-gray-900 text-sm font-bold'>
                      {substationCodes[selectedKey].make}
                    </span>
                  </div>
                  <div className='flex items-center'>
                    <span className='text-gray-700 w-1/2 font-medium'>
                      Capacity:
                    </span>
                    <span className='text-gray-900 text-sm font-bold'>
                      {substationCodes[selectedKey].capacity}
                    </span>
                  </div>
                  <div className='flex items-center'>
                    <span className='text-gray-700 font-medium w-1/2'>
                      Manufacturing Year:
                    </span>
                    <span className='text-gray-900 text-sm font-bold'>
                      {substationCodes[selectedKey].manufacturingValue}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div
                className='w-full sm:w-full lg:w-full md:w-full flex flex-col flex-center mt-20 pb-2 rounded  '
                style={{ backgroundColor: '#ECF2F5' }}
              >
                <button
                  className='bg-red-600 text-white font-medium px-4 py-2 mb-8 rounded w-full '
                  onClick={handleWrongAsset}
                >
                  Wrong Asset Mapped to Substation?
                </button>
                <button
                  className='bg-[#7F56D8] text-white font-medium px-4 py-2 rounded w-full mt-4 '
                  onClick={handleRemapAsset}
                  disabled={closeWindow2 ? true : false}
                >
                  Re-Map Asset (for assets with code)
                </button>
                {closeWindow1 && <AssetForm />}
                <button
                  className='bg-[#7F56D8] text-white font-medium px-4 py-2 rounded w-full mt-4'
                  onClick={handleInductAsset}
                  disabled={closeWindow1 ? true : false}
                >
                  Induct Asset (for assets without code)
                </button>
                {closeWindow2 && <InductAsset />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InductRemapAsset;
