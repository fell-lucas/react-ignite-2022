import styled from 'styled-components';
import media from 'styled-media-query';
import { BaseIconButton } from '../../../../styles/shared';

export const SelectedItem = styled.div`
  padding: 8px 4px;
  position: relative;
  display: flex;
  gap: 20px;

  ${media.lessThan('large')`
    position: relative;
  `}

  img {
    width: 64px;
    height: 64px;
  }

  & > p {
    font-size: ${(props) => props.theme.typography.textBoldM};
    font-weight: 700;
    font-family: 'Roboto';
    white-space: nowrap;
    color: ${(props) => props.theme.colors.baseText};
    ${media.lessThan('large')`
      position: absolute;
      right: 0;
    `}
  }
`;

export const SelectedItemActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    font-size: ${(props) => props.theme.typography.textRegularM};
    font-weight: 400;
    font-family: 'Roboto';
    white-space: nowrap;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`;

export const RemoveButton = styled(BaseIconButton)`
  padding: 8.5px 8px;

  ${media.lessThan('medium')`
    & > p {
      display: none;
    }
  `}
`;

export const Separator = styled.hr`
  border: 1px solid ${(props) => props.theme.colors.baseButton};
  margin: 24px 0px;
`;
