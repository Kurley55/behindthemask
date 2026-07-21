import { useState } from "react";
import CardDisplay, {
  type CardGroup,
  type Card,
} from "../components/CardDisplay";
import ProfileDisplay from "../components/ProfileDisplay";
import NavigationBar from "../components/NavigationBar";

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

  const [cardGroups, setCardGroups] = useState<CardGroup[]>([
    {
      type: "Characters",
      cards: [
        {
          id: "1",
          title: "Gon Freecs",
          image:
            "https://avatarfiles.alphacoders.com/367/thumb-350-367029.webp",
          description: "This is Gon Freecs from the hit show Hunter X Hunter",
        },
        {
          id: "2",
          title: "Gon Freecs",
          image:
            "https://avatarfiles.alphacoders.com/367/thumb-350-367029.webp",
          description: "This is Gon Freecs from the hit show Hunter X Hunter",
        },
        {
          id: "3",
          title: "Gon Freecs",
          image:
            "https://avatarfiles.alphacoders.com/367/thumb-350-367029.webp",
          description: "This is Gon Freecs from the hit show Hunter X Hunter",
        },
      ],
    },
    {
      type: "Shows",
      cards: [
        {
          id: "1",
          title: "Invincible",
          image:
            "https://m.media-amazon.com/images/M/MV5BZGM5MmM2ZDAtMzBjNS00NjMxLWE4ZTMtNzFjMWMxYzU2ZThjXkEyXkFqcGc@._V1_.jpg",
          description: "Invincible Amazon",
        },
        {
          id: "2",
          title: "Sopranos",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAv8haoUlLDix6ckzYG2_8xn13JiwUm99TYiaB9SNAaBBiwgOoJJPUymfa9JElPlSy_axJ&s=10",
          description: "Italian Guys",
        },
        {
          id: "3",
          title: "Breaking Bad",
          image:
            "https://m.media-amazon.com/images/M/MV5BOWE4NTc3YmYtNmU2Mi00ZjhkLWE1MTItZmM1M2U1ODU3YjFlXkEyXkFqcGc@._V1_.jpg",
          description: "Waltuh",
        },
      ],
    },
  ]);

  const handleCardClick = (card: Card) => {
    console.log("Card clicked:", card);
  };

  return (
    <div className="container-fluid overflow-hidden">
      <NavigationBar />
      <div className="row">
        <div className="col-6">
          <ProfileDisplay
            user={user}
            onSelectItem={(social) => console.log(social)}
          />
        </div>
        <div className="col-6">
          {cardGroups.map((group) => (
            <div key={group.type}>
              <h2>{group.type}</h2>
              <CardDisplay cards={group.cards} onCardClick={handleCardClick} />
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
