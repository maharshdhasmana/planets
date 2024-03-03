const initstate = {
  planets: [],
  filters: { color: "", shape: "", size: "" },
};
const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case "PLANETS":
      return { ...state, planets: payload };
    case "FILTERS":
      return { ...state, filters: payload };
    default:
      return state;
  }
};
export default reducer;
