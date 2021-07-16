import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.backgroundTertiary};
    border-radius: ${theme.border.radius};
    padding: ${theme.padding.medium};
    margin: ${theme.margin.medium};

    .boxLink {
      font-size: ${theme.font.size.xxlarge};
      color: ${theme.colors.textPrimary};
      text-decoration: none;
      font-weight: ${theme.font.bold};
    }

    .title {
      font-size: ${theme.font.size.xlarge};
      font-weight: ${theme.font.normal};
      margin-bottom: ${theme.margin.xxsmall};
    }

    .subTitle {
      font-size: ${theme.font.size.medium};
      font-weight: ${theme.font.normal};
      margin-bottom: ${theme.margin.large};
    }

    .smallTitle {
      font-size: ${theme.font.size.medium};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.gray1};
      margin-bottom: ${theme.margin.large};
    }

    hr {
      margin-top: ${theme.margin.medium};
      margin-bottom: ${theme.margin.medium};
      border-color: transparent;
      border-bottom-color: ${theme.colors.details};
    }

    input {
      width: 100%;
      background-color: ${theme.colors.input};
      color: ${theme.colors.gray1};
      border: 0;
      padding: ${theme.margin.medium} ${theme.margin.xlarge};
      margin-bottom: ${theme.margin.medium};
      border-radius: 10000px;
      ::placeholder {
        color: ${theme.colors.gray1};
        opacity: 1;
      }
    }

    button {
      border: 0;
      padding: ${theme.padding.xsmall} ${theme.padding.small};
      color: ${theme.colors.textSecondary};
      border-radius: 10000px;
      background-color: ${theme.colors.primaryElement};
    }
  `}
`;
