export interface CharacterIdProps {
  params: {
    id: string;
  };
}

export type CharacterData = {
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
};

export interface CharacterProps {
  character: CharacterData;
  modifiedDate?: string | Date;
}

export type CharacterId = {
  characterId: string;
  setModifiedDate: (date: string | Date) => void;
};

export interface RatingProps {
  rating: number;
}
