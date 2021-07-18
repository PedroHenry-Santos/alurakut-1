import styled, { css } from 'styled-components';

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: ${theme.gap.small};
    grid-template-columns: 1fr 1fr 1fr;
    max-height: 22rem;
    list-style: none;

    img {
      object-fit: cover;
      background-position: center;
      width: 100%;
      height: 100%;
      position: relative;
    }

    & li a {
      display: inline-block;
      height: 10.2rem;
      position: relative;
      overflow: hidden;
      border-radius: ${theme.border.radius};

      span {
        color: ${theme.colors.textSecondary};
        font-size: ${theme.font.size.xxxsmall};
        position: absolute;
        left: 0;
        bottom: 10px;
        z-index: ${theme.layers.base};
        padding: 0 0.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: ${theme.layers.default};
        background-image: linear-gradient(0deg, #00000073, transparent);
      }
    }
  `}
`;
