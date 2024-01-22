import React from "react";
import notFound from "../assets/icons8-unknown-results-96.png";
import Assets from "../components/Assets";

const PageNotFound = () => {
  return (
    <div>
      <Assets
        src={notFound}
        message={`Ooops the page you're looking for doesn't exist`}
      />
    </div>
  );
};

export default PageNotFound;
