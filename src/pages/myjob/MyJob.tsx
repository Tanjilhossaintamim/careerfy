import { useState } from "react";
import { useGetMyJobsQuery } from "../../redux/features/jobs/jobApi";
import JobCard from "../../components/jobCard/JobCard";
import Filter from "../alljob/components/Filter";
interface JobInterface {
  _id: string;
  photoUrl: string;
  jobTitle: string;
  salaryRangeTo: string;
  salaryRangeFrom: string;
  jobApplicantsNumber: number;
  jobPostingDate: string;
  jobCategory: {
    title: string;
  };
}
const MyJob = () => {
  const [filter, setfilter] = useState("");

  const {
    data: jobs,
    isError,
    isLoading,
  } = useGetMyJobsQuery({ category: filter, title: "" });
  let content = null;
  if (isLoading) content = <div>Loading..</div>;
  if (isError) content = <div>Something wrong !</div>;
  if (jobs?.length == 0) content = <div>No Data Found !</div>;
  if (jobs?.length > 0)
    content = jobs.map((job: JobInterface) => (
      <JobCard key={job._id} job={job} showDeleteBtn={true} />
    ));
  return (
    <div>
      <div className="max-w-5xl mx-auto my-10 px-4 lg:px-0">
        <div className="mb-10 flex justify-between flex-wrap items-center">
          <Filter onchange={setfilter} />
        </div>
        <div className="flex items-center flex-wrap gap-6">{content}</div>
      </div>
    </div>
  );
};

export default MyJob;
