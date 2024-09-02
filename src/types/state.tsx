export type FavoriteType = string[];

export type FavoritesContextType = {
  favorites: string[];
  updateFavorite: (id: string) => void;
};
