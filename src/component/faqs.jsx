import React from 'react';

const FAQ = () => {
  return (
    <div className="bg-white min-h-[500px] p-28 md:p-8  mx-48 ">
         <div className="max-w-[1500px]  m-2 text-3xl font-semibold mx-auto  flex justify-center  ">

FAQ
</div>
<div className="max-w-[1500px] mx-auto m-2 text-3xl font-bold  flex justify-center  ">

Any Questions? Look Here
</div>
<div className="max-w-[1500px] mx-auto m-2 text-[18px] font-normal  flex justify-center  ">

There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
</div>
<div className='  max-w-full  flex'>

    <div  className='m-10 '>
    {/* Accordion 1 */}
    <div className="bg-white w-full rounded-lg m-6 shadow-lg overflow-hidden">
      <input type="checkbox" id="accordion1" className="peer hidden" />
      <label htmlFor="accordion1" className="flex items-center justify-between p-4 bg-gray-300 text-black cursor-pointer hover:bg-gray-400 transition-colors">
        <span className="text-lg font-semibold">How do I start trading Forex?</span>
        <svg className="w-6 h-6 transition-transform peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </label>
      <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
        <div className="p-4">
         
          <p className="text-gray-700 leading-relaxed">To start, create an account, verify your identity, deposit funds, and access our trading platform to begin trading .</p>
        </div>
      </div>
    </div>
    {/* Accordion 2 */}
    <div className="bg-white w-full rounded-lg m-6 shadow-lg overflow-hidden">
      <input type="checkbox" id="accordion2" className="peer hidden" />
      <label htmlFor="accordion2" className="flex items-center justify-between p-4 bg-gray-300 text-black cursor-pointer hover:bg-gray-400 transition-colors">
        <span className="text-lg font-semibold">What are trading hours?</span>
        <svg className="w-6 h-6 transition-transform peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </label>
      <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
        <div className="p-4">
         
          <p className="text-gray-700 leading-relaxed">Forex is open 24 hours a day, five days a week, starting from Sunday evening to Friday evening (GMT).</p>
        </div>
      </div>
    </div>
    {/* Accordion 3 */}
    <div className="bg-white w-full rounded-lg m-6 shadow-lg overflow-hidden">
      <input type="checkbox" id="accordion3" className="peer hidden" />
      <label htmlFor="accordion3" className="flex items-center justify-between p-4 bg-gray-300 text-black cursor-pointer hover:bg-gray-400 transition-colors">
        <span className="text-lg font-semibold">What documents are required for verification?</span>
        <svg className="w-6 h-6 transition-transform peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </label>
      <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
        <div className="p-4">
          
          <p className="text-gray-700 leading-relaxed">Typically, we need a valid ID (passport, driver’s license, or national ID card) and a proof of address (utility bill, bank receipt or bank statement)..</p>
        </div>
      </div>
    </div>

    </div>

    <div className='m-10 '>

    
    {/* Accordion 4 */}
    <div className="bg-white w-full rounded-lg m-6 shadow-lg overflow-hidden">
      <input type="checkbox" id="accordion4" className="peer hidden" />
      <label htmlFor="accordion4" className="flex items-center justify-between p-4 bg-gray-300 text-black cursor-pointer hover:bg-gray-400 transition-colors">
        <span className="text-lg font-semibold">How long does the verification process take?</span>
        <svg className="w-6 h-6 transition-transform peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </label>
      <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
        <div className="p-4">
          <p className="text-gray-700 leading-relaxed">Verification usually takes 12-24 hours, but it may vary depending on the volume of requests.</p>
        </div>
      </div>
    </div>
    {/* Accordion 5 */}
    <div className="bg-white w-full rounded-lg m-6 shadow-lg overflow-hidden">
      <input type="checkbox" id="accordion5" className="peer hidden" />
      <label htmlFor="accordion5" className="flex items-center justify-between p-4 bg-gray-300 text-black cursor-pointer hover:bg-gray-400 transition-colors">
        <span className="text-lg font-semibold">How can I deposit funds?</span>
        <svg className="w-6 h-6 transition-transform peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </label>
      <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
        <div className="p-4">
        
          <p className="text-gray-700 leading-relaxed">You can deposit funds via bank transfer or e-wallets like PayPal or Skrill.</p>
        </div>
      </div>
    </div>
    {/* Accordion 6 */}
    <div className="bg-white w-full rounded-lg m-6 shadow-lg overflow-hidden">
      <input type="checkbox" id="accordion6" className="peer hidden" />
      <label htmlFor="accordion6" className="flex items-center justify-between p-4 bg-gray-300 text-black cursor-pointer hover:bg-gray-400 transition-colors">
        <span className="text-lg font-semibold">How do I withdraw funds?</span>
        <svg className="w-6 h-6 transition-transform peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </label>
      <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
        <div className="p-4">
         
          <p className="text-gray-700 leading-relaxed">Log into your account on munafa capital , go to the 'Withdraw Funds' section and submit your request.</p>
        </div>
      </div>
    </div>

    </div>

    </div>

  </div>
// </div>

  );
};

export default FAQ;