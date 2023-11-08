import moment from "moment";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useApplyJobMutation } from "../../redux/features/appliedJob/appliedJobapi";
import { useAppSelector } from "../../redux/app/hooks";
interface JobInterface {
  job: {
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
  };
  showDeleteBtn: boolean;
}
const JobCard = ({ job, showDeleteBtn }: JobInterface) => {

  const {
    _id,
    photoUrl,
    jobTitle,
    jobCategory,
    salaryRangeTo,
    salaryRangeFrom,
    jobApplicantsNumber,
    jobPostingDate,
  } = job;
  const formatedTime = moment(jobPostingDate, "YYYYMMDD").fromNow();
  let color = "";
  if (jobCategory.title == "on-site") color = "#F1630D";
  if (jobCategory.title == "hybrid") color = "#53B427";
  if (jobCategory.title == "remote") color = "#186FC9";
  if (jobCategory.title == "part-time") color = "#009CDF";

  
  return (
    <div className="max-w-[500px] border border-color-gray-1 flex items-center">
      <div className="w-1/4 relative border-r border-color-gray-1 flex justify-center items-center">
        <img src={photoUrl} alt="" className="w-full object-cover" />
      </div>
      <div className="w-full">
        <div className="p-2 flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="text-[#333] font-semibold text-lg">{jobTitle}</h1>
            {showDeleteBtn && (
              <span className="text-xl text-red-700 cursor-pointer">
                <RxCross2 />
              </span>
            )}
          </div>
          <span
            className={`p-1 inline-block w-fit text-sm text-white rounded`}
            style={{ backgroundColor: color }}
          >
            {jobCategory.title}
          </span>
          <div className="flex items-center justify-between text-xs text-color-gray">
            <h1 className="text-xs text-color-gray">
              Published {formatedTime}
            </h1>
            <span>Applicants {jobApplicantsNumber}</span>
          </div>
          <div className="flex items-center py-3 justify-between border-t border-color-gray-1">
            <h1 className="text-xs text-color-gray flex-grow">
              Salary range &#2547;{salaryRangeFrom} - &#2547;{salaryRangeTo}
            </h1>
            <Link to={`/jobs/${_id}`}>
              <button className="bg-[#186FC9] text-white px-2 py-1 rounded">
                view details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
