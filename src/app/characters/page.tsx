'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { CharactersData } from '@/types';
import { useFavorites, useFetchData } from '@/hooks';
import { CHARACTERS_URL } from '@/constants';
import { CharactersCard, CharactersHead } from '@/components';
import * as S from '@/styles';

const Characters = () => {
  const [url, setUrl] = useState(CHARACTERS_URL);
  const [orderBy, setOrderBy] = useState('name');
  const [searchText, setSearchText] = useState('');
  const { favorites } = useFavorites();

  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  const { data, isLoading } = useFetchData<CharactersData>(url);

  const [charactersData, setCharactersData] = useState<Partial<CharactersData>>(
    {},
  );

  useEffect(() => {
    if (!isLoading && data.data?.results) {
      setCharactersData(data);
    }
  }, [data, isLoading]);

  const results = charactersData.data?.results || [];

  const favoritesArray = Array.isArray(favorites) ? favorites : [];

  const filteredResults = showFavorites
    ? results.filter((item) => favoritesArray.includes(item.id))
    : results;

  useEffect(() => {
    if (searchText) {
      setUrl(`${CHARACTERS_URL}&nameStartsWith=${searchText}`);
    } else {
      setUrl(CHARACTERS_URL);
    }
  }, [searchText]);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const toggleOrderBy = useCallback(() => {
    const newOrderBy = orderBy === 'name' ? '-name' : 'name';
    setOrderBy(newOrderBy);
    setUrl(`${CHARACTERS_URL}&orderBy=${newOrderBy}`);
  }, [orderBy]);

  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <S.CharactersWrapper>
      <CharactersHead
        toggleOrderBy={toggleOrderBy}
        orderBy={orderBy}
        onSearch={handleSearch}
        toggleFavorites={handleToggleFavorites}
        showFavorites={showFavorites}
      />
      {isLoading ? (
        <h1>... Carregando Dados.....</h1>
      ) : (
        <S.CharactersListWrapper>
          {filteredResults.length > 0 &&
            filteredResults.map((item) => (
              <S.CharactersListItemsWrapper key={item.id}>
                <CharactersCard character={item} />
              </S.CharactersListItemsWrapper>
            ))}
        </S.CharactersListWrapper>
      )}
    </S.CharactersWrapper>
  );
};

export default Characters;
