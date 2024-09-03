import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Characters from '@/app/characters/page';
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
      {
        id: '1017100',
        name: '3-D Man and Has',
        description:
          "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
        modified: '2013-09-18T15:54:04-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017100',
        comics: {
          available: 4,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017100/comics',
          items: [],
          returned: 4,
        },
        series: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017100/series',
          items: [],
          returned: 2,
        },
        stories: {
          available: 7,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017100/stories',
          items: [],
          returned: 7,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017100/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8',
          },
        ],
      },
    ],
  },
};
jest.mock('@/hooks', () => ({
  useFetchData: jest.fn(),
}));

jest.mock('@/hooks', () => ({
  useFetchData: jest.fn(),
  useFavorites: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Character Search Component', () => {
  beforeEach(() => {
    (useFavorites as jest.Mock).mockReturnValue({ favorites: [] });
  });
  it('should display filtered characters', () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
    });

    render(<Characters />);
    const elements = screen.getAllByText(/3-D Man and/i);

    expect(elements).toHaveLength(1);
  });

  it('should display filtered characters', () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
    });

    render(<Characters />);
    const elements = screen.getAllByText(/3-D Man/i);

    expect(elements).toHaveLength(2);
  });
});
