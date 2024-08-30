import Image from 'next/image';
import { SearchInputProps } from '@/types';
import * as S from '@/styles';

export const CharactersSearch: React.FC<SearchInputProps> = ({ $primary }) => {
  const imageSize = $primary ? 15 : 30;
  return (
    <S.CharactersHeaderSearchWrapper $primary={$primary}>
      <S.CharactersHeaderSearchImage $primary={$primary}>
        <Image
          src={'/assets/ic_busca.svg'}
          alt='Search'
          width={imageSize}
          height={imageSize}
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
