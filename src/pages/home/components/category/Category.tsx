import Heading from "../../../../components/Heading/Heading";
import { Tabs, TabsHeader, Tab, TabsBody } from "@material-tailwind/react";
import { useGetCategoryQuery } from "../../../../redux/features/category/categoryApi";
import { useGetAllJobsQuery } from "../../../../redux/features/jobs/jobApi";
import { useState } from "react";
import JobCard from "../../../../components/jobCard/JobCard";

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
const Category = () => {
  const [categoryValue, setCategoryValue] = useState("on-site");

  const { data: categories } = useGetCategoryQuery({});
  const { data: jobs } = useGetAllJobsQuery({
    category: categoryValue,
    title: "",
  });

  const handelFetchJobs = (category: string) => {
    setCategoryValue(category);
  };

  return (
    <div className="py-10">
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <Heading
          title="JOB CATEGORIES"
          desc="A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be."
        />
        <div className="my-6">
          {categories?.length > 0 && (
            <Tabs id="custom-animation" value="on-site">
              <TabsHeader>
                {categories?.length > 0 &&
                  categories.map((tab: { title: string; _id: string }) => (
                    <Tab
                      key={tab._id}
                      value={tab.title}
                      onClick={() => handelFetchJobs(tab.title)}
                      className="capitalize"
                    >
                      {tab.title}
                    </Tab>
                  ))}
              </TabsHeader>

              {/* tab body */}
              <TabsBody>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
                  {jobs?.length > 0 &&
                    jobs.map((job: JobInterface) => (
                      <JobCard key={job._id} job={job} showDeleteBtn={false} />
                    ))}
                </div>
              </TabsBody>
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
