import { useState } from "react";

const Profile = () => {
  const [displayName, setDisplayName] = useState("");
  const [about, setAbout] = useState("");
  const [profession, setProfession] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("male");
  const [showFollowersFollowing, setShowFollowersFollowing] = useState(true);
  const [showXP, setShowXP] = useState(true);
  const [showAchievementBadges, setShowAchievementBadges] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleDeleteClick = () => {
    setSelectedFile(null);
  };

  const handleSaveChanges = (e: any) => {
    e.preventDefault();
    console.log({
      displayName,
      about,
      profession,
      dateOfBirth,
      gender,
      showFollowersFollowing,
      showXP,
      showAchievementBadges,
    });
  };

  return (
    <div className="m-2 md:m-4 flex justify-center">
      <div className="max-w-3xl">
        <div className="flex gap-4 md:gap-6 lg:gap-10 mb-4">
          <div className="rounded-full overflow-hidden w-16 md:w-20 h-16 md:h-20 bg-gray-300"></div>
          <div className="flex items-center gap-4">
            <div>
              <button
                className="py-2 px-4 bg-blue-700 text-white rounded-lg hover:border"
                onClick={() => {
                  const fileInput = document.getElementById("fileInput");
                  if (fileInput) {
                    fileInput.click();
                  }
                }}
              >
                Upload New Photo
              </button>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {selectedFile && <p>Selected file: {selectedFile.name}</p>}
            </div>
            <button
              className="py-2 px-4 bg-gray-100 rounded-lg hover:border"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </div>
        <form onSubmit={handleSaveChanges}>
          <label className="font-semibold">Display Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full mt-2 mb-4 py-2 px-4 border outline-none rounded-lg"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />

          <label className="font-semibold">About</label>
          <input
            type="text"
            placeholder="About"
            className="w-full mt-2 mb-4 py-2 px-4 border outline-none rounded-lg"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />

          <label className="font-semibold">Profession</label>
          <input
            type="text"
            placeholder="Enter Your Profession"
            className="w-full mt-2 mb-4 py-2 px-4 border outline-none rounded-lg"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />

          <label className="font-semibold">Date of Birth</label>
          <input
            type="date"
            placeholder="DD/MM/YY"
            className="w-full mt-2 mb-4 py-2 px-4 border outline-none rounded-lg"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />

          <label className="font-semibold">Gender</label>
          <select
            className="w-full mt-2 mb-4 py-2 px-4 border outline-none rounded-lg"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <div>
            <h2 className="font-semibold">Section visibility</h2>
            <p className="mt-1">
              Select which sections and content should show on your profile
              page.
            </p>

            <div className="mx-6 my-4">
              {[
                {
                  title: "Followers and following",
                  description:
                    "Shows your followers and the users you follow on codedamn",
                  value: showFollowersFollowing,
                  setValue: setShowFollowersFollowing,
                },
                {
                  title: "XP",
                  description: "Shows the XP you have earned",
                  value: showXP,
                  setValue: setShowXP,
                },
                {
                  title: "Achievement badges",
                  description: "Shows your relative percentile and proficiency",
                  value: showAchievementBadges,
                  setValue: setShowAchievementBadges,
                },
              ].map((section) => (
                <div
                  key={section.title}
                  className="flex justify-between items-center"
                >
                  <div className="mb-4">
                    <h2 className="font-semibold">{section.title}</h2>
                    <p className="mx-2 md:mx-0">{section.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={section.value}
                      onChange={() => section.setValue(!section.value)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="py-2 px-4 bg-gray-100 rounded-lg hover:border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-700 text-white rounded-lg hover:border"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
