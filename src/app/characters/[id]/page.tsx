'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CharacterHead, CharacterContent } from '@/components';
import { CharactersData, CharacterIdProps } from '@/types';
import { useCharactersFetchData } from '@/hooks';
import { CHARACTERS_ID_URL, routes } from '@/constants';
import * as S from '@/styles';

const Character = ({ params }: CharacterIdProps) => {
  const { data, isLoading } = useCharactersFetchData(
    CHARACTERS_ID_URL(params.id),
  );

  const [charactersData, setCharactersData] = useState<Partial<CharactersData>>(
    {},
  );

  useEffect(() => {
    if (!isLoading && data.data?.results) {
      setCharactersData(data);
    }
  }, [data, isLoading]);

  const result = charactersData.data?.results[0];

  const router = useRouter();
  const goToHome = () => {
    router.push(routes.characters);
  };

  return (
    <div>
      {result ? (
        <>
          <S.CharacterBackgroundWrapper>
            {result.name}
          </S.CharacterBackgroundWrapper>
          <S.CharacterContentPosition>
            <CharacterHead />
            <CharacterContent character={result} />
            <button onClick={goToHome}>home</button>
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
