import React, { ReactNode } from "react";

interface LayoutProps 
{
  children: ReactNode;
}

//Simple Layout just to see how other functions would look on the page
const Layout: React.FC<LayoutProps> = ({ children }) => 
{
  return (
    <div className="min-h-screen bg-white-100 text-black-500 font-sans p-4">
      <div className="max-w-6xl mx-auto grid gap-6 mt-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;