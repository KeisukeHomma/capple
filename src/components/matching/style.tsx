import styled from 'styled-components';
import posed from 'react-pose';
import { color } from '../../assets/stylesheets/variables';
import iconLike from 'images/icons/like.svg';

const PoseContainer = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: 'flex',
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: 'none',
    },
  },
});

export const Container = styled(PoseContainer)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1100;
  background: #F270A6;
`;

export const Title = styled.h2`
  color: white;
`;

export const MatchingResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 300px;
  margin: auto 0;
`;

export const ImageGroup = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const PoseMyImage = posed.img({
  visible: {
    marginLeft: '0vw',
    opacity: 1,
    transform: 'rotate(0deg)',
    transition: {
      duration: 600,
      delay: 300,
      ease: [.18, .97, .14, .98],
    },
    applyAtStart: {
      opacity: 0.2,
      marginLeft: '-48vw',
      transform: 'rotate(-90deg)',
    },
  },
  hidden: {
    transition: {
      delay: 300,
    },
  },
});

export const MyImage = styled(PoseMyImage)`
  position: relative;
  z-index: 1200;
  flex: 0 0 112px;
  max-width: 112px;
  height: 112px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid white;
`;

export const PartnerImageList = styled.div`
  position: relative;
`;

const PosePartnerImage = posed.img({
  visible: {
    marginLeft: '0vw',
    opacity: 1,
    transform: 'rotate(0deg)',
    transition: {
      duration: 600,
      delay: 300,
      ease: [.18, .97, .14, .98],
    },
    applyAtStart: {
      marginLeft: '148vw',
      opacity: 0.2,
      transform: 'rotate(90deg)',
    },
  },
  hidden: {
    transition: {
      delay: 300,
    },
  },
});

export const PartnerImage = styled(PosePartnerImage)`
  position: relative;
  z-index: 1200;
  flex: 0 0 112px;
  max-width: 112px;
  height: 112px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid white;
`;

const PoseMatchingIcon = posed.div({
  visible: {
    opacity: 1,
    transition: {
      duration: 600,
      delay: 900,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
    },
  },
});

export const MatchingIcon = styled(PoseMatchingIcon)`
  flex: 0 0 60px;
  height: 60px;
  margin: auto -14px 4px -14px;
  border-radius: 50%;
  background: white url(${iconLike}) center 18px / 100% 28px no-repeat;
`;

export const Text = styled.p`
  color: white;
  text-align: center;
  font-weight: bold;
  line-height: 24px;
  font-size: 15px;
`;

export const ButtonGroup = styled.ul`
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
  margin-bottom: 32px;
  list-style: none;

  > li {
    margin-top: 12px;
  }
`;

export const MessageButton = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 24px;
  text-align: center;
  background: white;
  color: ${color.accentText};
  font-weight: bold;
  font-size: 15px;
  letter-spacing: -0.04px;
`;

export const CloseButton = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 24px;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: -0.04px;
`;
