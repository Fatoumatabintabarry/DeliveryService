import React from 'react'
import '../quotation.css'
const GetEstimate = () => {

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle your form submission, for example sending data to a server
    console.log('Form submitted!');
  };

  return (
<div className='flex justify-center items-center form-container'>
  <div className='w-full px-4 md:px-32 lg:px-24'>
    
    <form className="bg-white rounded-lg shadow-xl p-8 mt-10 md:mt-0 border-indigo-600 ">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Get Estimate
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4  mb-6">

        <div className="col-span-1 lg:col-span-1">
          <input type="text" className="form-input w-full p-2 border border-gray-300 rounded" placeholder='Ship from' />
          {/* Assuming the image is a button or an icon */}
        </div>

        <div className="col-span-1 lg:col-span-1">
          <input type="text" className="form-input w-full p-2 border border-gray-300 rounded" placeholder='Ship to'/>
          {/* Assuming the image is a button or an icon */}
        </div>

        <div className="col-span-1 lg:col-span-1">
          <select name="PackageType" id="PackageType" className="form-select w-full p-2 border border-gray-300 rounded bg-white text-gray-700">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div className="col-span-1 lg:col-span-1">
          <button type="submit" className="form-button-3 w-full p-2 border border-transparent
           bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none focus:ring-2
            focus:ring-purple-500 focus:ring-opacity-50">
            Get Estimate
          </button>
        </div>

        <div className="col-span-1 lg:col-span-1">
          <input type="text" className="form-input w-full p-2 border border-gray-300 rounded" placeholder='Result of estimation'/>
          {/* Assuming the image is a button or an icon */}
        </div>
      </div>
    </form>
  </div>
</div>



  );
};




export default GetEstimate