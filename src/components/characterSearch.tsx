import { useState } from 'react';
import Image from 'next/image';
import { SearchInputProps } from '@/types';
import * as S from '@/styles';

export const CharactersSearch: React.FC<SearchInputProps> = ({
  $primary,
  onSearch,
}) => {
  const [searchText, setSearchText] = useState('');
  const imageSize = $primary ? 15 : 30;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    setSearchText(value);

    if (onSearch) {
      onSearch(value);
    }
  };
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
        value={searchText}
        onChange={handleInputChange}
      />
    </S.CharactersHeaderSearchWrapper>
  );
};
