import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 40px;
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
