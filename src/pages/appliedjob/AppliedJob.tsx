import { Card, Typography } from "@material-tailwind/react";
import { useFetchAppliedJobsQuery } from "../../redux/features/appliedJob/appliedJobapi";
import { Link } from "react-router-dom";

const AppliedJob = () => {
  const { data } = useFetchAppliedJobsQuery({});

  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Job Title
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Applicant Name
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Applicant Email
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Details
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map(
                (job: {
                  _id: "string";
                  applicantName: string;
                  applicantEmail: string;
                  job: { jobTitle: string; applicantName: string; _id: string };
                }) => (
                  <tr key={job?._id}>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {job.job?.jobTitle}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {job.applicantName}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {job.applicantEmail}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Link to={`/jobs/${job.job._id}`}>
                        <button className="px-4 py-1 bg-color-sky text-white rounded">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default AppliedJob;
