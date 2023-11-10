import React from "react";
const Tenure = ({ data, setData }) => {

    const handleChange = (event) => {
      setData({...data, loanTerm: event.target.value});
    };
  
    return (
      <div className="w-full">
        <label htmlFor="tenure" className="block text-gray-700 text-sm font-bold mb-2">
          Tenure
        </label>
        <select
          id="tenure"
          name="tenure"
          value={data.loanTerm}
          className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50"
          onChange={handleChange}
        >
          <option value={5}>5 years</option>
          <option value={10}>10 years</option>
          <option value={15}>15 years</option>
          <option value={20}>20 years</option>
          <option value={25}>25 years</option>
        </select>
      </div>
    );
  };
  
  export default Tenure;