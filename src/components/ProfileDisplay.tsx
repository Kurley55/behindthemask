import { useState } from "react";

interface ProfileElementsProps {
  user: {
    profilepictureurl?: string;
    bannerurl?: string;
    username: string;
    aboutme?: string;
    age?: number;
    country?: string;
    socials: string[];
  };
  onSelectItem: (socials: string) => void;
}
function ProfileDisplay({ user, onSelectItem }: ProfileElementsProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <div className="text-center p-4">
        <div
          className="position-relative w-100"
          style={{ marginBottom: "60px" }}
        >
          <img
            src={user.bannerurl}
            className="img-thumbnail w-100"
            style={{ maxHeight: "240px", objectFit: "cover" }}
            alt="Banner Image"
          ></img>

          <img
            src={user.profilepictureurl}
            className="position-absolute rounded-circle object-fit-cover border border-4 border-black"
            style={{
              width: "120px",
              height: "120px",
              bottom: "0px",
              left: "30px",
              transform: "translateY(50%)",
              zIndex: "2",
            }}
            alt="Profile Picture Image"
          ></img>
        </div>
        <h1>{user.username}</h1>
      </div>
      <h2>About Me</h2>
      <p>{user.aboutme}</p>
      <h4>{user.age}</h4>
      <h4>Country: {user.country}</h4>
      <h2>Socials</h2>

      {user.socials.length === 0 && <p>No socials linked yet.</p>}
      <ul className="list-group">
        {user.socials.map(
          (
            socials,
            index, //socials are mapped in the order of the item name, then its index
          ) => (
            <li
              className={
                selectedIndex === index //If selectedIndex is equal to the index of a list item, it will be true, or else it's false
                  ? "list-group-item active" //True (blue/selected)
                  : "list-group-item" //False (default)
              }
              key={socials}
              onClick={() => {
                setSelectedIndex(index); //On Click we then set our selected index to the index of the list item
                onSelectItem(socials);
              }}
            >
              {user.socials}
            </li>
          ),
        )}
      </ul>
    </>
  );
}

export default ProfileDisplay;
