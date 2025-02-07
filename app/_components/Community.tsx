import React from "react";

const Community = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="bg-white  p-8 max-w-3xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Our Community</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Join like-minded individuals, share knowledge, and grow together.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
            Join Now
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Networking</h3>
            <p className="text-gray-600">Connect with professionals and peers.</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Resources</h3>
            <p className="text-gray-600">Access valuable learning materials.</p>
          </div>
          <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Events</h3>
            <p className="text-gray-600">Participate in webinars and meetups.</p>
          </div>
          <div className="p-4 bg-red-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Collaboration</h3>
            <p className="text-gray-600">Work on projects with the community.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;