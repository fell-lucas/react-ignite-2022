import styled from 'styled-components';
import media from 'styled-media-query';

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 40px;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const LeftContainer = styled.div`
  padding: 40px;
  background: ${(props) => props.theme.colors.baseCard};
  gap: 32px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-top: 15px;
`;

export const SectionTitle = styled.h3`
  font-weight: 700;
  font-family: 'Baloo 2';
  line-height: 130%;
  font-size: ${(props) => props.theme.typography.titleXs};
`;

export const LeftTitleContainer = styled.div`
  display: flex;
  gap: 12px;

  div {
    h4 {
      color: ${(props) => props.theme.colors.baseSubtitle};
      font-size: ${(props) => props.theme.typography.textRegularM};
    }

    p {
      color: ${(props) => props.theme.colors.baseText};
      font-size: ${(props) => props.theme.typography.textRegularS};
    }
  }
`;

export const RightContainer = styled.div`
  padding: 40px;
  border-radius: 6px 44px;
  background: ${(props) => props.theme.colors.baseCard};
  margin-top: 15px;
`;

export const CheckoutConfirmButton = styled.button`
  background-color: ${(props) => props.theme.colors.brandYellow};
  padding: 12px 8px;
  width: 100%;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.baseWhite};
  border-radius: 6px;
  border: none;
  margin-top: 24px;
  cursor: pointer;

  font-size: ${(props) => props.theme.typography.componentsButtonG};

  &:hover {
    background-color: ${(props) => props.theme.colors.brandYellowDark};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.brandYellowLight};
    color: ${(props) => props.theme.colors.brandYellow};
    cursor: not-allowed;
  }
`;

export const CheckoutNoItems = styled.h4`
  white-space: nowrap;
  color: ${(props) => props.theme.colors.baseSubtitle};
  font-size: ${(props) => props.theme.typography.textRegularM};
`;
