import * as React from 'react';
import styled from 'styled-components';
import { color } from '../assets/stylesheets/variables';
import iconNew from 'images/icons/new.svg';

interface ICard {
  user: any;
  updateState: (state: any) => void;
};

export default class Card extends React.Component<ICard> {
  changeImage(index: number): void {
    let state: any = this.props;
    state.user.thumbnails[state.user.prevIndex].isActive = false;
    state.user.thumbnails[index].isActive = true;
    state.user.mainImage = state.user.thumbnails[index].image;
    state.user.prevIndex = index;

    this.props.updateState(state);
  }

  render() {
    return (
      <Container>
        <New />
        <Image src={this.props.user.mainImage} alt="プロフィール画像"/>
        <Inner>
          <Profile>
            <Title>{this.props.user.name}</Title>
            <Text>{this.props.user.age}歳・{this.props.user.place}</Text>
          </Profile>
          <ThumbnailList>
            { this.props.user.thumbnails.map((thumbnail: any, index: number) => {
              return (
                <Thumbnail
                  key={index}
                  onClick={this.changeImage.bind(this, index) }
                  isActive={thumbnail.isActive}><img src={thumbnail.image} />
                </Thumbnail>
              )
            }) }
          </ThumbnailList>
        </Inner>
        <Apeal>{this.props.user.appealText}</Apeal>
      </Container>
    )
  }
}

const Container = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 32px 16px 10px 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  background: white;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 160px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.57));
    border-radius: 0 0 16px 16px;
  }
`;

const New = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 44px;
  height: 44px;
  z-index: 100;
  border-radius: 50%;
  background: ${color.accent} url(${iconNew}) center / 75% no-repeat;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

const Inner = styled.div`
  display: flex;
  align-items: flex-end;
  z-index: 100;
`;

const Profile = styled.div`
  flex: 0 0 auto;
  margin-left: 24px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.p`
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: bold;
  color: white;
`;

const Text = styled.p`
  margin-bottom: 18px;
  font-size: 11px;
  font-weight: bold;
  color: white;
`;

const ThumbnailList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0 10px 12px auto;
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

const Apeal = styled.p`
  display: flex;
  align-items: center;
  height: 66px;
  padding: 0 12px;
  margin: 0 12px 12px;
  background: white;
  border-radius: 12px;
  z-index: 100;
  font-size: 13px;
  font-weight: bold;
  color: ${color.text};

  > strong {
    color: ${color.accentText};
  }
`;
