import React from "react";
import styled from "styled-components";
import { FiTwitter } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLinkAlt } from "react-icons/bi";
import { BiBuildings } from "react-icons/bi";

const Card = styled.div`
  grid-column: 1 / -1;
  background-color: ${(props) => props.theme.card};
  width: 100%;
  border-radius: 8px;
  padding: 2rem;
  display: grid;
  gap: 1rem;
  grid-template:
    "img name name" 10px
    "img username username" 10px
    "img bio bio" 1fr
    "img numbers numbers" 30%
    "img info info" 80px;
`;

const ProfilePic = styled.img`
  grid-area: img;
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

const Name = styled.p`
  grid-area: name;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  & .name {
    font-size: 1.3rem;
    letter-spacing: 1px;
    font-weight: 600;
  }

  & .login {
    margin-top: 0;
    background-color: ${(props) => props.theme.icon};
  }
`;

const Username = styled.p`
  padding: 0.1rem 0;
  font-size: 0.7rem;
`;

const Date = styled.span`
  font-size: 0.7rem;
`;

const Bio = styled.p`
  grid-area: bio;
  padding: 1rem 0;
`;
const Numbers = styled.p`
  grid-area: numbers;
  background-color: ${(props) => props.theme.bg};
  border-radius: 8px;
  display: flex;
  align-items: center;
  & .numbers {
    font-weight: 800;
    font-size: 1rem;
  }

  & ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;
const Info = styled.p`
  grid-area: info;

  & p {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  & p span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export function CardUser({ user }) {
  return (
    <Card>
      <ProfilePic src={`${user.avatar_url}`} alt="" />
      <Name>
        <p className="name">{user.name}</p>
        <Date>Joined 25 Jan 2014</Date>
      </Name>
      <Username className="login">@{user.login}</Username>
      <Bio>{user.bio}</Bio>
      <Numbers>
        <ul>
          <li>
            <p>Repos</p>
            <p className="numbers">{user.public_repos}</p>
          </li>
          <li>
            <p>Followers</p>
            <p className="numbers"> {user.followers}</p>
          </li>
          <li>
            <p>Following</p>
            <p className="numbers"> {user.following}</p>
          </li>
        </ul>
      </Numbers>
      <Info>
        <p>
          <span>
            <HiOutlineLocationMarker />
            {user.location}
          </span>
          <span>
            <FiTwitter />
            {user.twitter_username ? user.twitter_username : " twitter"}
          </span>
        </p>
        <p>
          <span>
            <BiLinkAlt />
            <a href={`https://${user.blog}`} target="_blank" rel="noreferrer">
              {user.blog ? user.blog : ""}
            </a>
          </span>
          <span>
            <BiBuildings />
            {user.company ? user.company : "nocompany"}
          </span>
        </p>
      </Info>
    </Card>
  );
}
