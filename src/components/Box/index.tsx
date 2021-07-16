import React from 'react';

import * as S from './styles';

export const Box: React.FC = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
