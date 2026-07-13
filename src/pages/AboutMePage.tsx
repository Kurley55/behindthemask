import { useState } from "react";
import CardDisplay from "../components/CardDisplay";
import ProfileDisplay from "../components/ProfileDisplay";

function AboutMePage() {
  const [user, setUser] = useState({
    profilepictureurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAY3F1KOQVAm_SV5Dsx_jB7mSscOOax6Y0ZnnBjJI3Q&s=10!",
    bannerurl:
      "https://i.pinimg.com/736x/b3/b5/2a/b3b52aa5acca3ba0119f2672db7f1822.jpg",
    username: "BeeBeeKay",
    aboutme: "I am a college student with lots to learn",
    age: 19,
    country: "Ireland",
    socials: [],
  });
  return (
    <div className="row">
      <div className="col-6">
        <ProfileDisplay
          user={user}
          onSelectItem={(social) => console.log(social)}
        />
      </div>
      <div className="col-6">
        <CardDisplay />
      </div>
    </div>
  );
}

export default AboutMePage;
