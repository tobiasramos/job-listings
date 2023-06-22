import data from '../data/data.json'

const Job = () => {

    return (
        <div>
            {data.map((job) => (
                <div key={job.id}>
                    <div>
                        <h3>{job.company}</h3>
                        <p>{job.position}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Job
