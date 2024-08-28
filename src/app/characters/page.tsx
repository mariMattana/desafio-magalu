'use client';
import React, { useState, useEffect } from 'react';
import { CharactersData } from '@/types';
import { useCharactersFetchData } from '@/hooks';
import { CHARACTERS_URL } from '@/constants';
import { CharactersCard } from '@/components';
import * as S from '@/styles';

const Characters = () => {
  const { data, isLoading } = useCharactersFetchData(CHARACTERS_URL);

  const [charactersData, setCharactersData] = useState<Partial<CharactersData>>(
    {},
  );

  useEffect(() => {
    if (!isLoading && data.data?.results) {
      setCharactersData(data);
    }
  }, [data, isLoading]);

  const results = charactersData.data?.results || [];

  return (
    <div>
      {isLoading ? (
        <h1>... Carregando Dados.....</h1>
      ) : (
        <S.CharactersListWrapper>
          {results.length > 0 &&
            results.map((item) => (
              <S.CharactersListItemsWrapper key={item.id}>
                <CharactersCard character={item} />
              </S.CharactersListItemsWrapper>
            ))}
        </S.CharactersListWrapper>
      )}
    </div>
  );
};

export default Characters;
