import {Button, Input} from "@nextui-org/react";
import { useState } from "react";
import {telescope} from "../Assets/index.js"
const SearchBar = () => {
    const [search,setSearch]=useState("")
  return (
    <div className="flex justify-center items-center mt-5 w-full gap-4">
        <Input className="rounded-r-none" size="sm" placeholder="Search Planets" value={search} variant="bordered" onChange={(e)=>setSearch(e.target.value)}/>
        <Button isIconOnly className="rounded-l-none">
            <img src={telescope} alt="telescope" width={30} height={30}/>
        </Button>
    </div>
  )
}

export default SearchBar