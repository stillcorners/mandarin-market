import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/common/Navbar';
import PageTitle from '../components/common/PageTitle';
import FeedContainer from '../components/profile/FeedContainer';

function Home() {
  const [haveFollowing, setHaveFollowing] = useState(true);
  return (
    <div>
      {haveFollowing ? (
        <div>
          <FeedContainer />
          <FeedContainer />
          <FeedContainer />
          <Navbar />
        </div>
      ) : (
        <div>
          <PageTitle title="Home" />
          <Container>
            <HomeImg src="/img/symbol-logo-gray.png" alt="로고" />
            <HomeP>유저를 검색해 팔로우를 해보세요!</HomeP>
            <HomeBtn to="/search">검색하기</HomeBtn>
          </Container>
          <Navbar />
        </div>
      )}
    </div>
  );
}

export default Home;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 140px);
  margin: 70px 0;
  background: #fff;
`;
const HomeImg = styled.img``;
const HomeP = styled.p`
  margin: 10px 0;
  color: #767676;
  padding: 10px;
  font-family: Spoqa Han Sans Neo;
`;
const HomeBtn = styled(Link)`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: ${(props) => props.theme.red};
  color: #fff;
`;
