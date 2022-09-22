import styled from 'styled-components';
import IntroBackgroundImage from '../../assets/intro-background.svg';

export const IntroBackground = styled.div`
  background-image: url(${IntroBackgroundImage});
  background-repeat: round;
  background-position: left;
  z-index: -10;
  position: absolute;
  width: 100%;
  left: 0;
  height: 544px;
`;

export const IntroContainer = styled.div`
  display: flex;
  gap: 56px;
  padding: 92px 0;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-family: 'Baloo 2', cursive;
  font-size: ${(props) => props.theme.typography.titleXl};
  color: ${(props) => props.theme.colors.baseTitle};
  margin-bottom: 16px;
`;

export const Subtitle = styled.h3`
  font-size: ${(props) => props.theme.typography.textRegularL};
  color: ${(props) => props.theme.colors.baseSubtitle};
  font-weight: 400;
  margin-bottom: 66px;
`;
