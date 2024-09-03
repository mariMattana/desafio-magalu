import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CharacterComics } from '@/components';
import { useFetchData, useFavorites } from '@/hooks';

const mockComics = {
  data: {
    offset: 0,
    limit: 10,
    total: 12,
    count: 10,
    results: [
      {
        id: 22506,
        digitalId: 10949,
        title: 'Avengers: The Initiative (2007) #19',
        issueNumber: 19,
        variantDescription: '',
        description: '',
        modified: '2015-10-27T16:38:23-0400',
        isbn: '',
        upc: '5960606084-01911',
        diamondCode: 'SEP082362',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/22506',
        urls: [],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
          name: 'Avengers: The Initiative (2007 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2008-12-17T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2008-11-27T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2010-02-23T00:00:00-0500',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2011-08-09T00:00:00-0400',
          },
        ],
        prices: [],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 9,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/22506/creators',
          items: [],
          returned: 9,
        },
        characters: {
          available: 9,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/22506/characters',
          items: [],
          returned: 9,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/22506/stories',
          items: [],
          returned: 2,
        },
        events: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/22506/events',
          items: [],
          returned: 1,
        },
      },
    ],
  },
};

jest.mock('@/hooks', () => ({
  useFetchData: jest.fn(),
}));

describe('Character Component', () => {
  it('should display loading state', () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: {},
      isLoading: true,
    });

    render(
      <CharacterComics characterId='1011334' setModifiedDate={() => {}} />,
    );

    expect(screen.getByText('Carregando quadrinhos')).toBeInTheDocument();
  });

  it('should display comics cards when data is available', async () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: mockComics,
      isLoading: false,
    });

    render(
      <CharacterComics characterId='1011334' setModifiedDate={() => {}} />,
    );

    expect(
      screen.getByText('Avengers: The Initiative (2007) #19'),
    ).toBeInTheDocument();
  });

  it('should display no comics found message when no data is available', async () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: {},
      isLoading: false,
    });

    render(
      <CharacterComics characterId='1011334' setModifiedDate={() => {}} />,
    );
    expect(screen.getByText('Nenhum quadrinho encontrado')).toBeInTheDocument();
  });
});
