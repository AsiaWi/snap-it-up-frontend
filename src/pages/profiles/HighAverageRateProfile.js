import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const HighAverageRateProfile = (props) => {
  const { profile } = props;
  const { id, profile_image, owner } = profile;

  return (
    <div className="my-3 d-flex align-items-center">
      <div>
        <Link className="pl-4 ml-4 " to={`/profiles/${id}`}>
          <Avatar
            src={profile_image}
            height={85}
            alt={"highest rated profiles avatar"}
            text={owner}
          />
        </Link>
      </div>
    </div>
  );
};

export default HighAverageRateProfile;
