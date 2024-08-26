'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { routes } from '@/constants';
import { CharactersData, CharacterIdProps } from '@/types';
import { useCharactersFetchData } from '@/hooks';
import { CHARACTERS_ID_URL } from '@/constants';

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
      {isLoading ? (
        <h1>... Carregando Personagem.....</h1>
      ) : (
        <h3>{result && result.name}</h3>
      )}
      <button onClick={goToHome}>home</button>
    </div>
  );
};

export default Character;
