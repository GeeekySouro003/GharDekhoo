import React from 'react'
import './Properties.css'
import SearchBar from '../../Components/SearchBar/SearchBar.jsx'
import useProperties from '../../Hooks/useProperties.jsx'
const Properties = () => {
  
  const {data,isError,isLoading} = useProperties() //Custom hook for properties 
  console.log(data)
  return (
    <div className="wrapper">
        <div className="flexColCenter paddings innerWidth properties-container">
          <SearchBar/>
        </div>
    </div>
  )
}

export default Properties