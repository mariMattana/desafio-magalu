import { useContext } from 'react';
import { FavoritesContextType } from '@/types';
import { MyStateContext } from '@/app/stateProvider';

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(MyStateContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
