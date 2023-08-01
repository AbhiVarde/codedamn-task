import { BiChevronDown } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { BsDot, BsThreeDots } from "react-icons/bs";
import Img from "../images/blacklogo.jpg";
import playgrounds from "../Data/Portfolio";
import projects from "../Data/Projects";

const PlaygroundItem = ({ title, languages, sharedWith, timeAgo }: any) => (
  <div className="p-4 flex gap-2 hover:bg-purple-50 hover:border-2 rounded-md hover:border-purple-600 cursor-pointer">
    <FaHtml5 className="text-3xl mt-1" />
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="flex text-sm items-center mb-2">
        <p>{languages}</p>
        <BsDot />
        <p>{timeAgo}</p>
      </div>
      <div className="flex gap-1">
        <div className="rounded-full overflow-hidden w-7 h-6 bg-gray-300"></div>
        <p className="text-sm">
          Shared with{" "}
          <span className="text-gray-800 font-semibold">{sharedWith}</span> ..
          +7 more
        </p>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <div className="m-2 md:m-4 flex justify-center">
      <div className="w-[630px]">
        <div className="mx-10 my-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <nav className="flex justify-between">
              <h3 className="text-lg font-semibold">Playgrounds</h3>
              <p className="flex items-center gap-1 text-gray-500 text-sm">
                See all <BiChevronDown />
              </p>
            </nav>
            {playgrounds.map((playground) => (
              <PlaygroundItem key={playground.id} {...playground} />
            ))}
          </div>
          <div>
            <nav className="flex justify-between">
              <h3 className="text-lg font-semibold">Projects</h3>
              <p className="flex items-center gap-1 text-gray-500 text-sm">
                See all <BiChevronDown />
              </p>
            </nav>
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-4 gap-2 hover:bg-purple-50 hover:border-2 rounded-md hover:border-purple-600 cursor-pointer"
              >
                <img src={Img} alt="img" className="h-44 w-64 mb-2" />
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{project.title}</h3>
                    <BsThreeDots className="text-sm text-gray-500" />
                  </div>
                  <div className="flex text-sm items-center mb-2">
                    <p>{project.languages}</p>
                    <BsDot />
                    <p>{project.timeAgo}</p>
                  </div>
                  <div className="flex gap-1">
                    <div className="rounded-full overflow-hidden w-6 h-6 bg-gray-300"></div>
                    <p className="text-sm">{`${project.contributors} contributors`}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button type="button" className="py-2 px-4 bg-gray-100 rounded-lg">
            Cancel
          </button>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-700 text-white rounded-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
