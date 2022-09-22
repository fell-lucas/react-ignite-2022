import styled from 'styled-components';

export interface StyledIconContainerProps {
  bgColor: string;
  iconColor?: string;
  textColor?: string;
  borderRadius?: number;
}

export const StyledIconContainer = styled.div<StyledIconContainerProps>`
  padding: 8px;
  gap: 4px;
  border-radius: ${(props) => props.borderRadius ?? 6}px;
  display: flex;
  justify-items: center;
  align-items: center;
  color: ${(props) => props.iconColor ?? props.theme.colors.baseWhite};
  background-color: ${(props) => props.bgColor};

  p {
    color: ${(props) => props.textColor ?? props.theme.colors.baseWhite};
  }
`;
