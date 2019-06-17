import * as React from 'react';
import {
  Container, Header, HeaderArrow, HeaderTitle, HeaderCard,
  CardGroup, CardOuter, CardInner, CardLikeInner, LikeIcon, LikeText, CardUnLikeInner, UnLikeIcon, UnLikeText,
  ButtonGroup, Setting, Like, SuperLike, UnLike, Shop
} from './style';
import Detail from '../detail';
import Card from '../../components/card';
import Matching from '../../components/matching';
import { value } from 'popmotion';

interface IFind {
  userIndex: number;
  users: any;
  style: any;
  updateState: (state: any) => void;
  showNextUser: () => void;
};

interface IState {
  refs: any,
  cardValues: any,
}

export default class Find extends React.Component<IFind, IState> {
  public state: IState = {
    refs: [],
    cardValues: [],
  };

  private execAction(actionKey: string): void {
    let state = this.props;
    state.users[state.userIndex][actionKey] = true;
    this.state.refs[state.userIndex].hiddenNew();
    this.props.updateState(state);
  };

  triggerDistance = 50;

  // スワイプ処理
  private dragEndSwipe = (i: number) => {
    const x = this.state.cardValues[i].x.get();

    if (x <= -this.triggerDistance) {
      // いいかも
      setTimeout(() => {
        this.props.showNextUser();
        this.resetCardValue(i);
      }, 280);
    } else if (this.triggerDistance <= x) {
      // いまいち
      setTimeout(() => {
        this.props.showNextUser();
        this.resetCardValue(i);
      }, 280);
    }
  };

  // カードの状態を初期化
  private resetCardValue = (i: number) => {
    this.state.cardValues[i].x = value(0);
  };

  private createCardDOM(): any {
    let cards = [];
    for(let i = this.props.userIndex; i <= this.props.userIndex + 1; i++) {
      if (i >= this.props.users.length) {
        break;
      }

      // カードごとの位置や速度の状態を保持する https://popmotion.io/api/value/
      this.state.cardValues.push({ x: value(0) });

      cards.push(
        <CardOuter
          key={i}
          pose={
            this.props.users[i].isLike ? 'like' :
            this.props.users[i].isUnLike ? 'unLike' :
            'default'
          }
          values={this.state.cardValues[i]}
          // 即時関数で呼び出さないといけないみたい
          onDragEnd={() => this.dragEndSwipe(i)}
          onPoseComplete={() => {
            this.props.showNextUser();
            this.resetCardValue(i);
          }}
        >
          <CardLikeInner>
            <LikeIcon />
            <LikeText>いいかも！</LikeText>
          </CardLikeInner>
          <CardUnLikeInner>
            <UnLikeIcon />
            <UnLikeText>イマイチ<span>...</span></UnLikeText>
          </CardUnLikeInner>
          <CardInner>
            <Card
              isCurrent={this.props.userIndex === i}
              user={this.props.users[i]}
              updateState={this.props.updateState}
              onRef={(ref: any) => this.state.refs[i] = ref}
            />
          </CardInner>
        </CardOuter>
      )
    }

    return cards.reverse();
  }

  public render() {
    let currentUser = this.props.users[this.props.userIndex];

    return (
      <React.Fragment>
        <Matching
          user={currentUser}
          style={this.props.style}
          updateState={this.props.updateState}
        />
        <Detail userIndex={this.props.userIndex} user={currentUser} style={this.props.style} updateState={this.props.updateState} />
        <Container isMatching={currentUser.isMatching} mobileHeight={this.props.style.mobileHeight}>
          <Header>
            <HeaderArrow />
            <HeaderTitle>アウトドアが好き</HeaderTitle>
            <HeaderCard>
              <span></span>
              <p>255</p>
            </HeaderCard>
          </Header>
          <CardGroup>{this.createCardDOM()}</CardGroup>
          <ButtonGroup>
            <Setting />
            <Like onClick={() => this.execAction('isMatching')} />
            <SuperLike />
            <UnLike onClick={() => this.execAction('isUnLike')} />
            <Shop />
          </ButtonGroup>
        </Container>
      </React.Fragment>
    )
  }
}
