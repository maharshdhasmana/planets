
import data from "../../data.json";
import SearchResultCard from "./SearchResultCard";

const SearchResult = () => {
  return (
    <div className="flex flex-col gap-4 ">
      {data.planets.map((planet, index) => {
        return (
          <SearchResultCard key={index} planet={planet} />
        );
      })}
    </div>
  );
};

export default SearchResult;
