import { useState } from 'react';
import Image from 'next/image';
import { CharactersSearch } from '@/components';
import { CharactersHeadProps } from '@/types';
import * as S from '@/styles';

export const CharactersHead: React.FC<CharactersHeadProps> = ({
  toggleOrderBy,
  orderBy,
  onSearch,
}) => {
  const toggle = '/assets/toggle_on.svg';

  return (
    <S.CharactersHeaderWrapper>
      <S.CharactersHeaderTitleWrapper>
        <S.CharactersHeaderTitleImage>
          <Image src={'/assets/logo.svg'} alt='Marvel Logo' fill priority />
        </S.CharactersHeaderTitleImage>
        <S.CharactersHeaderTitle>EXPLORE O UNIVERSO</S.CharactersHeaderTitle>
        <S.CharactersHeaderText>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </S.CharactersHeaderText>
      </S.CharactersHeaderTitleWrapper>
      <CharactersSearch $primary={false} onSearch={onSearch} />
      <S.CharactersHeaderFiltersWrapper>
        <S.CharactersHeaderFoundText>
          Encontrados 20 heróis
        </S.CharactersHeaderFoundText>
        <S.CharactersHeaderFilters>
          <S.CharactersHeaderFiltersImage>
            <Image
              src={'/assets/ic_heroi.svg'}
              alt='Hero Logo'
              width={15}
              height={15}
            />
            <S.CharactersHeaderFiltersText onClick={toggleOrderBy}>
              Ordenar por nome - {orderBy === 'name' ? 'A/Z' : 'Z/A'}
            </S.CharactersHeaderFiltersText>
          </S.CharactersHeaderFiltersImage>
          <Image src={toggle} alt='toggle button' width={70} height={70} />
          <S.CharactersHeaderFiltersImage>
            <Image
              src={'/assets/favorito_01.svg'}
              alt='Favorite Logo'
              width={15}
              height={15}
            />
            <S.CharactersHeaderFiltersText>
              Somente favoritos
            </S.CharactersHeaderFiltersText>
          </S.CharactersHeaderFiltersImage>
        </S.CharactersHeaderFilters>
      </S.CharactersHeaderFiltersWrapper>
    </S.CharactersHeaderWrapper>
  );
};
