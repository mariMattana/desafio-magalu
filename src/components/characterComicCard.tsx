import Image from 'next/image';
import { ComicsProps } from '@/types';
import * as S from '@/styles';

export const ComicCard: React.FC<ComicsProps> = ({ comics }) => {
  const { thumbnail, title } = comics;

  return (
    <S.CharactersCardWrapper>
      <Image
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt='Hero Logo'
        width={180}
        height={250}
      />
      <p>{title}</p>
    </S.CharactersCardWrapper>
  );
};
