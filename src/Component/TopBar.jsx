import React from 'react';
// import banner from "../assests/1.png";

const TopBar = () => {
  return (
    <div className='search_section'>
      <div className="top">
        <div className="search">
          <i className="fa-solid fa-magnifying-glass fa-beat fa-2xs"></i>
          <input
            type="text"
            name="text"
            placeholder="Search for posts, publications, books, authors…"
          />
        </div>
      </div>
    </div>
  )
}

export default TopBar