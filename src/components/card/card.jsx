import React from "react";

// import Style
import { MainDiv, InfoStyle, AvatarStyle } from "./card.style";

const Card = ({ profile }) => {
  return (
    <MainDiv>
      {/* Avatar */}
      <div>
        <AvatarStyle src={profile.avatar_url} alt={profile.name} />
      </div>
      {/* Info */}
      <InfoStyle>
      <div><b>Username: {profile.login}</b></div>
        {/* Name */}
        <div><h5>Name: {profile.name}</h5></div>
        {/* Github Link */}
        <div><h5>
          GitHub Link:{" "}
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            {profile.html_url}
          </a></h5>
        </div>
        {/* email */}
        <div><h5>Email: {profile.Email}</h5></div>
        
        <div><h5>Website: {profile.blog}</h5></div>
        {/* Location */}
        <div><h5>Location: {profile.location}</h5></div>
        {/* Public repo */}
        <div><h5>Public Repositories: {profile.public_repos}</h5></div>
        {/* Info */}
        <div><h5>Followers: {profile.followers}</h5></div>
        <div><h5>Following: {profile.following}</h5></div>
        <div><h5>Hireable: {profile.hireable}</h5></div>
        <div><h5>Bio: {profile.bio}</h5></div>
        <div><h5>Created At: {profile.created_at}</h5></div>
      </InfoStyle>
    </MainDiv>
  );
};

export default Card;
