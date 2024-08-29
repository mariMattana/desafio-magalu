import Image from 'next/image';
import { SearchInputProps } from '@/types';
import * as S from '@/styles';

export const CharactersSearch: React.FC<SearchInputProps> = ({ $primary }) => {
  return (
    <S.CharactersHeaderSearchWrapper $primary={$primary}>
      <S.CharactersHeaderSearchImage>
        <Image
          src={'/assets/ic_busca.svg'}
          alt='Search'
          width={30}
          height={30}
        />
      </S.CharactersHeaderSearchImage>
      <S.CharactersHeaderSearchInput
        type='text'
        placeholder='Procure por heróis'
        $primary={$primary}
      />
    </S.CharactersHeaderSearchWrapper>
  );
};
