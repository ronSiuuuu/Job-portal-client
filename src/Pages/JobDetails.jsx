import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData();
     const {
    _id,
    applicationDeadline,
    company,
    category,
    location,
    jobType,
    title,
    description,
    requirements,
    salaryRange,
    company_logo,
   

  } = job;
    return (
        <div className='w-11/12 mx-auto'>
          <h1>job details of : {title}</h1>
          <p>{company}</p>
          <Link to={`/apply/${_id}`} ><button className='btn btn-primary'>apply now</button></Link>
        </div>
    );
};

export default JobDetails;