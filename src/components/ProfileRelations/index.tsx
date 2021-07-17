import React from 'react';

import Image from 'next/image';

import { Box } from '../Box';
import * as S from './styles';

type ProfileRelationsProps = {
  contentRender: string[];
  pageUrl: keyof { users: string; groups: string };
  UrlDomain: keyof { 'github.com': string };
};

export const ProfileRelations: React.FC<ProfileRelationsProps> = ({
  contentRender,
  pageUrl,
  UrlDomain
}) => {
  return (
    <Box>
      <h2 className="smallTitle">
        Pessoas da comunidade ({contentRender.length})
      </h2>

      <S.Wrapper>
        {contentRender.map(item => {
          return (
            <li key={item}>
              <a href={`/${pageUrl}/${item}`}>
                <Image
                  className="image-styles"
                  src={`https://${UrlDomain}/${item}.png`}
                  alt={item}
                  width={100}
                  height={145}
                />
                <span>{item}</span>
              </a>
            </li>
          );
        })}
      </S.Wrapper>
      <hr />
      <a className="boxLink" href={`/${pageUrl}`}>
        Ver todos
      </a>
    </Box>
  );
};
