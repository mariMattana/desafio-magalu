import { createContext, useState, useEffect, ReactNode } from 'react';
import { FavoriteType } from '@/types';

export const MyStateContext = createContext<{
  favorites: FavoriteType;
  updateFavorite: (id: string) => void;
}>({
  favorites: [],
  updateFavorite: () => {},
});

export const MyStateProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    console.log(storedFavorites);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const updateFavorite = (id: string) => {
    console.log('clicked');
    setFavorites((prevFavorites) => {
      console.log(favorites);
      const isFavorite = prevFavorites.includes(id);
      let updatedFavorites: FavoriteType;

      if (isFavorite) {
        updatedFavorites = prevFavorites.filter((favId) => favId !== id);
      } else {
        if (prevFavorites.length >= 5) {
          alert('Só é possível adicionar 5 favoritos!');
          return prevFavorites;
        }
        updatedFavorites = [...prevFavorites, id];
      }

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <MyStateContext.Provider value={{ favorites, updateFavorite }}>
      {children}
    </MyStateContext.Provider>
  );
};
