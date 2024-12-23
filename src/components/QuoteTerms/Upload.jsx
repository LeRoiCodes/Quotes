// import React from "react";
import file from '../../assets/uploadDoc.svg'

const Upload = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
      {/* Upload Icon */}
      <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
        <img src={file} />
      </div>

      {/* Instruction Text */}
      <p className="mt-4 text-sm text-gray-600">
        <span className="text-blue-500 cursor-pointer hover:underline">
          Click to upload
        </span>{" "}
        or drag and drop
      </p>
      <p className="text-xs text-gray-500">
        SVG, PNG, JPG, or GIF (max. 800x400px)
      </p>

      {/* Divider */}
      <div className="flex items-center my-4 w-full">
        <hr className="w-full border-gray-300" />
        <span className="px-3 text-xs text-gray-500">OR</span>
        <hr className="w-full border-gray-300" />
      </div>

      {/* Browse Button */}
      <button
        type="button"
        className="px-4 py-2 text-sm text-blue-500 bg-white border border-blue-500 rounded-lg hover:bg-blue-50 focus:ring focus:ring-blue-100"
      >
        Browse Files
      </button>
    </div>
  );
};

export default Upload;
