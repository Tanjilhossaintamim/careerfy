import { useParams } from "react-router-dom";
import { useFetchSingelJobQuery } from "../../redux/features/jobs/jobApi";
import moment from "moment";
import { useAppSelector } from "../../redux/app/hooks";
import { ImSpinner } from "react-icons/im";
import { useApplyJobMutation } from "../../redux/features/appliedJob/appliedJobapi";
import { useEffect } from "react";
import toast from "react-hot-toast";
const JobDetails = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { id } = useParams();
  const { data: job, isError, isLoading } = useFetchSingelJobQuery(id);
  const [
    applyJob,
    { isSuccess, isLoading: jobIsLoading, isError: jobError, error },
  ] = useApplyJobMutation();

  const handelJobapply = () => {
    applyJob({ applicantName: user?.displayName, job: id });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("applied successfully !");
    }
    if (jobError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, jobError]);

  let content = null;
  if (isLoading) content = <div>Loading..</div>;
  if (isError) content = <div>Something wrong !</div>;

  if (job?._id) {
    const {
      photoUrl,
      jobTitle,
      jobCategory,
      salaryRangeTo,
      salaryRangeFrom,
      jobApplicantsNumber,
      applicationDeadline,
      jobDescription,
      userEmail,
    } = job;
    content = (
      <>
        <div className="">
          <img src={photoUrl} alt="" />
        </div>
        <div className="text-color-gray flex flex-col space-y-2">
          <h1 className="text-3xl font-semibold text-[#333]">{jobTitle}</h1>
          <span className="text-color-gray">
            <small className="text-xl font-semibold text-[#333]">
              Category
            </small>{" "}
            - {jobCategory.title}
          </span>
          <h1>
            <span className="text-xl font-semibold text-[#333]">
              Salary Range{" "}
            </span>{" "}
            - &#2547;{salaryRangeFrom}-{salaryRangeTo}
          </h1>
          <span>Total Applicants - {jobApplicantsNumber}</span>
          <h1>
            Deadline - {moment(applicationDeadline).format("DD MMMM YYYY")}
          </h1>
          <p>
            <span className="text-xl font-semibold text-[#333]">
              {" "}
              Job Description
            </span>{" "}
            <br /> {jobDescription}
          </p>
          {userEmail !== user?.email && (
            <button
              disabled={isLoading}
              onClick={handelJobapply}
              className="bg-[#53B427] text-white py-3 rounded flex justify-center items-center"
            >
              {" "}
              {jobIsLoading ? (
                <span className="flex items-center space-x-2">
                  <span>Applying..</span>{" "}
                  <ImSpinner size={20} className="animate-spin" />
                </span>
              ) : (
                " Apply For This Job"
              )}
            </button>
          )}
        </div>
      </>
    );
  }

  return (
    <div className="py-20 bg-[]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {content}
      </div>
    </div>
  );
};

export default JobDetails;
