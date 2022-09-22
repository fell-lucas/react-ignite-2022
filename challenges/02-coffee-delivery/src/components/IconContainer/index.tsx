import { PropsWithChildren } from 'react';
import { StyledIconContainer, StyledIconContainerProps } from './styles';

export function IconContainer({
  bgColor,
  textColor,
  borderRadius,
  iconColor,
  children,
  text,
}: StyledIconContainerProps & PropsWithChildren & { text?: string }) {
  return (
    <StyledIconContainer
      bgColor={bgColor}
      borderRadius={borderRadius}
      iconColor={iconColor}
      textColor={textColor}
    >
      {children}
      {text && <p>{text}</p>}
    </StyledIconContainer>
  );
}

IconContainer.defaultProps = {
  text: '',
};
