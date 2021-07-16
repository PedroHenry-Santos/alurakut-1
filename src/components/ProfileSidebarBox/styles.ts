import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.backgroundTertiary};
    border-radius: ${theme.border.radius};
    padding: ${theme.padding.medium};
    margin: ${theme.margin.medium};

    .img-profile {
      border-radius: ${theme.border.radius};
    }
  `}
`;
