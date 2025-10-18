import React from "react";

const NoInsights = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-50 rounded-full mb-6">
          <svg
            className="w-12 h-12 text-indigo-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">No Insights Found</h2>
        <p className="text-white  mb-6 leading-relaxed">
          We couldn't find any insights for now
        </p>

        {/* Suggestions */}
        <div className="bg-indigo-50 rounded-lg p-4 text-left">
          <p className="text-sm font-semibold text-indigo-900 mb-2">Tips:</p>
          <ul className="text-sm text-indigo-700 space-y-1">
            <li>• Try uploading the resume first</li>
            <li>• The file must be a RESUME only</li>
            <li>• Must have some resume related data in your file</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoInsights;
