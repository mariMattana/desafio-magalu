import Image from 'next/image';
import * as S from '@/styles';

export const CharactersHead = () => {
  const toggle = '/assets/toggle_on.svg';

  return (
    <S.CharactersHeaderWrapper>
      <S.CharactersHeaderTitleWrapper>
        <S.CharactersHeaderTitleImage>
          <Image src={'/assets/logo.svg'} alt='Marvel Logo' fill />
        </S.CharactersHeaderTitleImage>
        <S.CharactersHeaderTitle>EXPLORE O UNIVERSO</S.CharactersHeaderTitle>
        <S.CharactersHeaderText>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </S.CharactersHeaderText>
      </S.CharactersHeaderTitleWrapper>
      <S.CharactersHeaderSearchWrapper>
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
        />
      </S.CharactersHeaderSearchWrapper>
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '10px',
        }}
      >
        <p style={{ color: '#d1d1d1' }}>Encontrados 20 heróis</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '30px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Image
              src={'/assets/ic_heroi.svg'}
              alt='Hero Logo'
              width={15}
              height={15}
            />
            <p style={{ color: '#fc7474' }}>Ordenar por nome - A/Z</p>
          </div>
          <Image src={toggle} alt='toggle button' width={70} height={70} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Image
              src={'/assets/favorito_01.svg'}
              alt='Favorite Logo'
              width={15}
              height={15}
            />
            <p style={{ color: '#fc7474' }}>Somente favoritos</p>
          </div>
        </div>
      </div>
    </S.CharactersHeaderWrapper>
  );
};
