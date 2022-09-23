import styled from 'styled-components';
import { BaseIconButton } from '../../../../styles/shared';

export const PaymentMethodButton = styled(BaseIconButton)`
  padding: 16px;
  border: 1px solid transparent;

  &:focus {
    background-color: ${(props) => props.theme.colors.brandPurpleLight};
    border: solid 1px ${(props) => props.theme.colors.brandPurple};
  }
`;

export const PaymentMethodsContainer = styled.div`
  display: flex;
  gap: 12px;
`;
