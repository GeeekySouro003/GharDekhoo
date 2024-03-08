import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'

const SearchBar = () => {
  return (
    <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={32}/>
                    <input type="text"/>
                    <button className="btn">
                        Search</button>         
                    </div>
  )
}

export default SearchBar