import React from 'react'

const Search = ({searchTerm, handleSearchTerm, handleOnchangeSearch}) => {
   
  return (
    <form id="searchBar" onSubmit={handleSearchTerm}>
    <span>
    <input 
    type="search" 
    id="searchInput" 
    placeholder="Search expense"
    value={searchTerm}
    onChange={handleOnchangeSearch}
    /></span>
    <svg 
    onClick={handleSearchTerm}
    xmlns="http://www.w3.org/2000/svg"
     height="25px" 
     viewBox="0 0 512 512" 
     fill="white">
    <path d="M500.3 443.7L384.1 327.6C412.6 290.3 429 243.5 429 
    192 429 86 343 0 237 0S45 86 45 192s86 192 192 192c51.5 0 
    98.3-16.4 135.6-44.9l116.1 116.1c6.3 6.3 16.4 6.3 
    22.6 0l22.6-22.6c6.3-6.2 6.3-16.4 0-22.6zM237 
    320c-70.7 0-128-57.3-128-128S166.3 64 237 
    64s128 57.3 128 128-57.3 128-128 128z"/>
    </svg>

   </form>
  )
}

export default Search