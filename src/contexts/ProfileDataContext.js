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

  const handleDeleteRating = async (id, rated_user) => {
    {/** Allows to update profile data on 'rating' delete, to display correct
     average rating and ratings number within profile, without using page refresh */}
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

  const handleSubmit = async (rated_user) => {
    {/*Allows to update profile data within the page on rating submit, 
      without using page refresh, to correcty display average rating and 
      ratings received number*/}
    try {
      const { data } = await axiosReq.get(`/profiles/${rated_user}/`);
      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: { results: [data] },
      }));
    } catch (err) {
      // console.error("Error deleting rating:", err);
    }
  };

  const handleEditRating = async (rated_user) => {
    {/*Allows to update profile data without using refresh when user edits rating,
      to render correct average_rating*/}
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
