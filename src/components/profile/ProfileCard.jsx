import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ProfileCard() {
  const [followers, setFollowers] = useState(2950);
  const [followings, setFollowings] = useState(128);
  const [name, setName] = useState('대한민국 챙고 감귤농장');
  const [id, setIdName] = useState('@chango.kr');
  const [info, setInfo] = useState(
    '대한민국 감귤 전국 배송, 귤따기 체험, 감귤 농장',
  );
  const [follow, setFollow] = useState(false);
  return (
    <ProfileContainer>
      <ProfileHeader>
        <SrOnlyHeader>{name}의 프로필</SrOnlyHeader>
        <div>
          <p>{followers}</p>
          <p>followers</p>
        </div>
        <img src="img/basic-profile-img.png" alt="" />
        <div>
          <p>{followings}</p>
          <p>followings</p>
        </div>
      </ProfileHeader>
      <Name>{name}</Name>
      <Id>{id}</Id>
      <Info>{info}</Info>
      <Action>
        <MessageBtn />
        <FollowBtn>팔로우</FollowBtn>
        <ShareBtn />
      </Action>
    </ProfileContainer>
  );
}

export default ProfileCard;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6px;
  background-color: white;
`;

const SrOnlyHeader = styled.h4`
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
  clip: rect(0, 0, 0, 0);
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    margin: 30px 41px 16px 41px;
  }

  & > div {
    text-align: center;
  }

  & > div > p:first-child {
    font-size: 18px;
    font-weight: 700;
  }

  & > div:last-child > p:first-child {
    color: #767676;
  }

  & > div > p:last-child {
    font-size: 10px;
    font-weight: 400;
    color: #767676;
  }
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const Id = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #767676;
  margin-top: 6px;
  margin-bottom: 16px;
`;

const Info = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #767676;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 26px;
`;

const MessageBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 30px;
  border: 1px solid #dbdbdb;
  background-color: white;
  background-image: url('img/icon/icon-message-circle.png');
  background-repeat: no-repeat;
  background-position: center;
`;

const FollowBtn = styled.button`
  margin: 0px 10px;
  padding: 8px 40px 8px 41px;
  font-size: 14px;
  font-weight: 400;
  color: white;
  background-color: #f26e22;
  border: none;
  border-radius: 30px;
`;
const ShareBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 30px;
  border: 1px solid #dbdbdb;
  background-color: white;
  background-image: url('img/icon/icon-share.png');
  background-repeat: no-repeat;
  background-position: center;
`;
