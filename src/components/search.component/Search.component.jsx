import React from 'react'
import './search-box.styles.css'

export const Search = ({handleChange, placeholder}) => {
  return (
    <input
      type='search'
      className='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default Search