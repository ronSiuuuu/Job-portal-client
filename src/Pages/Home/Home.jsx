import React from "react";
import Banner from "../../Components/Banner/Banner";
import HotJobs from "../../Components/HotJobs/HotJobs";
import { useLoaderData } from "react-router";

const Home = () => {
  const jobs = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
        {jobs.map((job) => (
          <HotJobs key={job._id} job={job}></HotJobs>
        ))}
      </div>
    </div>
  );
};

export default Home;
