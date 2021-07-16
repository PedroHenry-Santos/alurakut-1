import React from 'react';

import Image from 'next/image';

import * as S from './styles';

type ProfileSidebarBoxProps = {
  githubUser: string;
};

export const ProfileSidebarBox: React.FC<ProfileSidebarBoxProps> = ({
  githubUser
}) => {
  return (
    <S.Wrapper>
      <Image
        src={`https://github.com/${githubUser}.png`}
        width={230}
        height={230}
        alt={`Foto de perfil do usuário ${githubUser}`}
        className="img-profile"
      />
    </S.Wrapper>
  );
};
