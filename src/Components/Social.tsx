const Social = () => {
  return (
    <div className="m-4 flex justify-center">
      <div className="max-w-3xl">
        <form>
          <label className="font-semibold">GitHub</label>
          <input
            type="url"
            placeholder="Github profile URL"
            className="w-full mt-2 mb-4 py-2 px-4 border outline-none rounded-lg"
          />
          <label className="font-semibold">LinkedIn</label>
          <input
            type="url"
            placeholder="Linkedin profile URL"
            className="w-full  mt-2 mb-4  py-2 px-4 border outline-none rounded-lg"
          />
          <label className="2 font-semibold">Facebook</label>
          <input
            type="url"
            placeholder="Facebook profile URL"
            className="w-full  mt-2 mb-4  py-2 px-4 border outline-none rounded-lg"
          />
          <label className="2 font-semibold">Instagram</label>
          <input
            type="url"
            placeholder="Instagram profile URL"
            className="w-full  mt-2 mb-4  py-2 px-4 border outline-none rounded-lg"
          />
          <label className="2 font-semibold">Dribble</label>
          <input
            type="url"
            placeholder="Dribble profile URL"
            className="w-full  mt-2 mb-4  py-2 px-4 border outline-none rounded-lg"
          />
          <label className="2 font-semibold">Behance</label>
          <input
            type="url"
            placeholder="Behance profile URL"
            className="w-full mt-2 mb-6 py-2 px-4 border outline-none rounded-lg"
          />
          <div className="flex justify-end gap-4">
            <button className="py-2 px-4 bg-gray-100 rounded-lg hover:border">
              Cancel
            </button>
            <button className="py-2 px-4 bg-blue-700 text-white rounded-lg hover:border">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Social;
