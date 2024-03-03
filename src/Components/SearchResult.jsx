/* eslint-disable react-hooks/exhaustive-deps */
import SearchResultCard from "./SearchResultCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const SearchResult = () => {
  const navigate = useNavigate();
  let planets = useSelector((store) => store.planets);
  let filter = useSelector((store) => store.filters);
  const dispatch = useDispatch();
  let location = useLocation();
  console.log(location);
  useEffect(() => {
    getPlanets();
  }, [dispatch]);

  useEffect(() => {
    getPlanets();
  }, [filter]);

  const getPlanets = () => {
    const url =
      location.search != ""
        ? `http://localhost:8000/planets${location.search}`
        : `http://localhost:8000/planets?color=${filter.color}&shape=${filter.shape}&size=${filter.size}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "PLANETS", payload: data }));
    navigate("/");
  };
  return (
    <div className="flex flex-col gap-4 ">
      {planets.map((planet, index) => {
        return <SearchResultCard key={index} planet={planet} />;
      })}
    </div>
  );
};
export default SearchResult;
