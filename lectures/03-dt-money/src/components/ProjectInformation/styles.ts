import styled, { keyframes } from 'styled-components';

const BaseIconButton = styled.button`
  display: flex;
  color: #e1e1e6;
  justify-content: center;
  align-items: center;
  background-color: #7c7c8a;
  border-radius: 6px;
  gap: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #323238;
  }

  p {
    text-transform: uppercase;
    font-size: 14px;
    color: #202024;
    text-align: center;
    line-height: 100%;
  }
`;

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
  color: ${(props) => (props.selected ? '#015F43' : '#00875F')};
  &:hover {
    color: #015f43;
  }
  animation: ${(props) => !props.selected && heartBeat} 3s linear infinite;
`;

export const ProjectInformationContainer = styled.div<{ show: boolean }>`
  position: fixed;
  margin: 10px 60px 25px 0;
  bottom: 0;
  right: 0;
  background: #202024;
  color: #e1e1e6;
  padding: 5px;
  border-radius: 5px;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  gap: 5px;
  box-shadow: 0px 0px 10px 0px #7c7c8a;
  -webkit-box-shadow: 0px 0px 10px 0px #7c7c8a;
  -moz-box-shadow: 0px 0px 10px 0px #7c7c8a;

  p {
    font-family: 'Roboto';
    font-size: 14px;
    color: #8d8d99;
  }

  a {
    color: #c4c4cc;
    font-weight: 600;
    text-decoration: none;
    font-family: 'Roboto';
    font-size: 14.5px;
  }

  a:hover {
    opacity: 0.7;
  }
`;

export const ChangeLanguageButton = styled(BaseIconButton)`
  font-size: 14px;
  color: #8d8d99;
  background: #323238;
  &:hover {
    color: #323238;
    background: #8d8d99;
  }
`;
