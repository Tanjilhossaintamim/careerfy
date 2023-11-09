const Hero = () => {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 place-content-center">
        <div>
          <h1 className="text-xl text-[#333] font-semibold">
            MILLIONS OF JOBS. FIND THE ONE THAT’S RIGHT FOR YOU.
          </h1>
          <p className="text-color-gray text-sm mt-3">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
            The right job is out there.
          </p>
          <button className="px-4 py-2 bg-color-sky text-white rounded mt-3">
            Search Jobs
          </button>
        </div>
        <div>
          <img
            src="https://careerfy.net/demo/wp-content/uploads/parallex-thumb-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
