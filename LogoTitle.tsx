import React from "react";

//Logo and title of the page along with the path of the log.png in the public folder.
const LogoTitle: React.FC = () => 
{
  return (
    <header className="flex flex-col py-4">
      <img src="/logo.png" alt="Logo" className="w-20 h-20 mb-2" /><h1 className="text-3xl font-bold text-gray-800">AI Resume</h1>
    </header>
  );
};

export default LogoTitle;