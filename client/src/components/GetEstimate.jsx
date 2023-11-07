import React from 'react'

const GetEstimate = () => {
  return (
    <div>
          <form className="section flex flex-col justify-center items-center w-full max-w-md mx-auto p-4 bg-purple-200">
      <h2 className="heading-get mb-6 text-xl font-bold text-center">Get Estimate</h2>

      <label htmlFor="shipFrom" className="form-label-ship-from block mb-2">Ship from</label>
      <input id="shipFrom" className="form-input mb-4 p-2 border rounded" type="text" placeholder="Enter origin" required />

      <label htmlFor="shipTo" className="form-label-ship-to block mb-2">Ship to</label>
      <input id="shipTo" className="form-input mb-4 p-2 border rounded" type="text" placeholder="Enter destination" required />

      <label htmlFor="packageType" className="form-label-package block mb-2">Package Type</label>
      <select id="packageType" className="form-button mb-4 p-2 border rounded" required>
        <option value="">Select package type</option>
        <option value="document">Document</option>
        <option value="parcel">Parcel</option>
        <option value="largeParcel">Large Parcel</option>
      </select>

      <label htmlFor="weight" className="form-label block mb-2">Weight</label>
      <input id="weight" className="form-input mb-4 p-2 border rounded" type="number" placeholder="Weight in lbs" required />

      <button type="button" className="form-button-advanced mb-4 p-2 border rounded bg-gray-200">Advanced</button>

      <button type="submit" className="form-button-3 p-2 border rounded bg-blue-500 text-white">Get Estimate</button>
    </form>
    </div>
  )
}

export default GetEstimate