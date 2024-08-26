'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CharactersData } from '@/types';
import { useCharactersFetchData } from '@/hooks';
import { CHARACTERS_URL } from '@/constants';

const Characters = () => {
  const { data, isLoading } = useCharactersFetchData(CHARACTERS_URL);

  const [charactersData, setCharactersData] = useState<Partial<CharactersData>>(
    {},
  );

  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/characters/${id}`);
  };

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
        <ul>
          {results.length > 0 &&
            results.map((item) => (
              <li key={item.id}>
                <button onClick={() => handleClick(item.id)}>
                  {item.name}
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Characters;
