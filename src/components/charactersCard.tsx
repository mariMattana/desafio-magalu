import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CharacterProps } from '@/types';
import * as S from '@/styles';

export const CharactersCard: React.FC<CharacterProps> = ({ character }) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/characters/${id}`);
  };

  const favorite = '/assets/favorito_02.svg';

  return (
    <S.CharactersCardWrapper>
      <Link
        data-testid={`character-${character.name}`}
        href={`/characters/${character.id}`}
        onClick={() => handleClick(character.id)}
      >
        <S.CharactersCardImgWrapper>
          <Image
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            width={150}
            height={150}
            priority
          />
        </S.CharactersCardImgWrapper>
      </Link>
      <S.CharactersCardInfoWrapper>
        <Link
          data-testid={`character-${character.name}`}
          href={`/characters/${character.id}`}
          onClick={() => handleClick(character.id)}
        >
          <S.CharactersCardInfoText>{character.name}</S.CharactersCardInfoText>
        </Link>
        <Image src={favorite} alt='favorito' width={15} height={15} priority />
      </S.CharactersCardInfoWrapper>
    </S.CharactersCardWrapper>
  );
};
