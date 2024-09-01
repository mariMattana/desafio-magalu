import Image from 'next/image';
import { RatingComponent } from '@/components';
import { CharacterProps } from '@/types';
import * as S from '@/styles';

export const CharacterContent: React.FC<CharacterProps> = ({ character }) => {
  const favorite = '/assets/favorito_01.svg';
  const { name, description, comics, stories, thumbnail } = character;
  return (
    <S.CharacterContentWrapper>
      <S.CharacterContent>
        <S.CharacterContentNameFav>
          <h3>{name.toUpperCase()}</h3>
          <Image src={favorite} alt='Hero Logo' width={40} height={40} />
        </S.CharacterContentNameFav>
        <p>{description}</p>
        <div>
          <S.CharacterComicsMovWrapper>
            <S.CharacterContentComicsMov>
              <S.CharacterComicsMovText>Quadrinhos</S.CharacterComicsMovText>
              <S.CharacterComicsMovRat>
                <Image
                  src={'/assets/ic_quadrinhos.svg'}
                  alt='Hero Logo'
                  width={25}
                  height={25}
                />
                <p>{comics.available}</p>
              </S.CharacterComicsMovRat>
            </S.CharacterContentComicsMov>
            <S.CharacterContentComicsMov>
              <S.CharacterComicsMovText>Filmes</S.CharacterComicsMovText>
              <S.CharacterComicsMovRat>
                <Image
                  src={'/assets/ic_trailer.svg'}
                  alt='Hero Logo'
                  width={25}
                  height={25}
                />
                <p>{stories.available}</p>
              </S.CharacterComicsMovRat>
            </S.CharacterContentComicsMov>
          </S.CharacterComicsMovWrapper>
          <S.CharacterComicsMovRat>
            <p>Rating: </p>
            <RatingComponent rating={3} />
          </S.CharacterComicsMovRat>
          <p>Últimos quadrinhos: 13 fev. 2020</p>
        </div>
      </S.CharacterContent>
      <S.CharacterImageWrapper>
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={character.name}
          width={500}
          height={500}
          priority
        />
      </S.CharacterImageWrapper>
    </S.CharacterContentWrapper>
  );
};
