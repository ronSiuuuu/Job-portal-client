import React, { useContext } from "react";
import { Link, useParams } from "react-router";
import { AuthContext } from "../Utilities/AuthProvider/AuthContext";

const ApplyJob = () => {
    const {id} = useParams();
    const {user} = useContext(AuthContext);
   
    const handleApply = (e)=>{
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const gitHub = form.gitHub.value;
        const resume = form.resume.value;
        const applicationData = {
            id,
           applicant: user.email,
           linkedIn,
           gitHub,
           resume
        }
        
    }
  return (
    <div>
      <form onSubmit={handleApply} >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
          <legend className="fieldset-legend ">Apply for job <Link to={`/job/${id}`}>Details</Link> </legend>

          <label className="label">Linkedin-link</label>
          <input type="url" className="input" placeholder="enter your linkedin link"  name="linkedIn"/>

          <label className="label">GitHub-link</label>
          <input type="url" className="input" placeholder="enter your github link"  name="gitHub"/>

          <label className="label">Resume</label>
          <input type="url" className="input" placeholder="enter your resume link" name="resume" />
           <button type="submit" className="btn btn-primary">apply</button>
        </fieldset>
       
      </form>
    </div>
  );
};

export default ApplyJob;
