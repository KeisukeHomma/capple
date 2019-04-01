import * as React from 'react';
import styled from 'styled-components';
import { color } from '../assets/stylesheets/variables';
import iconClose from '../assets/images/icons/close_.svg';
// import iconConfirmation from '../assets/images/icons/confirmation.svg';
import iconOption from '../assets/images/icons/option.svg';
import userImage01 from '../assets/images/users/user-image04.jpg';
import userImage02 from '../assets/images/users/user-image01.jpg';
import userImage03 from '../assets/images/users/user-image03.jpg';

export default class Detail extends React.Component {
  public state: any = {
    mainImage: userImage01
  };

  public render() {
    return (
        <Container>
          <Image>
            <CloseButton />
            <OptionButton />
            <img src={this.state.mainImage} alt="プロフィール画像"/>
          </Image>
          <Profile>
            
            <MainTextGroup>
              <MainTitle>ごりら</MainTitle>
              <New />
              <Text>23歳・神奈川</Text>
              <Confirmation>年確済み</Confirmation>
            </MainTextGroup>
            <ThumbnailList>
              <Thumbnail isActive={true}><img src={userImage02} alt="サムネ1" /></Thumbnail>
              <Thumbnail isActive={false}><img src={userImage01} alt="サムネ2" /></Thumbnail>
              <Thumbnail isActive={false}><img src={userImage03} alt="サムネ3" /></Thumbnail>
            </ThumbnailList>
            <CategoryGroup>
              <Title>興味があるカテゴリー</Title>
              <CategoryList>
                <CategoryCard>
                  <CategoryImage src={this.state.mainImage} alt="アウトドアが好き" />
                  <CategoryText>アウトドア好き</CategoryText>
                </CategoryCard>
                <CategoryCard>
                  <CategoryImage src={this.state.mainImage} alt="アウトドアが好き" />
                  <CategoryText>旅行好き</CategoryText>
                </CategoryCard>
              </CategoryList>
            </CategoryGroup>
            <ProfileDetailGroup>
              <Title></Title>
              <ProfileDetailList>
                <ProfileDetail>
                  <ProfileDetailTitle>出身地</ProfileDetailTitle>
                  <ProfileDetailText>神奈川県</ProfileDetailText>
                </ProfileDetail>
                <ProfileDetail>
                  <ProfileDetailTitle>血液型</ProfileDetailTitle>
                  <ProfileDetailText>A</ProfileDetailText>
                </ProfileDetail>
                <ProfileDetail>
                  <ProfileDetailTitle>体型</ProfileDetailTitle>
                  <ProfileDetailText>筋肉質</ProfileDetailText>
                </ProfileDetail>
              </ProfileDetailList>
            </ProfileDetailGroup>
          </Profile>
        </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 10;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  height: 360px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: block;
    width: 100%;
    height: 64px;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.00) 100%);
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 32px;
  left: 18px;
  z-index: 11;
  width: 18px;
  height: 18px;
  background: url(${iconClose}) center / contain no-repeat;
`;

const OptionButton = styled.div`
  position: absolute;
  top: 32px;
  right: 18px;
  z-index: 11;
  width: 20px;
  height: 18px;
  background: url(${iconOption}) center / contain no-repeat;
`;

const Profile = styled.div`
  position: relative;
  z-index: 100;
  padding: 28px 16px 0 16px;
  margin-top: -16px;
  border-radius: 16px 16px 0;
  background: white;
`;

const MainTextGroup = styled.div``;

const MainTitle = styled.h2`
  color: ${color.text};
`;

const Text = styled.p`
  color: ${color.subText};
`;

const New = styled.span``;

const Confirmation = styled.p``;

const Title = styled.h3``;

const ThumbnailList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0 0 12px auto;
  list-style: none;
`;

interface IThumbnail {
  isActive: boolean;
};

const Thumbnail = styled.li`
  flex: 0 0 54px;
  height: 54px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  box-sizing: border-box;
  border: solid ${(props: IThumbnail) => props.isActive ? color.accentText + ' 4px' : 'white 2px'};
  cursor: pointer;

  & + & {
    margin-left: 4px;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CategoryGroup = styled.div``;

const CategoryList = styled.ul``;

const CategoryCard = styled.li``;

const CategoryImage = styled.img`
  width: 94px;
  height: 94px;
  object-fit: cover;
  border-radius: 16px;
`;

const CategoryText = styled.p``;

const ProfileDetailGroup = styled.div``;

const ProfileDetailList = styled.ul``;

const ProfileDetail = styled.li``;

const ProfileDetailTitle = styled.div``;

const ProfileDetailText = styled.div``;