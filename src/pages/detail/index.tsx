import * as React from 'react';
import {
  Container, Image, Header, CloseButton, CloseButtonSvg, OptionButton, OptionButtonSvg, HeaderInner, HeaderImage, HeaderTitle, 
  Profile, ProfileMain, MainTextGroup, MainTitle, New, Text, Confirmation,
  ThumbnailList, Thumbnail, Introduction, IntroductionTitle, IntroductionText,
  CategoryGroup, Title, CategoryList, CategoryCard, CategoryImage, CategoryText,
  ProfileDetailGroup, ProfileDetail, ProfileDetailList, ProfileDetailTitle, ProfileDetailText,
  ButtonOuter,
} from './style';

import JudgeButtonGroup from '../../components/judgeButtonGroup';

interface IDetail {
  userIndex: number;
  user: any;
  style: any;
  updateState: (state: any) => void;
  refs: any;
};

interface IState {
  isShowHeader: boolean;
  node: any;
};

export default class Detail extends React.Component<IDetail, IState> {
  public state: IState = {
    isShowHeader: false,
    node: React.createRef(),
  };

  private changeImage(index: number): void {
    let user: any = this.props.user;

    user.thumbnails[user.prevIndex].isActive = false;
    user.thumbnails[index].isActive = true;
    user.mainImage = user.thumbnails[index].image;
    user.prevIndex = index;

    this.props.updateState(user);
  }

  private hideDetail(): void {
    let state = this.props;
    state.user.isDetail = false;
    this.props.updateState(state);
  }

  public render() {
    const handleScroll = () => {
      if (340 < this.state.node.current.scrollTop) {
        this.setState({
          isShowHeader: true,
        })
      } else {
        this.setState({
          isShowHeader: false,
        })
      }
    };
    
    return (
      <Container
        pose={this.props.user.isDetail ? 'visible' : 'hidden'}
        mobileHeight={this.props.style.mobileHeight}
        onScroll={handleScroll}
        ref={this.state.node}
      >
        <Header pose={this.state.isShowHeader ? 'visibleHeaderInner' : 'hiddenHeaderInner'}>
          <CloseButton>
            <CloseButtonSvg
              onClick={() => this.hideDetail()} 
              width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg"
            >
              <title>Group 4</title>
              <g stroke="#fff" strokeWidth="2" fill="none"><path d="M1.5 1.5l16.329 16.329M17.5 1.5l-16.329 16.329"/></g>
            </CloseButtonSvg>
          </CloseButton>
          <HeaderInner>
            <HeaderImage>
              <img src={this.props.user.mainImage} alt="プロフィール画像"/>
            </HeaderImage>
            <HeaderTitle>{this.props.user.name}</HeaderTitle>
          </HeaderInner>
          <OptionButton>
            <OptionButtonSvg width="20" height="4" viewBox="0 0 20 4" xmlns="http://www.w3.org/2000/svg"><title>option</title><g transform="translate(-337 -39) translate(337 39)" fill="#fff"><circle cx="2" cy="2" r="2"/><circle cx="10" cy="2" r="2"/><circle cx="18" cy="2" r="2"/></g></OptionButtonSvg>
          </OptionButton>
        </Header>
        <Image mobileHeight={this.props.style.mobileHeight}>
          <img src={this.props.user.mainImage} alt="プロフィール画像"/>
        </Image>
        <Profile>
          <ProfileMain>
            <MainTextGroup>
              <MainTitle>
                {this.props.user.name}
                { this.props.user.isNew && <New />}
              </MainTitle>
              <Text>
                {this.props.user.age}歳・{this.props.user.place}
                <Confirmation isConfirmed={this.props.user.isConfirmed}>年確済み</Confirmation>
              </Text>
            </MainTextGroup>
            <ThumbnailList>
              { this.props.user.thumbnails.map((thumbnail: any, index: number) => {
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
                );
              }) }
            </ThumbnailList>
          </ProfileMain>
          <Introduction>
            <IntroductionTitle>自己紹介</IntroductionTitle>
            <IntroductionText>{this.props.user.introduction}</IntroductionText>
          </Introduction>
          <CategoryGroup>
            <Title>興味があるカテゴリー</Title>
            <CategoryList>
              { this.props.user.category.map((item: any, index: number) => {
                return (
                  <CategoryCard key={index}>
                    <CategoryImage src={item.image} alt={item.text} />
                    <CategoryText>{item.text}</CategoryText>
                  </CategoryCard>
                );
              }) }
            </CategoryList>
          </CategoryGroup>
          <ProfileDetailGroup>
            <Title>プロフィール</Title>
              <ProfileDetailList>
                { this.props.user.profile.map((item: any, index: number) => {
                  return (
                    <ProfileDetail key={index}>
                      <ProfileDetailTitle>{item.title}</ProfileDetailTitle>
                      <ProfileDetailText>{item.text}</ProfileDetailText>
                    </ProfileDetail>
                  );
                }) }
              </ProfileDetailList>
          </ProfileDetailGroup>
        </Profile>
        <ButtonOuter>
          <JudgeButtonGroup
            userIndex={this.props.userIndex}
            user={this.props.user}
            updateState={this.props.updateState}
            refs={this.props.refs}
          />
        </ButtonOuter>
      </Container>
    );
  }
}
