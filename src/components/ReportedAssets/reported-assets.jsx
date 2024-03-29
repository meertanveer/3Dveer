import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";



const assetmapper = [
    {
      assetcode: "K000037",
      dtcode: "SHK-252",
      dtname: "SHEIKH BADTR-234-ESTATE DEPARTMENT GUPKAR-630GH",
      reportType:"Duplicate Asset",
    },
    {
        assetcode: "K000037",
        dtcode: "SHK-252",
        dtname: "SHEIKH BADTR-234-ESTATE DEPARTMENT GUPKAR-630GH",
        reportType:"Duplicate Asset",
    },
    {
        assetcode: "K000037",
        dtcode: "SHK-252",
        dtname: "SHEIKH BADTR-234-ESTATE DEPARTMENT GUPKAR-630GH",
        reportType:"Duplicate Asset",
    },
    {
        assetcode: "K000037",
        dtcode: "SHK-252",
        dtname: "SHEIKH BADTR-234-ESTATE DEPARTMENT GUPKAR-630GH",
        reportType:"Duplicate Asset",
    },
    {
        assetcode: "K000037",
        dtcode: "SHK-252",
        dtname: "SHEIKH BADTR-234-ESTATE DEPARTMENT GUPKAR-630GH",
        reportType:"Duplicate Asset",
    },
    {
        assetcode: "K000037",
        dtcode: "SHK-252",
        dtname: "SHEIKH BADTR-234-ESTATE DEPARTMENT GUPKAR-630GH0",
        reportType:"Duplicate Asset",
    },
  ]
const ReportedAssets = () =>{
    return(
        <>
        <div className="flex flex-row my-4 justify-between">
                <div className="bg-[#7F56D8] text-white rounded-md ml-8 pr-6 h-12 px-4 flex justify-start content-center items-center font-normal text-sm md:text-md lg:text-xl xl:text-2xl 2xl:text-2xl">
                    <IoIosArrowBack color="white"/>
                    Back to Asset Mapper
                </div>
                <div className="mr-8 h-12 flex flex-row">
                   <div className="flex justify-center content-center items-center mr-6">
                        <button className='bg-[#D9D9D9] mx-2 py-2 px-12 h-12 rounded-md'>
                            Excel
                        </button>
                   </div> 
                   <div className="flex flex-row justify-center content-center items-center grow h-12">
                        <button type="submit" className='h-12 p-4 shadow rounded-l-lg bg-white'><BsSearch size="1em" color="#2B3674" /></button>
                        <input type="text" name="q" className="bg-white w-full h-12 shadow pr-14 rounded-r-lg focus:ring-0 focus:outline-none focus:border-none focus:bg-white" placeholder="Search"/>
                    </div>
                </div>
        </div>

         {/* table */}
      <div className='bg-white mx-2 rounded-md'>
      <section className="mx-auto w-full max-w-9xl px-4 py-4 bg-white mt-4">
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#7F56D8] text-white font-semibold text-md">
                    <tr>
                      <th scope="col" className="px-4 py-3.5 text-center">
                        <span>Asset Code</span>
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-center">
                        DT Code
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-center">
                        DT Name
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-center">
                        Report Type
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-center">
                      
                      </th>  
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white text-center">
                    {assetmapper.map((dt) => (
                      <tr key={dt.assetcode}>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-white font-semibold">
                          <span className="bg-[#7F56D8] px-4 py-2 rounded-md">{dt.assetcode}</span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {dt.dtcode}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700 text-wrap">
                          {dt.dtname}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {dt.reportType}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          <div className="text-white bg-[#7F56D8] py-2 px-2 md:px-2 lg:px-0 xl:px-0 2xl:px-0 rounded-md font-semibold">
                                Restore the Main List
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
        <div className="flex items-center justify-center pt-6">
          <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">&larr; Previous</span>
            <span className="block lg:hidden">&larr;</span>
          </a>
          <a href="#" className="mx-1 flex items-center rounded-md border border-[#7F56D8] px-3 py-1 text-[#7F56D8] hover:scale-105">1</a>
          <a href="#" className="mx-1 flex items-center rounded-md border border-[#7F56D8] px-3 py-1 text-[#7F56D8] hover:scale-105">2</a>
          <a href="#" className="mx-1 flex items-center rounded-md border border-[#7F56D8] px-3 py-1 text-[#7F56D8] hover:scale-105">3</a>
          <a href="#" className="mx-1 flex items-center rounded-md border border-[#7F56D8] px-3 py-1 text-[#7F56D8] hover:scale-105">4</a>
          
          <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">Next &rarr;</span>
            <span className="block lg:hidden">&rarr;</span>
          </a>
        </div>
      </section>
      </div>

        </>
    );
}

export default ReportedAssets;