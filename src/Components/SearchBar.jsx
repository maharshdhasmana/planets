import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { telescope } from "../Assets/index.js";
import { useSelector, useDispatch } from "react-redux";
const SearchBar = () => {
  const dispatch = useDispatch();
  const planets = useSelector((store) => store.planets);
  const [search, setSearch] = useState("");
  const handleClick = () => {
    if (search == "") {
      return;
    }
    let filteredPlanets = planets.filter((planet) =>
      planet.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filteredPlanets);
    dispatch({ type: "PLANETS", payload: filteredPlanets });
  };
  return (
    <div className="flex justify-center items-center mt-5 w-full">
      <Input
        className="rounded-r-none"
        size="sm"
        onKeyDown={(e) => (e.key == "Enter" ? handleClick() : null)}
        placeholder="Search Planets"
        value={search}
        variant="bordered"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        size="lg"
        onClick={handleClick}
        isIconOnly
        className="rounded-l-none"
      >
        <img src={telescope} alt="telescope" width={30} height={30} />
      </Button>
    </div>
  );
};

export default SearchBar;
