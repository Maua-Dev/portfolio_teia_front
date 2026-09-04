import { HiArrowDownRight, HiMagnifyingGlass } from "react-icons/hi2";

type filter = {
    clear: string,
    year: string,
    category: string,
}

export default function Filter({clear, year, category}: filter){
    return(
          <div className="flex justify-between h-7 mx-auto mt-5 mb-5 gap-2 rounded-lg px-3"> 
            <div className="px-4 bg-gray-300 rounded-full flex items-center">
              <HiMagnifyingGlass className="text-gray-500" />
              <input placeholder="Search..." className="bg-transparent border-none focus:outline-none" />  
            </div>
            <section className="flex gap-2">
              <div className="px-4 bg-gray-300 text-gray-700 rounded-full"> 
                {clear}</div>
              
              <div className="px-4 bg-gray-300 gap-3 flex items-center text-gray-700 rounded-full">
                 {year} <HiArrowDownRight /></div>
              
              <div className="px-4 bg-gray-300 gap-3 flex items-center text-gray-700 rounded-full">
                 {category} <HiArrowDownRight /></div>
            </section>
          </div>
    );
}