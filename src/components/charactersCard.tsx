import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CharacterProps } from '@/types';
import { useFavorites } from '@/hooks';
import * as S from '@/styles';

export const CharactersCard: React.FC<CharacterProps> = ({ character }) => {
  const router = useRouter();
  const { id, name, thumbnail } = character;

  const { favorites, updateFavorite } = useFavorites();

  const handleClick = (id: string) => {
    router.push(`/characters/${id}`);
  };

  const favorite = favorites.includes(id)
    ? '/assets/favorito_01.svg'
    : '/assets/favorito_02.svg';

  return (
    <S.CharactersCardWrapper>
      <Link
        data-testid={`character-${name}`}
        href={`/characters/${id}`}
        onClick={() => handleClick(id)}
      >
        <S.CharactersCardImgWrapper>
          <Image
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={name}
            width={150}
            height={150}
            priority
          />
        </S.CharactersCardImgWrapper>
      </Link>
      <S.CharactersCardInfoWrapper>
        <Link
          data-testid={`character-${name}`}
          href={`/characters/${id}`}
          onClick={() => handleClick(id)}
        >
          <S.CharactersCardInfoText>{name}</S.CharactersCardInfoText>
        </Link>
        <S.FavoriteButton onClick={() => updateFavorite(id)}>
          <Image
            src={favorite}
            alt='favorito'
            width={15}
            height={15}
            priority
          />
        </S.FavoriteButton>
      </S.CharactersCardInfoWrapper>
    </S.CharactersCardWrapper>
  );
};
