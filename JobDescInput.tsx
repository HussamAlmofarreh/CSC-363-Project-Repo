import React from "react";


//Job description section
const JobDescInput = () => 
{
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      
      <h2 className="text-xl font-semibold mb-2">Job Description</h2>
      
      <textarea placeholder="Paste or Write Job description..." className="w-full h-40 p-6 border rounded-xl focus"/> 
      
      <button type="submit"className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"> Submit </button>
    
    </div>
  );
};

export default JobDescInput;

