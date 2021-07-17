/* eslint-disable @next/next/no-img-element */
import React from 'react';

import {
  Book,
  Camera,
  Cube,
  Email,
  Heart,
  Smile,
  Star,
  VideoCamera
} from '../Icons';
import * as S from './styles';

type OrkutNostalgicIconSetProps = {
  props?: {
    message?: number;
    photos?: number;
    videos?: number;
    fans?: number;
    posts?: number;
    reliable?: number;
    cool?: number;
    sexy?: number;
  };
};

export const OrkutNostalgicIconSet: React.FC<OrkutNostalgicIconSetProps> = ({
  props
}) => {
  return (
    <S.Wrapper>
      <S.Statistics>
        <S.Icons>
          <S.Title>Recados</S.Title>
          <S.Number role="icon" aria-label="Número de recados do usuário">
            <Book />
            {props?.message ? props.message : 0}
          </S.Number>
        </S.Icons>
        <S.Icons>
          <S.Title>Fotos</S.Title>
          <S.Number role="icon" aria-label="Quantidade de fotos do usuário">
            <Camera />
            {props?.photos ? props.photos : 0}
          </S.Number>
        </S.Icons>
        <S.Icons>
          <S.Title>Vídeos</S.Title>
          <S.Number role="icon" aria-label="Número de vídeos do usuário">
            <VideoCamera />
            {props?.videos ? props.videos : 0}
          </S.Number>
        </S.Icons>
        <S.Icons>
          <S.Title>Fãs</S.Title>
          <S.Number role="icon" aria-label="Número de fãs do usuário">
            <Star />
            {props?.fans ? props.fans : 0}
          </S.Number>
        </S.Icons>
        <S.Icons>
          <S.Title>Mensagens</S.Title>
          <S.Number role="icon" aria-label="Quantidade de mensagens do usuário">
            <Email />
            {props?.posts ? props.posts : 0}
          </S.Number>
        </S.Icons>
      </S.Statistics>
      <S.Status>
        <S.Icons>
          <S.Title>Confiável</S.Title>
          <S.Number>
            <div>
              {[1, 2, 3].map((_, index) => {
                const total = props?.reliable ? props?.reliable : 0;
                const isHeartActive = index <= total - 1;

                return (
                  <Smile
                    style={{
                      opacity: isHeartActive ? 1 : '0.5'
                    }}
                    key={`orkut_icon_smile_${index + 1}`}
                  />
                );
              })}
            </div>
          </S.Number>
        </S.Icons>
        <S.Icons>
          <S.Title>Legal</S.Title>
          <S.Number>
            <div>
              {[1, 2, 3].map((_, index) => {
                const total = props?.cool ? props?.cool : 0;
                const isHeartActive = index <= total - 1;

                return (
                  <Cube
                    style={{
                      opacity: isHeartActive ? 1 : '0.5'
                    }}
                    key={`orkut_icon_cube_${index + 1}`}
                  />
                );
              })}
            </div>
          </S.Number>
        </S.Icons>
        <S.Icons>
          <S.Title>Sexy</S.Title>
          <S.Number>
            <div>
              {[1, 2, 3].map((_, index) => {
                const total = props?.sexy ? props?.sexy : 0;
                const isHeartActive = index <= total - 1;

                return (
                  <Heart
                    style={{
                      opacity: isHeartActive ? 1 : '0.5'
                    }}
                    key={`orkut_icon_heart_${index + 1}`}
                  />
                );
              })}
            </div>
          </S.Number>
        </S.Icons>
      </S.Status>
    </S.Wrapper>
  );
};
