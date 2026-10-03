import { useState } from "react";

function Card({ profile }) {
  const [likes, setLikes] = useState(profile.likes);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className="card">

      <img
        className="card-image"
        src={profile.image}
        alt={profile.name}
      />

      <div className="card-content">

        <h2>{profile.name}</h2>

        <h3 style={{ color: profile.color }}>
          {profile.role}
        </h3>

        <p>{profile.description}</p>

        <div className="tags">
          {profile.skills.map((skill, index) => (
            <span key={index}>
              {skill}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="like-button"
          onClick={handleLike}
          style={{
            backgroundColor: likes > profile.likes
              ? profile.color
              : "white",

            color: likes > profile.likes
              ? "white"
              : profile.color,

            borderColor: profile.color,
          }}
        >
          ❤️ {likes} Like
        </button>

      </div>
    </div>
  );
}

export default Card;