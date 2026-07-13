import React from "react";

interface ProfileElementsProps {
  profilepictureurl?: string;
  bannerurl?: string;
  username: string;
  aboutme?: string;
  age?: string;
  country?: string;
  socials?: string[];
}
function ProfileDisplay({
  profilepictureurl,
  bannerurl,
  username,
  aboutme,
  age,
  country,
  socials,
}: ProfileElementsProps) {
  return (
    <>
      <img src={bannerurl} className="img-thumbnail" alt="Banner Image"></img>
      <img
        src={profilepictureurl}
        className="img-thumbnail"
        alt="Profile Picture Image"
      ></img>
      <h1>{username}</h1>
      <h2>About Me</h2>
      <p>{aboutme}</p>
      <h4>{age}</h4>
      <h4>Country: {country}</h4>
      <h2></h2>
    </>
  );
}

export default ProfileDisplay;
