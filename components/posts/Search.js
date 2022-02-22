import { useState } from "react";

export default function Search({ query, handleLocalSearch }) {
  const [searchQuery, setSearchQuery] = useState(query);

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
    handleLocalSearch(e.target.value);
  };

  return (
    <div className="not-prose relative">
      <input
        type="text"
        className="peer w-full flex-1 rounded-sm border border-zinc-200 bg-zinc-50 py-1 pl-3 pr-10 font-sans font-light focus:border-rose-300 focus:bg-white focus:placeholder-zinc-500 focus:shadow-md focus:outline-none focus:ring-1 focus:ring-rose-400"
        onChange={handleOnChange}
        value={searchQuery}
        placeholder="Search posts..."
      />
      <div className="absolute inset-y-0 right-0 pr-3 pt-[0.55rem] text-xl text-zinc-300 peer-focus:text-zinc-400 md:pt-[0.7rem]">
        <i className="fi fi-rr-search"></i>
      </div>
    </div>
  );
}
