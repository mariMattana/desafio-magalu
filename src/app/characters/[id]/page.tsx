'use client';
import { useState, useEffect } from 'react';
import { CharacterHead, CharacterContent, CharacterComics } from '@/components';
import { CharactersData, CharacterIdProps } from '@/types';
import { useFetchData } from '@/hooks';
import { CHARACTERS_ID_URL } from '@/constants';
import * as S from '@/styles';

const Character = ({ params }: CharacterIdProps) => {
  const { data, isLoading } = useFetchData<CharactersData>(
    CHARACTERS_ID_URL(params.id),
  );

  const [charactersData, setCharactersData] = useState<Partial<CharactersData>>(
    {},
  );
  const [modifiedDate, setModifiedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (!isLoading && data.data?.results) {
      setCharactersData(data);
    }
  }, [data, isLoading]);

  const result = charactersData.data?.results[0];

  return (
    <div>
      {result ? (
        <>
          <S.CharacterBackgroundWrapper>
            {result.name}
          </S.CharacterBackgroundWrapper>
          <S.CharacterContentPosition>
            <CharacterHead />
            <CharacterContent character={result} modifiedDate={modifiedDate} />
            <CharacterComics
              characterId={result.id}
              setModifiedDate={setModifiedDate}
            />
          </S.CharacterContentPosition>
        </>
      ) : isLoading ? (
        <div>Carregando personagem</div>
      ) : (
        <div>Nenhum personagem encontrado</div>
      )}
    </div>
  );
};

export default Character;
