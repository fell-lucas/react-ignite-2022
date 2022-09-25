import styled from 'styled-components';
import media from 'styled-media-query';
import { BaseIconButton } from '../../../../styles/shared';

interface PaymentMethodButtonProps {
  selected: boolean;
}

export const PaymentMethodButton = styled(BaseIconButton)<PaymentMethodButtonProps>`
  padding: 16px;
  border: 1px solid transparent;

  ${(props) =>
    props.selected &&
    `
    background-color: ${props.theme.colors.brandPurpleLight};
    border: solid 1px ${props.theme.colors.brandPurple};
  `}
`;

export const PaymentMethodsContainer = styled.div`
  display: flex;
  gap: 12px;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;
