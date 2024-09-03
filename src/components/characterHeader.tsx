import Image from 'next/image';
import { CharactersSearch } from '@/components';
import * as S from '@/styles';

export const CharacterHead = () => {
  return (
    <S.CharacterHeaderWrapper>
      <Image
        src={'/assets/logo_menor.svg'}
        alt='Hero Logo'
        layout='responsive'
        width={250}
        height={100}
      />
      <CharactersSearch $primary />
    </S.CharacterHeaderWrapper>
  );
};
