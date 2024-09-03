export type CharactersData = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: [
      {
        id: string;
        name: string;
        description: string;
        modified: string;
        resourceURI: string;
        urls: [
          {
            type: string;
            url: string;
          },
        ];
        thumbnail: {
          path: string;
          extension: string;
        };
        comics: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
            },
          ];
        };
        stories: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
              type: string;
            },
          ];
        };
        events: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
            },
          ];
        };
        series: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
            },
          ];
        };
      },
    ];
  };
  etag: string;
};

export interface CharactersHeadProps {
  toggleOrderBy: () => void;
  orderBy: string;
  onSearch: (text: string) => void;
  toggleFavorites: () => void;
  showFavorites: boolean;
}
