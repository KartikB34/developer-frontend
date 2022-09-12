import React from "react";

const AboutUS = () => {
  return (
    <div className="flex items-center justify-center h-[91vh]">
      <div className="flex flex-col items-center justify-center text-gray-800 p-4 max-w-7xl m-auto">
        <div className="text-2xl font-bold tracking-wider underline underline-offset-4">
          About Us
        </div>
        <div className="mt-5 text-lg text-center px-20">
          <p>
            We are an ecosystem for Blockchain Developers where they can learn
            Blockchain development, can solve their problems using our community
            and can get the jobs using our job portal in Blockchain space
            startups and MNCs.
          </p>
          <p>
            If you have any query regrading Site, Advertisement and any other
            issue, please feel free to contact at{" "}
            <b className="tracking-wider text-cyan-600">support@cryptonaukri.com</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;