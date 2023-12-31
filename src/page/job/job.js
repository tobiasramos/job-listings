import React, { useState } from 'react';
import data from '../../data/data.json'
import './job.css'
import Search from '../../components/search/search';

const Job = () => {
    const [searchResults, setSearchResults] = useState(data)

    const handleSearch = (searchLanguages) => {
        const results = data.filter((job) =>
            job.position.toLowerCase().includes(searchLanguages.toLowerCase()) ||
            job.languages.join(" ").toLowerCase().includes(searchLanguages.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <div className='job-container'>
            <Search handleSearch={handleSearch} />
            {searchResults.map((job) => (
                <div key={job.id} className='card'>
                    <div className='profile'>
                        <img src={job.logo} alt={`Logo da ${job.company}`} />

                        <div className='company-details'>
                            <div>
                                <span className='company'>{job.company}</span>
                                <span className='new'>{job.new && <span>New</span>}</span>
                                <span className='featured'>{job.featured && <span>Featured</span>}</span>
                            </div>

                            <span className='position'>{job.position}</span>
                            
                            <div className='vacancy-details'>
                                <span>{job.postedAt}</span>
                                <span>{job.contract}</span>
                                <span>{job.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row"></div>
                    <div className='languages'>
                        <ul>
                            <li>
                                <span> {job.role}</span>
                                <span>{job.level}</span>
                                <span>{job.languages.join(" ")}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Job
