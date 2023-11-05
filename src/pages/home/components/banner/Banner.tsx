import { motion } from "framer-motion";
import bannerImg from "../../../../assets/banner-bg.jpg";
import { BsSearch } from "react-icons/bs";

const Banner = () => {
  return (
    <div
      className="h-[550px] grid place-content-center"
      style={{
        background: `linear-gradient(0deg, rgba(30, 49, 66, 0.75), rgba(30, 49, 66, 0.76)),url(${bannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 ,delay:0.2,type:'just'}}
        className="text-center"
      >
        <h1 className="text-4xl text-center font-semibold text-white">
          Aim Higher. Reach Farther. Dream Bigger.
        </h1>
        <p className="text-base text-white font-medium max-w-xl mx-auto mt-4">
          A better career is out there. We'll help you find it. We're your first
          step to becoming everything you want to be.
        </p>
        <form action="" className="mt-5">
          <div className="max-w-md h-12 mx-auto flex items-center px-4 lg:px-0">
            <input
              type="text"
              name="search"
              placeholder="Search Using Job title..."
              className="w-full h-full outline-none border-none px-2"
            />
            <button
              type="submit"
              className="flex justify-center items-center bg-color-sky text-xl h-full p-4 text-white"
            >
              <BsSearch />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Banner;
