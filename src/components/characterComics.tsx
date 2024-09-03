import { useState, useEffect } from 'react';
import { ComicCard } from '@/components';
import { ComicsData, CharacterId } from '@/types';
import { useFetchData } from '@/hooks';
import { CHARACTER_COMICS_URL } from '@/constants';
import * as S from '@/styles';

export const CharacterComics: React.FC<CharacterId> = ({
  characterId,
  setModifiedDate,
}) => {
  const { data, isLoading } = useFetchData<ComicsData>(
    CHARACTER_COMICS_URL(characterId),
  );

  const [comicsData, setComicsData] = useState<Partial<ComicsData>>({});

  useEffect(() => {
    if (!isLoading && data.data?.results) {
      setComicsData(data);

      setModifiedDate(
        data.data?.results?.length > 0
          ? new Date(data.data.results[0].modified)
          : '',
      );
    }
  }, [data, isLoading]);

  const result = comicsData.data?.results;

  return (
    <>
      {result ? (
        <S.CharacterComicWrapper>
          <h3>Últimos Lançamentos</h3>
          <S.CharactersListWrapper>
            {result &&
              result.map((item) => (
                <S.CharactersListItemsWrapper key={item.id}>
                  <ComicCard comics={item} />
                </S.CharactersListItemsWrapper>
              ))}
          </S.CharactersListWrapper>
        </S.CharacterComicWrapper>
      ) : isLoading ? (
        <div>Carregando quadrinhos</div>
      ) : (
        <div>Nenhum quadrinho encontrado</div>
      )}
    </>
  );
};
