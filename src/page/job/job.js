import React from 'react';
import data from '../../data/data.json'
import './job.css'
import Search from '../../components/search/search';
const Job = () => {

    return (
        <div className='container'>
            <Search />
            {data.map((job) => (
                <div key={job.id} className='card'>
                    <div className='profile'>
                        <img src={job.logo} alt={`Logo da ${job.company}`} />

                        <div className='company-details'>
                            <span>{job.company}</span>
                            <span>{job.new}</span>
                            <span>{job.featured}</span><br></br>
                            <span>{job.position}</span>
                            <div className='vacancy-details'>
                                <span>{job.postedAt}</span>
                                <span>{job.contract}</span>
                                <span>{job.location}</span>
                            </div>
                        </div>
                    </div>

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
