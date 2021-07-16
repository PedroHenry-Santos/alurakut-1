import React from 'react';

import { GitHubCorner } from '../GitHubCorner';
import { Illustrate } from '../Illustrate';
import * as S from './styles';

export const Main = ({
  title = 'Boilerplate NextJS',
  description = 'NextJS, React, Typescript, styled-components'
}) => {
  return (
    <S.Wrapper>
      <GitHubCorner projectUrl="https://github.com/PedroHenry-Santos/boilerplate-next" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <Illustrate />
    </S.Wrapper>
  );
};
