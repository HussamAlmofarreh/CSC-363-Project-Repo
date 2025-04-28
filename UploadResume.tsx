import React, { useState } from "react";

//Intialize Formats:
const FormatAllowed = [".pdf", ".doc", ".docx", ".md", ".tex"];

//The resume Upload section: (Majoraty of the code in this section was written using the help of AI and some exsisting code on different websites)
const UploadResume = () => 
{
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const FormatType = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();

      if (FormatAllowed.includes(FormatType)) 
      {
        setFileName(file.name);
        setError(null);
      } else 
      {
        setFileName(null);
        setError(`File Type is Unsupported. Please Look At the Supported Formats below And Try Again: ${FormatType}`);
      }
    }
  };

  //Styling The resume Upload section:
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-2">Upload Resume</h2>
      <input
        type="file"
        accept={FormatAllowed.join(",")}
        onChange={handleFileChange}
        className="block w-full border rounded-xl p-2"
      />
      <p className="text-sm text-red-500 mt-2">Supported formats: PDF, DOC, DOCX, Markdown (.md), LATEX (.tex)</p>
      
      {fileName && (<p className="mt-2 text-green-600 font-medium">Selected: {fileName}</p>)}
      {error && (<p className="mt-2 text-red-600 font-medium">{error}</p>)}
      
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"> Upload </button>
    
    </div>
  );
};

export default UploadResume;