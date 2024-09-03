import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Character from './page';
import { useFetchData, useFavorites } from '@/hooks';

const mockData = {
  data: {
    offset: 0,
    limit: 2,
    total: 2,
    count: 2,
    results: [
      {
        id: '1011334',
        name: '3-D Man',
        description: '',
        modified: '2014-04-29T14:18:17-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
        comics: {
          available: 12,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/comics',
          items: [],
          returned: 12,
        },
        series: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/series',
          items: [],
          returned: 3,
        },
        stories: {
          available: 21,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/stories',
          items: [],
          returned: 20,
        },
        events: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/events',
          items: [],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
    ],
  },
};

const mockFavorites = ['1011334', '1009351'];

jest.mock('@/hooks', () => ({
  useFetchData: jest.fn(),
  useFavorites: jest.fn(),
}));

describe('Character Component', () => {
  beforeEach(() => {
    (useFavorites as jest.Mock).mockReturnValue({ favorites: mockFavorites });
  });
  it('should display loading state', () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: {},
      isLoading: true,
    });

    render(<Character params={{ id: '1011334' }} />);

    expect(screen.getByText('Carregando personagem')).toBeInTheDocument();
  });

  it('should display character details when data is available', async () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
    });

    render(<Character params={{ id: '1011334' }} />);

    expect(screen.getByText('3-D Man')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('21')).toBeInTheDocument();
    expect(
      screen.getByText('Último quadrinho: 29 abr. 2014'),
    ).toBeInTheDocument();
  });

  it('should display no character found message when no data is available', async () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: {},
      isLoading: false,
    });

    render(<Character params={{ id: '1' }} />);

    expect(
      screen.getByText('Nenhum personagem encontrado'),
    ).toBeInTheDocument();
  });
});
