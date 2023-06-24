import React, { useState } from 'react'
import './search.css'

const Search = ({ handleSearch }) => {
    const [searchLanguages, setSearchLinguages] = useState('')

    const handleChange = (event) => {
        const searchLanguages = event.target.value
        setSearchLinguages(searchLanguages)
        handleSearch(searchLanguages)
    }


    return (
        <div className="search-container">
            <input type='text' value={searchLanguages} onChange={handleChange} placeholder="Pesquese por linguagens" />
        </div>
    )
}

export default Search