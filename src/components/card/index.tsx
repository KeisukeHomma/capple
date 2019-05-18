import * as React from 'react';
import {
  Container, New, Image, Inner,
  Profile, Title, Text, ThumbnailList, Thumbnail, Apeal
} from './style';

interface ICard {
  isCurrent: boolean;
  user: any;
  updateState: (state: any) => void;
};

export default class Card extends React.Component<ICard> {
  private changeImage(index: number): void {
    let user: any = this.props.user;

    user.thumbnails[user.prevIndex].isActive = false;
    user.thumbnails[index].isActive = true;
    user.mainImage = user.thumbnails[index].image;
    user.prevIndex = index;

    this.props.updateState(user);
  }

  private showDetail(): void {
    let state = this.props;
    state.user.isDetail = true;
    this.props.updateState(state);
  }

  public render() {
    return (
      <Container onClick={() => this.showDetail()}>
        { (this.props.user.isNew && this.props.isCurrent) && <New />}
        <Image src={this.props.user.mainImage} alt="プロフィール画像" />
        <Inner>
          <Profile>
            <Title>{this.props.user.name}</Title>
            <Text>{this.props.user.age}歳・{this.props.user.place}</Text>
          </Profile>
          <ThumbnailList>
            {this.props.user.thumbnails.map((thumbnail: any, index: number) => {
              return (
                <Thumbnail
                  key={index}
                  onClick={
                    e => {
                        e.stopPropagation();
                        this.changeImage(index);
                    }
                  }
                  isActive={thumbnail.isActive}><img src={thumbnail.image} />
                </Thumbnail>
              )
            })}
          </ThumbnailList>
        </Inner>
        <Apeal>{this.props.user.appeal}</Apeal>
      </Container>
    )
  }
}
