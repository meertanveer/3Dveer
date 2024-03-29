import React from "react";
import { BsSearch } from "react-icons/bs";

const atcmapper = [
    {
        feedercode:"",
        month:"",
        year: "",
        inputenergy:"",
        energybilled:"",
        amountbilled:"",
        amountcollected:"",
        billingeff:"",
        collectioneff:"",
        atcloss:""
    },
    {
        feedercode:"",
        month:"",
        year: "",
        inputenergy:"",
        energybilled:"",
        amountbilled:"",
        amountcollected:"",
        billingeff:"",
        collectioneff:"",
        atcloss:""
    },
    {
        feedercode:"",
        month:"",
        year: "",
        inputenergy:"",
        energybilled:"",
        amountbilled:"",
        amountcollected:"",
        billingeff:"",
        collectioneff:"",
        atcloss:""
    },
    {
        feedercode:"",
        month:"",
        year: "",
        inputenergy:"",
        energybilled:"",
        amountbilled:"",
        amountcollected:"",
        billingeff:"",
        collectioneff:"",
        atcloss:""
    },
  ]
const ATCLoss = () =>{
    return(
        <>
        <div className="flex flex-row-reverse my-4 justify-between">
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
                        <span>Feeder Code</span>
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-center">
                        Month
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-center">
                        Year
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-center">
                        Input Energy
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-center">
                        Energy Billed
                      </th> 
                      <th scope="col" className="px-4 py-3.5 text-center">
                        Amount Billed
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-center">
                        Amount Collected
                      </th> 
                      <th scope="col" className="px-4 py-3.5 text-center">
                        Billing Efficiency 
                      </th> 
                      <th scope="col" className="px-4 py-3.5 text-center">
                        Collection Efficiency
                      </th> 
                      <th scope="col" className="px-4 py-3.5 text-center">
                        AT&C Loss
                      </th> 
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white text-center">
                    {atcmapper.map((atc) => (
                      <tr key={atc.feedercode}>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-white font-semibold">
                          {atc.feedercode}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {atc.month}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700 text-wrap">
                          {atc.year}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {atc.inputenergy}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {atc.energybilled}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {atc.amountbilled}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {atc.amountcollected}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {atc.billingeff}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {atc.collectioneff}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {atc.atcloss}
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

export default ATCLoss;