export const baseUrl = process.env.NEXT_PUBLIC_CHARACTERS_API_URL;
export const apiKey = process.env.NEXT_PUBLIC_CHARACTERS_API_KEY;

const routes = {
  characters: '/characters',
};

export default routes;

export const CHARACTERS_URL = `${baseUrl}?apikey=${apiKey}`;
export const CHARACTERS_ID_URL = (characterId: string): string => {
  return `${baseUrl}/${characterId}?apikey=${apiKey}`;
};
export const CHARACTER_COMICS_URL = (characterId: string): string => {
  return `${baseUrl}/${characterId}/comics?orderBy=-onsaleDate&limit=10&apikey=${apiKey}`;
};
