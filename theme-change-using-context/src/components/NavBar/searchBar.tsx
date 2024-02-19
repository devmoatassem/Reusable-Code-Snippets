import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 border border-secondaryText rounded-md px-3 py-1.5 text-sm w-96">
      <i className="fi fi-rr-search text-secondaryText text-xs mt-0.5"></i>
      <input
        type="text"
        className="bg-transparent outline-none placeholder:text-secondaryText w-full"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar