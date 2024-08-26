import React, { useState, useEffect } from 'react';
import { CharactersData } from '@/types';
import { useCharactersFetchData } from '@/hooks';

const Characters = () => {
  const url = process.env.NEXT_PUBLIC_CHARACTERS_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_CHARACTERS_API_KEY;

  const { data, isLoading } = useCharactersFetchData(`${url}?apikey=${apiKey}`);

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
        <ul>
          {results.length > 0 &&
            results.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Characters;
