
import React from "react";
import { CiLocationOn  } from "react-icons/ci";
import { FcMoneyTransfer } from "react-icons/fc";
import { MdOutlineUpdate } from "react-icons/md";
import { Link } from "react-router";
const HotJobs = ({ job }) => {

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
  return <div>
    <div className="shadow-md rounded-md p-4 w-fit space-y-2 hover:translate-y-5 transition-all ease-in-out">
        <div className=" flex gap-4 items-center">
            <img src={company_logo} className="w-12 h-12" alt="" />
            <h1 className="text-2xl font-bold">{company} <br /> <span className="opacity-50 text-sm flex items-center"> <CiLocationOn/>{location}</span></h1>
        </div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="opacity-50 flex gap-2">{jobType} <span className="flex opacity-50 items-center"> <MdOutlineUpdate />Posted on:{applicationDeadline}</span></p>
        <p>{description}</p>
        <div className="flex gap-4 my-5">
            {
                requirements.map(requirement=> <p key={requirement}  className="bg-indigo-200 rounded-md p-1">{requirement}</p> )
            }
        </div>
        <div className="flex justify-between gap-5">
            <h1 className="flex items-center ">
                
           <FcMoneyTransfer />  {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
             
                </h1>
                <Link to={`/job/${_id}`}><button className="btn btn-primary text-white">Apply now</button></Link>
        </div>
        <div>

        </div>

    </div>
  </div>;
};

export default HotJobs;
