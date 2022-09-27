import styled, { keyframes } from 'styled-components';
import { BaseIconButton } from '../../../../styles/shared';

const heartBeat = keyframes`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;

export const ProjectInformationButton = styled.button<{ selected: boolean }>`
  position: fixed;
  margin: 10px;
  bottom: 0;
  right: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) =>
    props.selected ? props.theme.colors.brandPurpleDark : props.theme.colors.brandPurple};
  &:hover {
    color: ${(props) => props.theme.colors.brandPurpleDark};
  }
  animation: ${(props) => !props.selected && heartBeat} 3s linear infinite;
`;

export const ProjectInformationContainer = styled.div<{ show: boolean }>`
  position: fixed;
  margin: 10px 60px 25px 0;
  bottom: 0;
  right: 0;
  background: ${(props) => props.theme.colors.brandPurple};
  color: ${(props) => props.theme.colors.brandPurpleLight};
  padding: 5px;
  border-radius: 5px;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  gap: 5px;
  box-shadow: 0px 0px 50px 5px ${(props) => props.theme.colors.baseHover};
  -webkit-box-shadow: 0px 0px 50px 5px ${(props) => props.theme.colors.baseHover};
  -moz-box-shadow: 0px 0px 50px 5px ${(props) => props.theme.colors.baseHover};

  p {
    font-family: 'Roboto';
    font-size: ${(props) => props.theme.typography.textRegularS};
  }

  a {
    color: ${(props) => props.theme.colors.brandPurpleLight};
    font-weight: 600;
    text-decoration: none;
    font-family: 'Baloo 2';
    font-size: ${(props) => props.theme.typography.textBoldM};
  }

  a:hover {
    opacity: 0.7;
  }
`;

export const ChangeLanguageButton = styled(BaseIconButton)<{ isWarnActive: boolean }>`
  font-size: ${(props) => props.theme.typography.textRegularS};
  color: ${(props) =>
    !props.isWarnActive
      ? props.theme.colors.brandYellow
      : props.theme.colors.brandPurple};
  background: ${(props) =>
    !props.isWarnActive
      ? props.theme.colors.brandYellowLight
      : props.theme.colors.brandPurpleLight};
  &:hover {
    color: ${(props) =>
      !props.isWarnActive
        ? props.theme.colors.brandYellowLight
        : props.theme.colors.brandPurpleLight};
    background: ${(props) =>
      !props.isWarnActive
        ? props.theme.colors.brandYellowDark
        : props.theme.colors.brandPurpleDark};
  }
`;
