import { useState, useEffect } from "react";
import { useGetCategoryQuery } from "../../redux/features/category/categoryApi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../redux/app/hooks";
import { usePostJobMutation } from "../../redux/features/jobs/jobApi";
import { BiLoader } from "react-icons/bi";
import toast from "react-hot-toast";

type Input = {
  title: string;
  photo: string;
  description: string;
  category: string;
  start: number;
  end: number;
};
interface JobData {
  photoUrl: string;
  userName: string;
  jobTitle: string;
  jobCategory: string;
  jobDescription: string;
  salaryRangeTo: number;
  salaryRangeFrom: number;
  applicationDeadline: Date;
}
const Addjob = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { data: categories } = useGetCategoryQuery(undefined);
  const [postJob, { isLoading, isError, isSuccess, error, data: job }] =
    usePostJobMutation();

  const [endDate, setEndDate] = useState<Date>(new Date());
  const { register, handleSubmit, reset } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => {
    const { photo, title, description, category, start, end } = data;
    const jobData: JobData = {
      photoUrl: photo,
      userName: user?.displayName,
      jobTitle: title,
      jobCategory: category,
      jobDescription: description,
      salaryRangeTo: parseInt(start),
      salaryRangeFrom: parseInt(end),
      applicationDeadline: endDate,
    };
    postJob(jobData);
  };
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess && job?._id) {
      toast.success("job added successfully !");
      reset();
    }
  }, [isError, isSuccess]);
  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Add A Job</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="full_name">Job Title</label>
                      <input
                        type="text"
                        {...register("title")}
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        required
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Image Url</label>
                      <input
                        type="url"
                        {...register("photo")}
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        required
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="address">Job Description</label>
                      <input
                        type="text"
                        {...register("description")}
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">Category</label>
                      <select
                        required
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("category")}
                      >
                        <option hidden value="">
                          Select category
                        </option>
                        {categories?.length > 0 &&
                          categories.map(
                            (category: { _id: string; title: string }) => (
                              <option key={category._id} value={category._id}>
                                {category.title}
                              </option>
                            )
                          )}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="country">Salary Range Start</label>
                      <div className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                        <input
                          type="number"
                          minLength={5}
                          {...register("start")}
                          id="country"
                          placeholder="50000"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="state">Salary Range End</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          type="number"
                          {...register("end")}
                          id="state"
                          placeholder="10000"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          minLength={5}
                          required
                        />
                      </div>
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Dadeline</label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date: Date) => setEndDate(date)}
                        className=" h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          disabled={isLoading}
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
                        >
                          {isLoading ? (
                            <BiLoader className="animate-spin" size={24} />
                          ) : (
                            "Add Job"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addjob;
