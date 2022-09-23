import styled from 'styled-components';
import media from 'styled-media-query';

export const SuccessTitle = styled.h2`
  font-family: 'Baloo 2';
  color: ${(props) => props.theme.colors.brandYellowDark};
  font-weight: 800;
  font-size: ${(props) => props.theme.typography.titleL};
  margin-top: 80px;
`;

export const SuccessSubtitle = styled.h4`
  font-family: 'Roboto';
  color: ${(props) => props.theme.colors.baseSubtitle};
  font-size: ${(props) => props.theme.typography.textRegularL};
  margin-bottom: 40px;
`;

export const SuccessMainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  & > img {
    max-width: 520px;
    width: 90%;
  }

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;
