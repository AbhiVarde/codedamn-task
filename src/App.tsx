import React, { useState } from "react";
import NavigationBar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Profile from "./Components/Profile";
import Social from "./Components/Social";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Profile");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="h-screen px-2 sm:px-4 md:px-8 lg:px-10 py-4">
      <NavigationBar />
      <div className="flex flex-col md:flex-row">
        <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
        <main className="flex-grow justify-center ">
          {activeTab === "Profile" && <Profile />}
          {activeTab === "Social" && <Social />}
          {activeTab === "Portfolio" && <Portfolio />}
          {activeTab === "Resume" && <Resume />}
        </main>
      </div>
    </div>
  );
};

export default App;
