import { useState } from "react";
const Filters = () => {
  const [selected, setSelected] = useState({ color: [], shape: [], size: [] });
  const handleChange = (e) => {
    setSelected((prevOptions) => {
      let updatedOptions = { ...prevOptions };
      const index = updatedOptions[e.target.name].indexOf(e.target.value);
      if (index !== -1) {
        updatedOptions[e.target.name].splice(index, 1);
      } else {
        updatedOptions[e.target.name].push(e.target.value);
      }
      return updatedOptions;
    });
  };
  return (
    <div className="flex lg:flex-col justify-center gap-4 select-none mb-4 ">
      <div className="flex flex-col gap-2 w-full">
        <h3>Filter By Color</h3>
        <ul className="lg:w-48 w-full text-sm sm:flex lg:flex-col font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
            <div className="flex items-center ps-3">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                checked={selected.color.includes(
                  "90f28316-7f0d-4cf2-828e-f0dbbcc110b9"
                )}
                type="checkbox"
                name="color"
                value="90f28316-7f0d-4cf2-828e-f0dbbcc110b9"
                onChange={handleChange}
              />
              <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
                Red
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
          <div className="flex items-center ps-3">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                checked={selected.color.includes(
                  "7526a44b-32d3-4644-b28d-8eb57e5fada6"
                )}
                type="checkbox"
                name="color"
                value="7526a44b-32d3-4644-b28d-8eb57e5fada6"
                onChange={handleChange}
              />
              <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
                Blue
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 rounded-t-lg ">
          <div className="flex items-center ps-3">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                checked={selected.color.includes(
                  "fe228419-f7df-49d2-a4cd-43e625b26075"
                )}
                type="checkbox"
                name="color"
                value="fe228419-f7df-49d2-a4cd-43e625b26075"
                onChange={handleChange}
              />
              <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
                Green
              </label>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <h3>Filter By Shape</h3>
        <ul className="lg:w-48 w-full text-sm sm:flex lg:flex-col font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
          <div className="flex items-center ps-3">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                checked={selected.shape.includes(
                  "f77621c4-5ee4-4c0c-9db3-d791a87b85e2"
                )}
                type="checkbox"
                name="shape"
                value="f77621c4-5ee4-4c0c-9db3-d791a87b85e2"
                onChange={handleChange}
              />
              <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
                Oval
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
          <div className="flex items-center ps-3">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                checked={selected.shape.includes(
                  "4aaaf39b-eccb-46d6-b4be-2e72a911c724"
                )}
                type="checkbox"
                name="shape"
                value="4aaaf39b-eccb-46d6-b4be-2e72a911c724"
                onChange={handleChange}
              />
              <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
                Round
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h3>Filter By Size</h3>
        <ul className="lg:w-48 w-full text-sm sm:flex lg:flex-col font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
          <div className="flex items-center ps-3">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                checked={selected.size.includes(
                  "3cc158c7-eff6-4152-afa3-50d9487584c3"
                )}
                type="checkbox"
                name="size"
                value="3cc158c7-eff6-4152-afa3-50d9487584c3"
                onChange={handleChange}
              />
              <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
                Small
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
          <div className="flex items-center ps-3">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                checked={selected.size.includes(
                  "96d37388-6ca9-4aba-bc2a-dafeb082fbd9"
                )}
                type="checkbox"
                name="size"
                value="96d37388-6ca9-4aba-bc2a-dafeb082fbd9"
                onChange={handleChange}
              />
              <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
                Medium
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
          <div className="flex items-center ps-3">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                checked={selected.size.includes(
                  "65f33b82-48dc-4265-88cb-f4f467e5acba"
                )}
                type="checkbox"
                name="size"
                value="65f33b82-48dc-4265-88cb-f4f467e5acba"
                onChange={handleChange}
              />
              <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
                Large
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
