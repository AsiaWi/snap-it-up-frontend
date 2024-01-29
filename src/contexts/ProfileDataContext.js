import { createContext, useContext, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";

const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
  });

  /* Handle profile data on rating deletion
     delete the rating with specified id
     fetch profile data for rated_user after deletion
     and update profile data with new details 
     (this should change ratings number and average rating displayed within profile)*/
  const handleDeleteRating = async (id, rated_user) => {
    try {
      await axiosRes.delete(`/ratings/${id}/`);
      const { data } = await axiosReq.get(`/profiles/${rated_user}/`);
      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: { results: [data] },
      }));
    } catch (err) {
      // console.error("Error deleting rating:", err);
    }
  };

  /*Fetch updated profile data for rated_user when submitting rating
    and update profileData state with updated details. This will 
    update ratings number and average rating displayed within profile */
  const handleSubmit = async (rated_user) => {
    try {
      const { data } = await axiosReq.get(`/profiles/${rated_user}/`);
      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: { results: [data] },
      }));
    } catch (err) {
      // console.error("Error:", err);
    }
  };

  /*Fetch updated profile data for rated_user when editing rating
    and update profileData state with updated details. This will 
    update average rating displayed within profile*/
  const handleEditRating = async (rated_user) => {
    try {
      const { data } = await axiosReq.get(`/profiles/${rated_user}/`);
      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: { results: [data] },
      }));
    } catch (err) {
      // console.error("Error editing rating:", err);
    }
  };

  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider
        value={{
          setProfileData,
          handleDeleteRating,
          handleSubmit,
          handleEditRating,
        }}
      >
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};
