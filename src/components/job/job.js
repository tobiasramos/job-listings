import data from '../data/data.json'
import './job.css'
const Job = () => {

    return (
        <div className='container'>
            {data.map((job) => (
                <div key={job.id} className='card'>

                    <div className='profile'>
                        <img src={job.logo} />

                        <div className='user-details'>
                            <span>{job.company}</span> <br></br>
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
                              {job.role} {job.level} {job.languages}
                            </li>
                        </ul>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Job
