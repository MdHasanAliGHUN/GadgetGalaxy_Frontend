import React from "react";
import { FadeLoader } from "react-spinners";

const LoadingSpinner = ({ color = "#000", loading = true, override = {} }) => {
  return (
    <div className="flex justify-center items-center">
      <FadeLoader
        color={color} // Color is now set to a default value
        loading={loading} // Default loading is true
        cssOverride={override} // Override any custom styles if needed
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpinner;
