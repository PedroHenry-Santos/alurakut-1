import styled, { css } from 'styled-components';

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    margin-top: ${theme.margin.xxlarge};
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 1fr 1fr;
  `}
`;

export const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Status = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Icons = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.size.xxsmall};
    color: ${theme.colors.textTertiary};

    span + span {
      margin-right: ${theme.margin.small};
    }
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    grid-area: 'title';
    margin-bottom: 0.3rem;
    margin-top: ${theme.margin.medium};
  `}
`;

export const Number = styled.span`
  ${({ theme }) => css`
    grid-area: 'number';
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: ${theme.font.size.xsmall};
      height: ${theme.font.size.xsmall};
    }

    > svg {
      margin-right: 0.4rem;
    }

    > div {
      display: flex;

      svg + svg {
        margin-left: 0.2rem;
      }
    }
  `}
`;
