import { AiOutlineChrome } from "react-icons/ai";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const tabs = ["Profile", "Social", "Portfolio", "Resume"];

  return (
    <aside className="my-4 w-full md:w-64 md:h-52 border rounded-lg">
      <div className="flex flex-row md:flex-col">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`w-full md:w-auto p-1 sm:px-4 sm:py-2 md:py-3 text-start text-gray-600 flex items-center gap-1 ${
              activeTab === tab ? "text-black border-l-4 border-black" : ""
            }`}
          >
            <AiOutlineChrome />
            {tab}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
