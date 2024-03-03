import SearchBar from "./Components/SearchBar"
import Filters from "./Components/Filters"
import SearchResult from "./Components/SearchResult"
import { Divider } from "@nextui-org/react"
function App() {
 
  return (
    <div className="  h-full w-screen bg-cover bg-center  ">
      <div className="backdrop-blur-md h-full  w-[90%] lg:w-[90vh] mx-auto">
      <div className="flex flex-col lg:justify-center lg:items-center justify-start items-start">
      <SearchBar/>
      <Divider className="my-4" />
      </div>
     <div className="flex flex-col lg:flex-row justify-center ">
     <div className=" w-full lg:w-1/3 h-full"><Filters/></div>
      <Divider className="h-screen" orientation="vertical" />
      <div className="w-full lg:w-10/12   flex justify-center" ><SearchResult/></div>
     </div>
      </div>
    </div>
  )
}

export default App
