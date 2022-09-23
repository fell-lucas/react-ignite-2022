import styled from 'styled-components';

export const IconCircle = styled.div<{ bg: string }>`
  background-color: ${(props) => props.bg};
  padding: 8px;
  gap: 4px;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.baseWhite};
  width: 32px;
  height: 32px;
`;

export const DeliveryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 520px;
  border-radius: 6px 36px;
  padding: 40px;
  gap: 32px;
  background: linear-gradient(
        ${(props) => props.theme.colors.baseBackground},
        ${(props) => props.theme.colors.baseBackground}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.colors.brandYellow},
        ${(props) => props.theme.colors.brandPurple}
      )
      border-box;
  border-radius: 6px 36px;
  border: 2px solid transparent;
`;

export const DeliveryInfoItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.typography.textRegularM};
    line-height: 130%;
  }
`;
