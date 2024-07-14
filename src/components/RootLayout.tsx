import React from "react";
import BottomNavigation from "./BottomNavigation";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <main>
        {children}
        <BottomNavigation />
      </main>
    </>
  );
};

export default RootLayout;
